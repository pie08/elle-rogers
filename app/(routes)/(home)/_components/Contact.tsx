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
    <Section>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2>TELL ME YOUR STORY</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Commodo blandit duis ornare
            mollis volutpat ultrices ullamcorper egestas convallis.
          </p>
          <div className={styles.email}>
            <MdOutlineEmail className={styles.icon} />
            <a href="mailto:hello@ellerogers.com">hello@ellerogers.com</a>
          </div>
        </div>

        <form action={handleSubmit} className={styles.form}>
          <TextInput fieldName="Full Name" fieldId="fullName" />
          <TextInput fieldName="Email" fieldId="email" fieldType="email" />
          <TextInput
            fieldName="Message"
            fieldId="message"
            inputType="textarea"
            className={styles.textarea}
          />
          <Button btnStyle="outline">Send Message</Button>

          <Image
            src={splashImage}
            alt="Splash"
            className={styles.splashImage}
          />
        </form>
      </Container>
    </Section>
  );
};

export default Contact;
