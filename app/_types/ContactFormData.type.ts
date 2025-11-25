import z from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "Full name is required" })
    .max(100, { message: "Full name must be less than 100 characters" }),
  email: z.email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(500, { message: "Message must be less than 500 characters" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
