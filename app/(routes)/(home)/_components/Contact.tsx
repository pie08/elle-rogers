import Button from "@/app/_components/Button";
import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import TextInput from "@/app/_components/TextInput";
import { FC } from "react";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./Contact.module.scss";
import Image from "next/image";
import splashImage from "../../../../public/images/splash.png";

type ContactProps = object;

const Contact: FC<ContactProps> = ({}) => {
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
            <p>hello@ellerogers.com</p>
          </div>
        </div>

        <form action="" className={styles.form}>
          <TextInput fieldName="Full Name" fieldId="name" />
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
