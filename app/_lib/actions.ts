"use server";

import { ZodError } from "zod";
import {
  ContactFormData,
  contactFormSchema,
} from "../_types/ContactFormData.type";
import sendContactEmail from "./sendContactEmail";
import {
  NewsletterFormData,
  newsletterFormSchema,
} from "../_types/Newsletter.type";
import addToNewsletter from "./addToNewsletter";

export const subscribeToNewsletter = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries()) as NewsletterFormData;

  // validate data
  try {
    newsletterFormSchema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      console.error(error);
      return {
        message: "Invalid form data",
        success: false,
      };
    }
  }

  // add to newsletter list
  try {
    await addToNewsletter(data.email);
  } catch (error) {
    console.error(error);
    return {
      message: "Failed to add to newsletter list. Please try again later.",
      success: false,
    };
  }

  return {
    message: "Thank you :)",
    success: true,
  };
};

export const sendContactMessage = async (formData: FormData) => {
  // extract data from form data
  const data = Object.fromEntries(formData.entries()) as ContactFormData;

  // validate data
  try {
    contactFormSchema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      console.error(error);
      return {
        message: "Invalid form data",
        success: false,
      };
    }
  }

  // send email
  try {
    await sendContactEmail(data);
  } catch (error) {
    console.error(error);
    return {
      message: "Failed to send message. Please try again later.",
      success: false,
    };
  }

  return {
    message: "Message sent successfully",
    success: true,
  };
};
