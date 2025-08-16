import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { commonIssues, supportedBrands } from '../data/mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const RepairRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    equipmentBrand: '',
    equipmentModel: '',
    issue: '',
    description: '',
    urgency: 'medium'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [requestId, setRequestId] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await axios.post(`${API}/repair-requests`, formData);
      
      if (response.data.success) {
        setIsSubmitted(true);
        setRequestId(response.data.request_id);
      } else {
        setError('Failed to submit repair request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting repair request:', error);
      setError(error.response?.data?.detail || 'Failed to submit repair request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="repair-request" className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-2xl border-green-200">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted Successfully!</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Thank you for your repair request. We will contact you within 24 hours to schedule your service.
                </p>
                <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2">
                  Request ID: {requestId}
                </Badge>
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Next Steps:</strong>
                  </p>
                  <ul className="text-left text-gray-600 space-y-1">
                    <li>• Our technician will call you to confirm details</li>
                    <li>• We'll schedule a convenient service time</li>
                    <li>• Professional diagnosis and repair</li>
                    <li>• Email confirmation has been sent to Print Complex</li>
                  </ul>
                </div>
                <Button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      equipmentBrand: '',
                      equipmentModel: '',
                      issue: '',
                      description: '',
                      urgency: 'medium'
                    });
                  }}
                  className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  Submit Another Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="repair-request" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-200">
            Get Help Now
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Request Equipment
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block lg:inline lg:ml-4">
              Repair Service
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fill out the form below and our expert technicians will contact you within 24 hours to schedule your repair service.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
                <CardDescription>Get in touch with our support team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+79104297686</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">9104297686@outlook.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">Abramtsevskaya str., 2</p>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Quick Response Guarantee</h4>
                  <p className="text-gray-600 text-sm">We respond to all repair requests within 24 hours and provide flexible scheduling to match your business hours.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Repair Request Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Repair Request Form</CardTitle>
                <CardDescription>Please provide details about your equipment and the issue you're experiencing</CardDescription>
              </CardHeader>
              <CardContent>
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">{error}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Enter company name (optional)"
                      />
                    </div>
                  </div>

                  {/* Equipment Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="equipmentBrand">Equipment Brand *</Label>
                      <Select onValueChange={(value) => handleInputChange('equipmentBrand', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select equipment brand" />
                        </SelectTrigger>
                        <SelectContent>
                          {supportedBrands.map((brand, index) => (
                            <SelectItem key={index} value={brand.toLowerCase().replace(/\s+/g, '-')}>
                              {brand}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="equipmentModel">Equipment Model</Label>
                      <Input
                        id="equipmentModel"
                        value={formData.equipmentModel}
                        onChange={(e) => handleInputChange('equipmentModel', e.target.value)}
                        placeholder="Enter model number"
                      />
                    </div>
                  </div>

                  {/* Issue Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="issue">Type of Issue *</Label>
                      <Select onValueChange={(value) => handleInputChange('issue', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the issue type" />
                        </SelectTrigger>
                        <SelectContent>
                          {commonIssues.map((issue) => (
                            <SelectItem key={issue.value} value={issue.value}>
                              {issue.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Service Urgency</Label>
                      <Select onValueChange={(value) => handleInputChange('urgency', value)} defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Standard (3-5 days)</SelectItem>
                          <SelectItem value="medium">Priority (1-2 days)</SelectItem>
                          <SelectItem value="high">Urgent (Same day)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Issue Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Please describe the issue in detail, including any error messages or codes"
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Submit Repair Request
                        <Send className="ml-2 w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairRequestForm;