"use client";

import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import TextInput from "@/app/_components/TextInput";
import { FC } from "react";
import { PiArrowRight } from "react-icons/pi";
import styles from "./Newsletter.module.scss";
import { subscribeToNewsletter } from "@/app/_lib/actions";
import toast from "react-hot-toast";

type NewsletterProps = object;

// TODO: Implement newsletter actions
const Newsletter: FC<NewsletterProps> = ({}) => {
  const handleSubmit = async (formData: FormData) => {
    const result = await subscribeToNewsletter(formData);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Section dark id="newsletter">
      <Container className={styles.container}>
        <h4>JOIN MY NEWSLETTER!</h4>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <form action={handleSubmit} className={styles.form}>
          <TextInput
            fieldName="Email"
            fieldId="email"
            fieldType="email"
            className={styles.input}
            required
          >
            <button className={styles.arrow}>
              <PiArrowRight />
            </button>
          </TextInput>
        </form>
      </Container>
    </Section>
  );
};

export default Newsletter;
