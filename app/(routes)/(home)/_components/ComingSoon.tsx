import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import { FC } from "react";
import styles from "./ComingSoon.module.scss";
import TwoColContainer from "@/app/_components/TwoColContainer";
import ImageContainer from "@/app/_components/ImageContainer";
import aWidowsWorthImage from "../../../../public/images/widowsWorth.png";
import dualCitizenshipImage from "../../../../public/images/dualCitizenship.png";

type ComingSoonProps = object;

const ComingSoon: FC<ComingSoonProps> = () => {
  return (
    <Section className={styles.comingSoon} id="comingsoon">
      <Container className={styles.container}>
        <h2>COMING SOON...</h2>

        <TwoColContainer>
          <div className={styles.description}>
            <div className={styles.heading}>
              <p>Coming 2027</p>
              <h3>A Widow&apos;s Worth</h3>
            </div>

            <p>
              A Widow’s Worth began with a question I could not avoid: Are you
              worth it? After loss, that question has a way of
              resurfacing—quietly, persistently—especially when life no longer
              looks the way it once did. When identity shifts and familiar roles
              disappear, it’s easy to wonder what remains… and whether it still
              matters. This book is not about fixing grief or finding quick
              answers. It is an invitation to walk through Scripture—story by
              story, widow by widow—and to look closely at what God reveals
              about Himself in each circumstance. Through women like Naomi,
              Ruth, the widow of Zarephath, and the widow of Nain, a pattern
              begins to emerge: Not just who they are but who God proves Himself
              to be Each chapter asks two honest questions: Lord, am I still
              worthy here? God, are You still who You say You are—here? Because
              biblical worth is not something we rebuild after loss. It is
              something that was never lost to begin with. It is rooted in this
              truth. You were bought with a price. You are called by name. You
              belong to God. A Widow’s Worth is a journey through grief,
              identity, provision, and belonging—and ultimately, a return to the
              question only you can answer: Do I believe it?
            </p>
          </div>

          <ImageContainer
            image={aWidowsWorthImage}
            alt="A Widow's Worth"
            className={styles.image}
          />
        </TwoColContainer>

        <TwoColContainer reorderOnMobile>
          <ImageContainer
            image={dualCitizenshipImage}
            alt="Dual Citizenship"
            className={styles.image}
          />

          <div className={styles.description}>
            <div className={styles.heading}>
              <p>Coming 2027</p>
              <h3>Dual Citizenship</h3>
            </div>

            <p>
              Dual Citizenship is a compassionate and deeply honest reflection
              on what it means to live after loss. When grief enters your life,
              it doesn’t simply change how you feel—it changes where you live.
              There is Life Before, where everything once made sense. And there
              is Heartbroken, a vast and unfamiliar country where time moves
              differently, love and sorrow share the same space, and the old
              maps no longer work. In this moving and metaphor-rich book, Elle
              Rogers uses the language of travel—airports, borders, baggage, and
              unfamiliar terrain—to give voice to an experience that often feels
              impossible to explain. She explores: the people who step into
              grief with you—and those who remain at a distance the quiet weight
              of being forgotten in your loss the sacred gift of presence over
              solutions and the strange, tender reality of learning to live in
              two places at once Written for grieving people of all ages—and for
              those who love them—Dual Citizenship offers both comfort and
              clarity. Because grief is not a place you visit and leave. It is a
              country you learn to live in. And sometimes, if you are deeply
              loved,you don’t have to live there alone.
            </p>
          </div>
        </TwoColContainer>
      </Container>
    </Section>
  );
};

export default ComingSoon;
