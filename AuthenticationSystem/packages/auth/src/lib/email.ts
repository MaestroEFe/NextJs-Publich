import { Resend } from 'resend';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export const createEmailSender = (apiKey: string, defaultFrom: string) => {
  const resend = new Resend(apiKey);

  const sendEmail = async (options: EmailOptions) => {
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

  return { sendEmail };
};
