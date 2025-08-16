from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from email_service import EmailService
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email service
email_service = EmailService()

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class RepairRequest(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    company: Optional[str] = None
    equipment_brand: str
    equipment_model: Optional[str] = None
    issue: str
    urgency: str = "medium"
    description: Optional[str] = None
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = "submitted"

class RepairRequestCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    company: Optional[str] = None
    equipmentBrand: str
    equipmentModel: Optional[str] = None
    issue: str
    urgency: str = "medium"
    description: Optional[str] = None

class RepairRequestResponse(BaseModel):
    success: bool
    message: str
    request_id: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Print Complex API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/repair-requests", response_model=RepairRequestResponse)
async def submit_repair_request(request: RepairRequestCreate, background_tasks: BackgroundTasks):
    """Submit a new repair request and send email notification"""
    try:
        # Create repair request object
        repair_request_data = {
            "name": request.name,
            "email": request.email,
            "phone": request.phone,
            "company": request.company,
            "equipment_brand": request.equipmentBrand,
            "equipment_model": request.equipmentModel,
            "issue": request.issue,
            "urgency": request.urgency,
            "description": request.description
        }
        
        repair_request = RepairRequest(**repair_request_data)
        
        # Save to database
        await db.repair_requests.insert_one(repair_request.dict())
        
        # Send email notification in background
        background_tasks.add_task(
            email_service.send_repair_request_email,
            repair_request.dict()
        )
        
        return RepairRequestResponse(
            success=True,
            message="Your repair request has been submitted successfully. We will contact you within 24 hours.",
            request_id=repair_request.id
        )
        
    except Exception as e:
        logger.error(f"Error submitting repair request: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit repair request. Please try again.")

@api_router.get("/repair-requests", response_model=List[RepairRequest])
async def get_repair_requests():
    """Get all repair requests (for admin purposes)"""
    repair_requests = await db.repair_requests.find().to_list(1000)
    return [RepairRequest(**request) for request in repair_requests]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
