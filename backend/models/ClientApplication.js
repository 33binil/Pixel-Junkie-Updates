import mongoose from 'mongoose';

const clientApplicationSchema = new mongoose.Schema({
  // Basic Information
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    maxlength: [100, 'Full name cannot exceed 100 characters']
  },
  businessName: {
    type: String,
    required: [true, 'Business name is required'],
    trim: true,
    maxlength: [100, 'Business name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
  },
  
  // Business Details
  businessStory: {
    type: String,
    trim: true,
    maxlength: [2000, 'Business story cannot exceed 2000 characters']
  },
  excitement: {
    type: String,
    trim: true,
    maxlength: [2000, 'Excitement description cannot exceed 2000 characters']
  },
  
  // Services Interested In
  services: {
    branding: { type: Boolean, default: false },
    consulting: { type: Boolean, default: false },
    uiux: { type: Boolean, default: false },
    webdev: { type: Boolean, default: false },
    appdev: { type: Boolean, default: false },
    marketing: { type: Boolean, default: false },
    video: { type: Boolean, default: false },
    motion: { type: Boolean, default: false }
  },
  
  // Project Details
  collateralDescription: {
    type: String,
    trim: true,
    maxlength: [1000, 'Collateral description cannot exceed 1000 characters']
  },
  budget: {
    type: String,
    trim: true,
    maxlength: [100, 'Budget cannot exceed 100 characters']
  },
  launchDate: {
    type: String,
    trim: true,
    maxlength: [100, 'Launch date cannot exceed 100 characters']
  },
  businessDuration: {
    type: String,
    enum: ['Less than 1 year', '1-2 years', '3-5 years', '5 years+', ''],
    default: ''
  },
  
  // Additional Information
  additionalInfo: {
    type: String,
    trim: true,
    maxlength: [2000, 'Additional information cannot exceed 2000 characters']
  },
  contactInfo: {
    type: String,
    trim: true,
    maxlength: [200, 'Contact information cannot exceed 200 characters']
  },
  
  // System Fields
  status: {
    type: String,
    enum: ['new', 'contacted', 'in-progress', 'completed', 'rejected'],
    default: 'new'
  },
  notes: [{
    content: String,
    createdBy: String,
    createdAt: { type: Date, default: Date.now }
  }],
  
  // Email Status
  emailSent: {
    adminNotification: { type: Boolean, default: false },
    clientConfirmation: { type: Boolean, default: false }
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Create indexes for better performance
clientApplicationSchema.index({ email: 1 });
clientApplicationSchema.index({ createdAt: -1 });
clientApplicationSchema.index({ status: 1 });

// Virtual for selected services array
clientApplicationSchema.virtual('selectedServices').get(function() {
  const serviceLabels = {
    branding: 'Branding & Identity',
    consulting: 'Business Consulting & Scaling Solutions',
    uiux: 'UI/UX Designing',
    webdev: 'Web Development',
    appdev: 'App Development',
    marketing: 'Digital Marketing & Strategy',
    video: 'Video Production',
    motion: 'Motion Graphics'
  };
  
  return Object.entries(this.services)
    .filter(([key, value]) => value)
    .map(([key]) => serviceLabels[key]);
});

// Pre-save middleware to validate at least one service is selected
clientApplicationSchema.pre('save', function(next) {
  const hasSelectedService = Object.values(this.services).some(service => service);
  if (!hasSelectedService) {
    // Don't require service selection, just log it
    console.log('Note: No services selected for application:', this.email);
  }
  next();
});

const ClientApplication = mongoose.model('ClientApplication', clientApplicationSchema);

export default ClientApplication;