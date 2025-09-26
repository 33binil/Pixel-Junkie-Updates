import dotenv from 'dotenv';
import { sendEmail } from './services/emailService.js';

dotenv.config();

(async () => {
  try {
    console.log('Running email test with the following env:');
    console.log('EMAIL_USER=', process.env.EMAIL_USER);
    console.log('EMAIL_PASS=', process.env.EMAIL_PASS ? '***REDACTED***' : undefined);
    console.log('ADMIN_EMAIL=', process.env.ADMIN_EMAIL);

    const templateData = {
      fullName: 'Test User',
      businessName: 'Test Business',
      email: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      businessStory: 'This is a test story',
      excitement: 'Excited to test emails',
      collateralDescription: 'No collateral',
      additionalInfo: 'N/A',
      contactInfo: '1234567890',
      services: { branding: true }
    };

    const to = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;
    const result = await sendEmail(to, 'adminNotification', templateData);

    console.log('Test email result:', result);
  } catch (err) {
    console.error('Unexpected error during test email:', err);
  }
})();
