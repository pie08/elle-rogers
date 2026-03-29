import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import { FC } from "react";
import styles from "./Visits.module.scss";

type VisitsProps = object;

const Visits: FC<VisitsProps> = ({}) => {
  return (
    <Section className={styles.visits} id="visits" dark>
      <Container>
        <h2>Visits and Greetings</h2>
      </Container>

      <Container>
        <p>
          The Tanglefolk don’t just visit at night—they sometimes make daytime
          appearances too.
          <br />
          Elle is available for in-person readings at schools, libraries, and
          events. For bookings, please reach out through the contact page.
        </p>
      </Container>
    </Section>
  );
};

export default Visits;
