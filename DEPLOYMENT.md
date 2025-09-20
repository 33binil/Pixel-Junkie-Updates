# 🚀 Deployment Checklist for Render.com

## Pre-Deployment Setup

### ✅ MongoDB Atlas Setup
- [ ] Create MongoDB Atlas account
- [ ] Create new cluster (free tier)
- [ ] Create database user
- [ ] Whitelist IP addresses (0.0.0.0/0 for all IPs)
- [ ] Get connection string
- [ ] Test connection locally

### ✅ Email Service Setup
- [ ] Gmail account ready
- [ ] 2-Factor Authentication enabled
- [ ] App Password generated (16 characters)
- [ ] Test email sending locally

### ✅ GitHub Repository
- [ ] Repository created on GitHub
- [ ] All code pushed to main branch
- [ ] .env files added to .gitignore
- [ ] render.yaml file included

## Deployment Steps

### 🌐 Backend Deployment
1. **Create Web Service on Render**
   - [ ] New → Web Service
   - [ ] Connect GitHub repository
   - [ ] Runtime: Node
   - [ ] Build Command: `cd backend && npm install`
   - [ ] Start Command: `cd backend && npm start`

2. **Environment Variables**
   - [ ] `NODE_ENV` = `production`
   - [ ] `PORT` = `10000`
   - [ ] `MONGODB_URI` = `mongodb+srv://...`
   - [ ] `EMAIL_USER` = `your-gmail@gmail.com`
   - [ ] `EMAIL_PASS` = `your-app-password`
   - [ ] `ADMIN_EMAIL` = `admin@your-domain.com`
   - [ ] `FRONTEND_URL` = `https://frontend-url.onrender.com`

3. **Verification**
   - [ ] Service deploys successfully
   - [ ] Health check `/health` returns 200
   - [ ] Database connection established
   - [ ] Note the backend URL for frontend

### 🎨 Frontend Deployment
1. **Create Static Site on Render**
   - [ ] New → Static Site
   - [ ] Connect GitHub repository
   - [ ] Build Command: `cd frontend && npm install && npm run build`
   - [ ] Publish Directory: `./frontend/dist`

2. **Environment Variables**
   - [ ] `VITE_API_URL` = `https://backend-url.onrender.com`

3. **Verification**
   - [ ] Site builds and deploys successfully
   - [ ] Frontend loads correctly
   - [ ] API calls work to backend
   - [ ] Note the frontend URL

### 🔄 Final Configuration
- [ ] Update backend `FRONTEND_URL` with actual frontend URL
- [ ] Test client application form submission
- [ ] Verify admin email notifications
- [ ] Verify client confirmation emails

## Testing Checklist

### 📝 Frontend Testing
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Client application form displays
- [ ] Form validation works
- [ ] Loading states show during submission
- [ ] Success/error messages display

### 🛠 Backend Testing
- [ ] All API endpoints respond
- [ ] MongoDB connection working
- [ ] Client application data saves
- [ ] Admin email sent successfully
- [ ] Client confirmation email sent
- [ ] Error handling works

### 📧 Email Testing
- [ ] Admin receives formatted notification
- [ ] Client receives confirmation email
- [ ] Email content is properly formatted
- [ ] All dynamic data displays correctly

## Production URLs

### 🔗 Service URLs
- **Backend**: `https://[your-backend-service].onrender.com`
- **Frontend**: `https://[your-frontend-service].onrender.com`

### 📊 Monitoring
- **Health Check**: `https://[backend-url].onrender.com/health`
- **API Status**: `https://[backend-url].onrender.com/`

## Environment Variables Reference

### Backend (.env)
```env
NODE_ENV=production
PORT=10000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pixeljunkie?retryWrites=true&w=majority
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-digit-app-password
ADMIN_EMAIL=admin@your-domain.com
FRONTEND_URL=https://your-frontend.onrender.com
```

### Frontend (.env)
```env
VITE_API_URL=https://your-backend.onrender.com
VITE_APP_NAME=Pixel Junkie Creative Studio
VITE_APP_VERSION=1.0.0
```

## Troubleshooting

### 🔧 Common Issues
- **Build Fails**: Check node version, dependencies
- **Database Connection**: Verify MongoDB URI and whitelist
- **Email Not Sending**: Check Gmail app password and settings
- **CORS Errors**: Verify FRONTEND_URL matches actual frontend domain
- **Environment Variables**: Ensure all required vars are set

### 📞 Support
- **Render Docs**: https://render.com/docs
- **MongoDB Docs**: https://docs.mongodb.com
- **Gmail App Passwords**: https://support.google.com/accounts/answer/185833

---
🎉 **Success!** Your full-stack application should now be live on Render.com with MongoDB storage and email notifications!