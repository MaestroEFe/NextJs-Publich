import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string; // Optional: defaults to a standard address
}

export const sendEmail = async (options: EmailOptions) => {
  try {
    const fromAddress = options.from || 'onboarding@g-linelogistics.com';

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

    // We can safely assume data is not null here if there was no error.
    console.log('Email sent successfully:', data!.id);
    return { success: true, data };
  } catch (exception) {
    console.error('An unexpected error occurred in sendEmail:', exception);
    return { success: false, error: exception };
  }
};
