# Pixel Junkie Creative Studio - Full Stack Application

A modern full-stack web application for a creative studio, built with React frontend and Express.js backend.

## 🏗️ Project Structure

```
Project/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   │   └── api.js   # API utility functions
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── .env
├── backend/            # Express.js backend API
│   ├── server.js       # Main server file
│   ├── package.json
│   └── .env
├── package.json        # Root package.json for managing both apps
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone and install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Start development servers:**
   ```bash
   npm run dev
   ```
   This will start both frontend (http://localhost:5173) and backend (http://localhost:5000) simultaneously.

### Alternative: Start individually

**Frontend only:**
```bash
npm run dev:frontend
```

**Backend only:**
```bash
npm run dev:backend
```

## 📝 Available Scripts

### Root Level Scripts
- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:frontend` - Start only frontend development server
- `npm run dev:backend` - Start only backend development server
- `npm run build` - Build frontend for production
- `npm run install:all` - Install dependencies for all packages
- `npm run clean` - Remove all node_modules and build folders

### Frontend Scripts (run from `/frontend`)
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Scripts (run from `/backend`)
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🔗 API Endpoints

The backend provides the following API endpoints:

### General
- `GET /` - Welcome message and API info
- `GET /health` - Health check endpoint

### Business Endpoints
- `GET /api/services` - Get list of services
- `GET /api/projects` - Get portfolio projects
- `POST /api/contact` - Submit simple contact form
- `POST /api/client-application` - Submit comprehensive client application

## ✨ New Features Added

### Client Application System
- **Comprehensive Form**: Detailed client application form with all business information
- **MongoDB Storage**: All form submissions are stored in MongoDB with proper validation
- **Email Notifications**: 
  - Admin receives detailed notification email with all form data
  - Client receives professional confirmation email
- **Form Validation**: Both frontend and backend validation for data integrity
- **Professional Email Templates**: Beautifully designed HTML email templates

### Email System
- **Gmail Integration**: Uses Gmail SMTP with App Passwords
- **Rich HTML Templates**: Professional email templates with styling
- **Error Handling**: Graceful email delivery failure handling
- **Status Tracking**: Database tracks email delivery status

## 🛠️ Technology Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing

### Backend
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security headers
- **Morgan** - HTTP request logger
- **dotenv** - Environment variables

## 🔧 Configuration

### Environment Variables

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Pixel Junkie Creative Studio
VITE_APP_VERSION=1.0.0
```

**Backend (.env)**
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## 📦 Frontend API Usage

The frontend includes a utility file (`src/utils/api.js`) for making API calls:

```javascript
import { getServices, submitContact } from '../utils/api';

// Get services
const services = await getServices();

// Submit contact form
const response = await submitContact({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello!',
  service: 'web-development'
});
```

## 🚀 Deployment on Render.com

### Prerequisites
1. GitHub repository with your code
2. MongoDB Atlas account (free tier available)
3. Gmail account with App Password for email service

### Step 1: Setup MongoDB Atlas
1. Create a free MongoDB Atlas account at https://mongodb.com
2. Create a new cluster
3. Create a database user
4. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/pixeljunkie?retryWrites=true&w=majority`)

### Step 2: Setup Email Service
1. Go to your Gmail Account Settings
2. Enable 2-Factor Authentication
3. Generate an App Password for "Mail"
4. Note down the 16-character app password

### Step 3: Push to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit with MongoDB and email integration"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### Step 4: Deploy Backend on Render
1. Go to https://render.com and sign up/login
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `pixeljunkie-backend`
   - **Runtime**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Plan**: Free

5. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `PORT` = `10000`
   - `MONGODB_URI` = Your MongoDB Atlas connection string
   - `EMAIL_USER` = Your Gmail address
   - `EMAIL_PASS` = Your Gmail App Password
   - `ADMIN_EMAIL` = Email where you want to receive notifications
   - `FRONTEND_URL` = `https://your-frontend-url.onrender.com` (will get this after frontend deployment)

### Step 5: Deploy Frontend on Render
1. Click "New" → "Static Site"
2. Connect your GitHub repository
3. Configure the service:
   - **Name**: `pixeljunkie-frontend`
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `./frontend/dist`

4. Add Environment Variable:
   - `VITE_API_URL` = Your backend URL (e.g., `https://pixeljunkie-backend.onrender.com`)

### Step 6: Update CORS Settings
After both services are deployed, update the `FRONTEND_URL` environment variable in your backend service with the actual frontend URL.

### Alternative: Deploy Both with render.yaml
Use the included `render.yaml` file for automatic deployment:
1. Push the `render.yaml` file to your GitHub repository
2. In Render, click "New" → "Blueprint"
3. Connect your repository and deploy

## 🔮 Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- User authentication and authorization
- File upload functionality
- Email service integration
- Payment processing
- Admin dashboard
- Real-time features with Socket.io

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.