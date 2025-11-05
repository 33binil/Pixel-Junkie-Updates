import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/database.js';
import ClientApplication from './models/ClientApplication.js';
import { sendAdminNotification, sendClientConfirmation } from './services/emailService.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet()); // Security headers
// CORS configuration
const allowedOrigins = [
  'https://pixeljunkiestudio.in',
  'https://www.pixeljunkiestudio.in',
  'http://localhost:3000',
  'http://localhost:5173',  // Vite dev server
  'http://127.0.0.1:5173'   // Vite dev server (alternative)
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
}));
app.use(morgan('combined')); // Logging
app.use(express.json({ limit: '10mb' })); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Pixel Junkie Creative Studio API',
    version: '1.0.0',
    status: 'OK'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API routes
app.use('/api/services', (req, res) => {
  res.json({
    services: [
      {
        id: 1,
        name: 'Web Development',
        description: 'Custom web applications and websites',
        category: 'development'
      },
      {
        id: 2,
        name: 'UI/UX Design',
        description: 'User interface and experience design',
        category: 'design'
      },
      {
        id: 3,
        name: 'Branding & Identity',
        description: 'Complete brand identity solutions',
        category: 'branding'
      },
      {
        id: 4,
        name: 'Video Production',
        description: 'Professional video content creation',
        category: 'video'
      }
    ]
  });
});

// Contact form endpoint (simple contact)
app.post('/api/contact', (req, res) => {
  const { name, email, message, service } = req.body;
  
  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Missing required fields',
      required: ['name', 'email', 'message']
    });
  }

  // In a real app, you would save this to a database or send an email
  console.log('Contact form submission:', { name, email, message, service });
  
  res.status(200).json({
    success: true,
    message: 'Thank you for your message. We will get back to you soon!',
    data: { name, email, service }
  });
});

// Client Application endpoint (comprehensive form)
app.post('/api/client-application', async (req, res) => {
  try {
    const applicationData = req.body;
    
    // Basic validation
    if (!applicationData.fullName || !applicationData.businessName || !applicationData.email) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        required: ['fullName', 'businessName', 'email']
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(applicationData.email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Create new client application
    const clientApplication = new ClientApplication(applicationData);
    
    // Save to MongoDB
    let savedApplication;
    try {
      if (mongoose.connection.readyState === 1) { // Check if MongoDB is connected
        savedApplication = await clientApplication.save();
        console.log('✅ Client application saved to MongoDB:', savedApplication._id);
      } else {
        throw new Error('MongoDB not connected');
      }
    } catch (dbError) {
      console.error('❌ Error saving to MongoDB:', dbError.message);
      // Create a temporary object with a valid _id format
      const timestamp = Date.now().toString();
      savedApplication = { 
        _id: new mongoose.Types.ObjectId(),
        ...clientApplication.toObject(),
        isTemporary: true,
        createdAt: new Date()
      };
      console.log('📝 Using temporary application data');
    }

    // Send emails (don't wait for them to complete to avoid timeout)
    const emailPromises = [];
    
    // Send admin notification email
    if (process.env.RESEND_API_KEY && process.env.ADMIN_EMAIL) {
      emailPromises.push(
        sendAdminNotification(applicationData)
          .then(async (result) => {
            if (result.success) {
              console.log('✅ Admin notification email sent');
              
              // Only try to update MongoDB if we have a real document
              if (mongoose.connection.readyState === 1 && !savedApplication.isTemporary) {
                try {
                  await ClientApplication.findByIdAndUpdate(savedApplication._id, {
                    'emailSent.adminNotification': true,
                    'emailSent.adminNotificationAt': new Date()
                  }).exec();
                } catch (updateError) {
                  console.error('❌ Error updating admin notification status in DB:', updateError.message);
                }
              }
            } else {
              console.error('❌ Admin notification email failed:', result.error);
            }
            return result;
          })
          .catch(error => {
            console.error('❌ Admin notification email error:', error.message);
            return { success: false, error: error.message };
          })
      );
    }
    
    // Send client confirmation email
    if (process.env.RESEND_API_KEY && applicationData.email) {
      emailPromises.push(
        sendClientConfirmation(applicationData)
          .then(async (result) => {
            if (result.success) {
              console.log('✅ Client confirmation email sent');
              
              // Only try to update MongoDB if we have a real document
              if (mongoose.connection.readyState === 1 && !savedApplication.isTemporary) {
                try {
                  await ClientApplication.findByIdAndUpdate(savedApplication._id, {
                    'emailSent.clientConfirmation': true,
                    'emailSent.clientConfirmationAt': new Date()
                  }).exec();
                } catch (updateError) {
                  console.error('❌ Error updating client confirmation status in DB:', updateError.message);
                }
              }
            } else {
              console.error('❌ Client confirmation email failed:', result.error);
            }
            return result;
          })
          .catch(error => {
            console.error('❌ Client confirmation email error:', error.message);
            return { success: false, error: error.message };
          })
      );
    }

    // Execute email sending in parallel (but don't wait for completion)
    if (emailPromises.length > 0) {
      Promise.all(emailPromises).catch(error => {
        console.error('❌ Some emails failed to send:', error);
      });
    } else {
      console.log('⚠️ Email configuration missing - no emails will be sent');
    }

    // Return success response immediately
    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! We will review it and get back to you within 24-48 hours.',
      data: {
        applicationId: savedApplication._id,
        submittedAt: savedApplication.createdAt,
        businessName: savedApplication.businessName,
        email: savedApplication.email
      }
    });

  } catch (error) {
    console.error('❌ Client application submission error:', error);
    
    // Check if it's a validation error
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: validationErrors
      });
    }
    
    // Check for duplicate email
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: 'An application with this email address already exists'
      });
    }
    
    res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.'
    });
  }
});

// Projects/Portfolio endpoint
app.get('/api/projects', (req, res) => {
  res.json({
    projects: [
      {
        id: 1,
        title: 'Modern E-commerce Platform',
        description: 'A fully responsive e-commerce solution with React and Node.js',
        category: 'web-development',
        image: '/images/project1.jpg',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
      },
      {
        id: 2,
        title: 'Brand Identity for Tech Startup',
        description: 'Complete brand package including logo, colors, and guidelines',
        category: 'branding',
        image: '/images/project2.jpg',
        technologies: ['Adobe Illustrator', 'Photoshop']
      },
      {
        id: 3,
        title: 'Mobile App UI Design',
        description: 'Clean and intuitive mobile app interface design',
        category: 'ui-ux',
        image: '/images/project3.jpg',
        technologies: ['Figma', 'Adobe XD']
      }
    ]
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The route ${req.originalUrl} does not exist on this server`,
    availableRoutes: [
      'GET /',
      'GET /health',
      'GET /api/services',
      'GET /api/projects',
      'POST /api/contact',
      'POST /api/client-application'
    ]
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
});