import z from "zod";

export const newsletterFormSchema = z.object({
  email: z.email({ message: "Invalid email address" }).min(1, {
    message: "Email is required",
  }),
});

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>;
