"use client";

import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import TextInput from "@/app/_components/TextInput";
import { FC } from "react";
import { PiArrowRight } from "react-icons/pi";
import styles from "./Newsletter.module.scss";
import { subscribeToNewsletter } from "@/app/_lib/actions";

type NewsletterProps = object;

// TODO: Implement newsletter actions
const Newsletter: FC<NewsletterProps> = ({}) => {
  return (
    <Section dark>
      <Container className={styles.container}>
        <h4>JOIN MY NEWSLETTER!</h4>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <form action={subscribeToNewsletter} className={styles.form}>
          <TextInput
            fieldName="Email"
            fieldId="email"
            fieldType="email"
            className={styles.input}
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
