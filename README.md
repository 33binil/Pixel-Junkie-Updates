# 🚀 Pixel Junkie Creative Studio v1.7.0

**A Modern Full-Stack Creative Studio Platform**

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248.svg)](https://mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)](https://vitejs.dev/)

---

## 🎯 Overview

Pixel Junkie Creative Studio is a comprehensive full-stack web application designed for modern creative agencies. Version 1.7.0 introduces advanced client management, automated email systems, and production-ready deployment capabilities.

## ✨ What's New in v1.7.0

### 🔥 Major Features
- **🔔 Smart Client Application System** - Comprehensive business intake with intelligent form validation
- **📧 Professional Email Automation** - Gmail SMTP integration with beautiful HTML templates
- **🗄️ MongoDB Atlas Integration** - Scalable cloud database with real-time data persistence
- **🚀 Production Deployment** - One-click deployment to Render.com with automated CI/CD
- **🔒 Enhanced Security** - Helmet.js integration, CORS protection, and secure API endpoints
- **⚡ Performance Optimized** - Reduced bundle sizes and optimized build processes

### 🛠️ Technical Improvements
- **React 19** - Latest React features and improved performance
- **Advanced API Design** - RESTful endpoints with comprehensive error handling
- **Environment Management** - Secure configuration across development and production
- **Modern Build Tools** - Vite 5.0 for lightning-fast development and builds

---

## 🏗️ Architecture

```
Pixel Junkie v1.7.0/
├── 🌐 Frontend (React 19 + Vite)
│   ├── Modern UI with Tailwind CSS
│   ├── Framer Motion animations
│   ├── Responsive design system
│   └── Client application forms
├── 🔧 Backend (Express.js + Node.js)
│   ├── RESTful API endpoints
│   ├── MongoDB Atlas integration
│   ├── Email service (Gmail SMTP)
│   └── Security middleware
├── 📦 Database (MongoDB Atlas)
│   ├── Client applications storage
│   ├── Email delivery tracking
│   └── Scalable cloud infrastructure
└── 🚀 Deployment (Render.com)
    ├── Automated builds
    ├── Production optimization
    └── Zero-downtime deployments
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 16+ installed
- **MongoDB Atlas** account (free tier available)
- **Gmail** account with App Password enabled

### Installation & Setup

1. **Clone and Install**
   ```bash
   git clone <your-repo-url>
   cd pixel-junkie-v1.7
   npm run install:all
   ```

2. **Environment Configuration**
   ```bash
   # Frontend (.env)
   VITE_API_URL=http://localhost:5000
   VITE_APP_NAME=Pixel Junkie Creative Studio
   VITE_APP_VERSION=1.7.0

   # Backend (.env)
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=your_mongodb_atlas_connection_string
   EMAIL_USER=your_gmail@gmail.com
   EMAIL_PASS=your_gmail_app_password
   ADMIN_EMAIL=admin@pixeljunkie.com
   ```

3. **Launch Development Servers**
   ```bash
   npm run dev
   ```
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

---

## 📡 API Endpoints

### Core Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Welcome message and API information |
| `GET` | `/health` | System health check |

### Business Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/services` | Retrieve available creative services |
| `GET` | `/api/projects` | Portfolio projects showcase |
| `POST` | `/api/contact` | Simple contact form submission |
| `POST` | `/api/client-application` | Comprehensive client application intake |

---

## 📧 Email System

### Automated Email Features
- **Client Confirmation Emails** - Professional welcome emails with project details
- **Admin Notifications** - Detailed application summaries sent to studio administrators
- **HTML Email Templates** - Beautifully designed responsive email templates
- **Delivery Tracking** - Email status monitoring and failure handling

### Email Configuration
```javascript
// Gmail SMTP Configuration
EMAIL_USER=your-studio@gmail.com
EMAIL_PASS=your-16-char-app-password
ADMIN_EMAIL=admin@pixeljunkie.com
```

---

## 🗄️ Database Schema

### Client Applications Collection
```javascript
{
  _id: ObjectId,
  companyName: String,
  contactPerson: String,
  email: String,
  phone: String,
  projectType: String,
  budget: String,
  timeline: String,
  requirements: String,
  submittedAt: Date,
  status: String,
  emailSent: Boolean
}
```

---

## 🚀 Production Deployment

### Render.com Deployment

#### Backend Service
```yaml
Name: pixeljunkie-backend-v1.7
Runtime: Node.js
Build Command: cd backend && npm install
Start Command: cd backend && npm start
Environment Variables:
  - NODE_ENV=production
  - PORT=10000
  - MONGODB_URI=mongodb+srv://...
  - EMAIL_USER=your-gmail@gmail.com
  - EMAIL_PASS=your-app-password
```

#### Frontend Service
```yaml
Name: pixeljunkie-frontend-v1.7
Build Command: cd frontend && npm install && npm run build
Publish Directory: frontend/dist
Environment Variables:
  - VITE_API_URL=https://pixeljunkie-backend-v1.7.onrender.com
```

---

## 🔧 Development Scripts

### Root Level
- `npm run dev` - Launch both frontend and backend servers
- `npm run install:all` - Install all dependencies
- `npm run build` - Production build
- `npm run clean` - Remove all node_modules and build artifacts

### Frontend
- `npm run dev` - Vite development server
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run lint` - Code linting

### Backend
- `npm run dev` - Development server with auto-restart
- `npm start` - Production server

---

## 🎨 Technology Stack

### Frontend Technologies
- **React 19** - Modern React with concurrent features
- **Vite 5.0** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **React Router DOM** - Declarative routing

### Backend Technologies
- **Express.js** - Fast, unopinionated web framework
- **MongoDB Atlas** - Cloud database service
- **Nodemailer** - Email sending capabilities
- **Helmet.js** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logging
- **dotenv** - Environment variable management

---

## 📋 Version History

### v1.7.0 (October 2025) - Current
#### ✨ New Features
- Advanced client application system with comprehensive business intake
- Professional email automation with Gmail SMTP integration
- MongoDB Atlas cloud database integration
- Production-ready deployment configuration
- Enhanced security with Helmet.js and CORS protection
- Performance optimizations and bundle size reduction

#### 🛠️ Technical Updates
- Upgraded to React 19 for latest capabilities
- Enhanced API design with comprehensive error handling
- Improved environment-based configuration management
- Modern project structure with better organization

### v1.0.0 (Initial Release)
- Basic React frontend with Vite build system
- Express.js backend with essential API endpoints
- Initial project structure and configuration

---

## 🤝 Contributing

We welcome contributions to Pixel Junkie Creative Studio!

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code style and conventions
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## 📞 Support & Contact

**Pixel Junkie Creative Studio**
- 🌐 Website: [pixeljunkie.com](https://pixeljunkie.com)
- 📧 Email: info@pixeljunkie.com
- 📱 Phone: +1 (555) 123-4567

For technical support or inquiries about version 1.7.0, please contact our development team.

---

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by Pixel Junkie Creative Studio Team**