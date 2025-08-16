from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]


class EmailService:
    def __init__(self):
        self.smtp_server = os.getenv('EMAIL_HOST', 'smtp.gmail.com')
        self.smtp_port = int(os.getenv('EMAIL_PORT', '587'))
        self.email_user = os.getenv('EMAIL_USER')
        self.email_password = os.getenv('EMAIL_PASSWORD')
        self.email_from = os.getenv('EMAIL_FROM')
        self.email_to = os.getenv('EMAIL_TO')
    
    def send_repair_request_email(self, form_data):
        """Send repair request email to Print Complex"""
        try:
            # Create message
            msg = MIMEMultipart()
            msg['From'] = self.email_from
            msg['To'] = self.email_to
            msg['Subject'] = f"New Repair Request from {form_data.get('name', 'Unknown')}"
            
            # Create HTML email content
            html_body = self._create_email_template(form_data)
            msg.attach(MIMEText(html_body, 'html'))
            
            # Send email
            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            server.starttls()
            server.login(self.email_user, self.email_password)
            
            text = msg.as_string()
            server.sendmail(self.email_from, self.email_to, text)
            server.quit()
            
            logger.info(f"Repair request email sent successfully for {form_data.get('name')}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send repair request email: {str(e)}")
            raise Exception(f"Email sending failed: {str(e)}")
    
    def _create_email_template(self, form_data):
        """Create HTML email template for repair request"""
        urgency_colors = {
            'low': '#28a745',
            'medium': '#ffc107', 
            'high': '#dc3545'
        }
        
        urgency_labels = {
            'low': 'Standard (3-5 days)',
            'medium': 'Priority (1-2 days)',
            'high': 'Urgent (Same day)'
        }
        
        urgency = form_data.get('urgency', 'medium')
        urgency_color = urgency_colors.get(urgency, '#ffc107')
        urgency_label = urgency_labels.get(urgency, 'Priority (1-2 days)')
        
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        description_section = ""
        if form_data.get('description'):
            description_text = form_data.get('description', 'No description provided').replace('\n', '<br>')
            description_section = f"""
            <div class="info-section">
                <h3 style="color: #ec4899; margin-top: 0;">Issue Description</h3>
                <div class="issue-description">
                    {description_text}
                </div>
            </div>
            """
        
        html_template = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>New Repair Request - Print Complex</title>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: linear-gradient(135deg, #ec4899, #9333ea); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }}
                .logo {{ font-size: 24px; font-weight: bold; }}
                .content {{ background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }}
                .info-section {{ background: white; margin: 20px 0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }}
                .info-row {{ display: flex; margin: 10px 0; }}
                .label {{ font-weight: bold; color: #555; min-width: 150px; }}
                .value {{ color: #333; }}
                .urgency {{ padding: 8px 16px; border-radius: 20px; color: white; font-weight: bold; display: inline-block; }}
                .issue-description {{ background: #f1f3f4; padding: 15px; border-radius: 5px; margin: 10px 0; border-left: 4px solid #ec4899; }}
                .footer {{ text-align: center; margin-top: 30px; color: #666; font-size: 14px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="logo">🖨️ Print Complex</div>
                    <h2>New Equipment Repair Request</h2>
                    <p>Submitted on {current_time}</p>
                </div>
                
                <div class="content">
                    <div class="info-section">
                        <h3 style="color: #ec4899; margin-top: 0;">Customer Information</h3>
                        <div class="info-row">
                            <span class="label">Full Name:</span>
                            <span class="value">{form_data.get('name', 'N/A')}</span>
                        </div>
                        <div class="info-row">
                            <span class="label">Email:</span>
                            <span class="value">{form_data.get('email', 'N/A')}</span>
                        </div>
                        <div class="info-row">
                            <span class="label">Phone:</span>
                            <span class="value">{form_data.get('phone', 'N/A')}</span>
                        </div>
                        <div class="info-row">
                            <span class="label">Company:</span>
                            <span class="value">{form_data.get('company', 'Not specified')}</span>
                        </div>
                    </div>
                    
                    <div class="info-section">
                        <h3 style="color: #9333ea; margin-top: 0;">Equipment Details</h3>
                        <div class="info-row">
                            <span class="label">Brand:</span>
                            <span class="value">{form_data.get('equipment_brand', 'N/A')}</span>
                        </div>
                        <div class="info-row">
                            <span class="label">Model:</span>
                            <span class="value">{form_data.get('equipment_model', 'Not specified')}</span>
                        </div>
                        <div class="info-row">
                            <span class="label">Issue Type:</span>
                            <span class="value">{self._format_issue_type(form_data.get('issue', 'N/A'))}</span>
                        </div>
                        <div class="info-row">
                            <span class="label">Service Urgency:</span>
                            <span class="urgency" style="background-color: {urgency_color};">{urgency_label}</span>
                        </div>
                    </div>
                    
                    {description_section}
                    
                    <div class="info-section">
                        <h3 style="color: #9333ea; margin-top: 0;">Next Steps</h3>
                        <ul style="margin: 0; padding-left: 20px;">
                            <li>Contact customer within 24 hours to confirm details</li>
                            <li>Schedule service appointment at customer's convenience</li>
                            <li>Perform professional diagnosis and repair</li>
                            <li>Provide warranty coverage for service and parts</li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer">
                    <p><strong>Print Complex</strong> - Professional Equipment Service</p>
                    <p>📞 +79104297686 | 📧 9104297686@outlook.com</p>
                    <p>📍 Abramtsevskaya str., 2</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        return html_template
    
    def _format_issue_type(self, issue_value):
        """Convert issue value to readable format"""
        issue_mapping = {
            'poor-print-quality': 'Poor Print Quality',
            'print-jams': 'Print Jams', 
            'paper-wont-pickup': 'Paper Won' + chr(39) + 't Pick Up',
            'screen-wont-light': 'Screen Won' + chr(39) + 't Light Up',
            'error-code': 'Error Code Display',
            'toner-issues': 'Toner/Ink Issues',
            'connectivity-problems': 'Connectivity Problems',
            'other': 'Other Issue'
        }
        return issue_mapping.get(issue_value, issue_value)


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
