"use client";

import Button from "@/app/_components/Button";
import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import TextInput from "@/app/_components/TextInput";
import { FC } from "react";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./Contact.module.scss";
import Image from "next/image";
import splashImage from "../../../../public/images/splash.png";
import { sendContactMessage } from "@/app/_lib/actions";
import { toast } from "react-hot-toast";

type ContactProps = object;

// add loading spinner over button
const Contact: FC<ContactProps> = ({}) => {
  const handleSubmit = async (formData: FormData) => {
    const result = await sendContactMessage(formData);

    // toast notification
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }

    toast.dismiss("loading");
  };

  return (
    <Section id="contact">
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2>TELL ME YOUR STORY</h2>
          <p>
            Did the Tanglefolk spark delight in your home? Tell me your story -
            any enchantment, surprise, or tiny wonder is welcome.
          </p>
          <div className={styles.email}>
            <MdOutlineEmail className={styles.icon} />
            <a href="mailto:	barry.rogers1@comcast.net">
              {" "}
              barry.rogers1@comcast.net
            </a>
          </div>
        </div>

        <form action={handleSubmit} className={styles.form}>
          <TextInput
            fieldName="Full Name"
            fieldId="fullName"
            required
            className={styles.input}
          />
          <TextInput
            fieldName="Email"
            fieldId="email"
            fieldType="email"
            className={styles.input}
            required
          />
          <TextInput
            fieldName="Message"
            fieldId="message"
            inputType="textarea"
            className={styles.textarea}
            required
          />
          <Button btnStyle="outline">Send Message</Button>

          <Image
            src={splashImage}
            alt="Splash"
            className={styles.splashImage}
          />
        </form>

        <div className={styles.emailMobile}>
          <MdOutlineEmail className={styles.icon} />
          <a href="mailto:	barry.rogers1@comcast.net">
            {" "}
            barry.rogers1@comcast.net
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
