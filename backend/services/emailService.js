import sgMail from '@sendgrid/mail';

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Email templates (unchanged)
const emailTemplates = {
  // Admin notification email
  adminNotification: (applicationData) => {
    const selectedServices = Object.entries(applicationData.services)
      .filter(([key, value]) => value)
      .map(([key]) => {
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
        return serviceLabels[key];
      });

    return {
      subject: `New Client Application - ${applicationData.businessName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 800px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3D3C27, #4D4C37); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .section { margin-bottom: 25px; }
            .section h3 { color: #3D3C27; border-bottom: 2px solid #3D3C27; padding-bottom: 5px; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
            .info-item { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #3D3C27; }
            .services { display: flex; flex-wrap: wrap; gap: 10px; }
            .service-tag { background: #3D3C27; color: white; padding: 5px 12px; border-radius: 15px; font-size: 14px; }
            .highlight { background: #fff3cd; padding: 10px; border-radius: 5px; border-left: 4px solid #ffc107; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Client Application Received!</h1>
              <p>A new potential client has submitted an application through the website.</p>
            </div>
            
            <div class="content">
              <div class="highlight">
                <strong>⏰ Application Date:</strong> ${new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>

              <div class="section">
                <h3>👤 Client Information</h3>
                <div class="info-grid">
                  <div class="info-item">
                    <strong>Full Name:</strong><br>
                    ${applicationData.fullName}
                  </div>
                  <div class="info-item">
                    <strong>Business Name:</strong><br>
                    ${applicationData.businessName}
                  </div>
                  <div class="info-item">
                    <strong>Email:</strong><br>
                    <a href="mailto:${applicationData.email}">${applicationData.email}</a>
                  </div>
                  <div class="info-item">
                    <strong>Business Duration:</strong><br>
                    ${applicationData.businessDuration || 'Not specified'}
                  </div>
                </div>
              </div>

              ${selectedServices.length > 0 ? `
              <div class="section">
                <h3>🎯 Services Interested In</h3>
                <div class="services">
                  ${selectedServices.map(service => `<span class="service-tag">${service}</span>`).join('')}
                </div>
              </div>
              ` : ''}

              <div class="section">
                <h3>💰 Project Details</h3>
                <div class="info-grid">
                  <div class="info-item">
                    <strong>Budget:</strong><br>
                    ${applicationData.budget || 'Not specified'}
                  </div>
                  <div class="info-item">
                    <strong>Launch Date:</strong><br>
                    ${applicationData.launchDate || 'Not specified'}
                  </div>
                </div>
              </div>

              ${applicationData.businessStory ? `
              <div class="section">
                <h3>📖 Business Story</h3>
                <div class="info-item">
                  ${applicationData.businessStory.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}

              ${applicationData.excitement ? `
              <div class="section">
                <h3>✨ Why They're Excited to Work with Us</h3>
                <div class="info-item">
                  ${applicationData.excitement.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}

              ${applicationData.collateralDescription ? `
              <div class="section">
                <h3>📝 Additional Service Description</h3>
                <div class="info-item">
                  ${applicationData.collateralDescription.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}

              ${applicationData.additionalInfo ? `
              <div class="section">
                <h3>💭 Additional Information</h3>
                <div class="info-item">
                  ${applicationData.additionalInfo.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}

              ${applicationData.contactInfo ? `
              <div class="section">
                <h3>📞 Contact Information</h3>
                <div class="info-item">
                  ${applicationData.contactInfo}
                </div>
              </div>
              ` : ''}

              <div class="highlight">
                <strong>📋 Next Steps:</strong>
                <ul>
                  <li>Review the application details above</li>
                  <li>Respond to the client within 24-48 hours</li>
                  <li>Schedule a discovery call if interested</li>
                  <li>Update the application status in the admin panel</li>
                </ul>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    };
  },

  // Client confirmation email
  clientConfirmation: (applicationData) => ({
    subject: 'Application Received - Pixel Junkie Creative Studios',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #3D3C27, #4D4C37); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .section { margin-bottom: 20px; }
          .highlight { background: #d4edda; padding: 15px; border-radius: 5px; border-left: 4px solid #28a745; }
          .info-box { background: white; padding: 20px; border-radius: 5px; margin: 15px 0; }
          .signature { margin-top: 30px; padding-top: 20px; border-top: 2px solid #3D3C27; }
          .social-links { text-align: center; margin-top: 20px; }
          .social-links a { text-decoration: none; color: #3D3C27; margin: 0 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎨 Pixel Junkie Creative Studios</h1>
            <p>Thank you for your application!</p>
          </div>
          
          <div class="content">
            <div class="highlight">
              <h3>✅ Application Successfully Received</h3>
              <p>Dear <strong>${applicationData.fullName}</strong>,</p>
              <p>Thank you for submitting your application for <strong>${applicationData.businessName}</strong>. We're excited to learn about your project!</p>
            </div>

            <div class="info-box">
              <h3>📋 What We Received</h3>
              <p><strong>Application Date:</strong> ${new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
              <p><strong>Business Name:</strong> ${applicationData.businessName}</p>
              <p><strong>Contact Email:</strong> ${applicationData.email}</p>
            </div>

            <div class="section">
              <h3>🚀 What Happens Next?</h3>
              <ul>
                <li><strong>Review Process:</strong> Our team will carefully review your application within 24-48 hours</li>
                <li><strong>Initial Response:</strong> You'll hear back from us with next steps or questions</li>
                <li><strong>Discovery Call:</strong> If we're a good fit, we'll schedule a call to discuss your project in detail</li>
                <li><strong>Proposal:</strong> We'll create a custom proposal tailored to your needs and budget</li>
              </ul>
            </div>

            <div class="info-box">
              <h3>💡 In the Meantime</h3>
              <p>While we review your application, feel free to:</p>
              <ul>
                <li>Check out our portfolio and case studies on our website</li>
                <li>Follow us on social media for creative inspiration</li>
                <li>Gather any additional materials or ideas you'd like to share</li>
              </ul>
            </div>

            <div class="highlight">
              <p><strong>Questions?</strong> Don't hesitate to reply to this email or contact us directly. We're here to help!</p>
            </div>

            <div class="signature">
              <p>Best regards,<br>
              <strong>The Pixel Junkie Creative Studios Team</strong></p>
              
              <div class="social-links">
                <p>🌐 <a href="#">www.pixeljunkie.com</a> | 
                📧 <a href="mailto:${process.env.ADMIN_EMAIL || 'hello@pixeljunkie.com'}">${process.env.ADMIN_EMAIL || 'hello@pixeljunkie.com'}</a></p>
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `
  })
};

// Send email function
export const sendEmail = async (to, template, templateData) => {
  try {
    const emailContent = emailTemplates[template](templateData);
    
    const msg = {
      to: to,
      from: {
        email: process.env.EMAIL_USER || 'noreply@pixeljunkie.com', // Must be verified in SendGrid
        name: 'Pixel Junkie Creative Studios'
      },
      subject: emailContent.subject,
      html: emailContent.html
    };

    const result = await sgMail.send(msg);
    console.log(`📧 Email sent successfully to ${to}:`, result[0]?.headers?.['x-message-id'] || 'sent');
    
    return { success: true, messageId: result[0]?.headers?.['x-message-id'] };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return { success: false, error: error.message };
  }
};

// Send admin notification
export const sendAdminNotification = async (applicationData) => {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) {
    console.error('❌ Admin email not configured');
    return { success: false, error: 'Admin email not configured' };
  }
  
  return await sendEmail(adminEmail, 'adminNotification', applicationData);
};

// Send client confirmation
export const sendClientConfirmation = async (applicationData) => {
  return await sendEmail(applicationData.email, 'clientConfirmation', applicationData);
};

export default { sendEmail, sendAdminNotification, sendClientConfirmation };