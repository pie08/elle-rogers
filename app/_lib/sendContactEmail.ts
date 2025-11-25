import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { ContactFormData } from "../_types/ContactFormData.type";

async function sendContactEmail(data: ContactFormData) {
  try {
    // create internal mail transporter
    const transporterInternal = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_FROM_INTERNAL!,
        pass: process.env.GOOG_APP_PASS_INTERNAL!,
      },
    } as SMTPTransport.Options);

    // configure internal email
    const mailOptionsInternal = {
      to: process.env.EMAIL_SENDTO!,
      from: process.env.EMAIL_FROM_INTERNAL!,
      replyTo: data.email,
      subject: `New contact message from ${data.fullName}`,
      text: `Name: ${data.fullName}\nEmail: ${data.email}\nMessage: ${data.message}`,
    };

    // send email
    await transporterInternal.sendMail(mailOptionsInternal);
    console.log("Email sent successfully");
  } catch (err) {
    throw err;
  }
}

export default sendContactEmail;
