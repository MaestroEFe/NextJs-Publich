import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const defaultFrom = process.env.EMAIL_FROM;

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export const sendEmail = async (options: EmailOptions) => {
  if (!process.env.RESEND_API_KEY || !defaultFrom) {
    const errorMessage = 'Email service is not configured. Please set RESEND_API_KEY and EMAIL_FROM environment variables.';
    console.error(errorMessage);
    return { success: false, error: new Error(errorMessage) };
  }

  try {
    const fromAddress = options.from || defaultFrom;

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: options.to,
      subject: options.subject,
      html: options.html,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }

    if (!data) {
      const unknownError = new Error('Email sending failed without an explicit error.');
      console.error(unknownError);
      return { success: false, error: unknownError };
    }

    console.log('Email sent successfully:', data.id);
    return { success: true, data };
  } catch (exception) {
    console.error('An unexpected error occurred in sendEmail:', exception);
    return { success: false, error: exception };
  }
};
