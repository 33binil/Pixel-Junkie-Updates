import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

(async () => {
  try {
    console.log('🚀 Running Resend email test...');
    console.log('📧 Sender:', process.env.RESEND_FROM_EMAIL);
    console.log('👤 Admin Email:', process.env.ADMIN_EMAIL);

    const { data, error } = await resend.emails.send({
      from: 'Pixel Junkie <hello@pixeljunkiestudio.in>',
      to: [process.env.ADMIN_EMAIL],
      subject: '✅ Test Email from Pixel Junkie',
      html: `
        <h1>Test Email from Pixel Junkie</h1>
        <p>If you're seeing this, your Resend email setup is working correctly! 🎉</p>
        <p>Sent to: ${process.env.ADMIN_EMAIL}</p>
        <p>From: hello@pixeljunkiestudio.in</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      `
    });

    if (error) {
      console.error('❌ Email sending failed:', error);
      return;
    }

    console.log('✅ Test email sent successfully!');
    console.log('📨 Message ID:', data?.id);
    console.log('📋 Check your Resend dashboard for delivery status');
    
  } catch (err) {
    console.error('❌ Unexpected error during test email:', err);
  }
})();
