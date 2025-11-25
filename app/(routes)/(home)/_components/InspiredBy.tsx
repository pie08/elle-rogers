import Container from "@/app/_components/Container";
import Section from "@/app/_components/Section";
import { FC } from "react";
import Image from "next/image";
import Button from "@/app/_components/Button";
import styles from "./InspiredBy.module.scss";
import { StaticImageData } from "next/image";
import { imageSizeFromFile } from "image-size/fromFile";

type InspiredByProps = object;

type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonLink: string;
};

const InspiredBy: FC<InspiredByProps> = ({}) => {
  return (
    <Section id="inspiredby">
      <Container className={styles.container}>
        <h2>INSPIRED BY</h2>

        <div className={styles.cards}>
          <Card
            title="TANGLEFOLK"
            description="Lorem ipsum dolor sit amet consectetur. Odio non sed eu viverra consectetur diam elementum euismod at."
            imageSrc={"/images/tanglefolk.jpeg"}
            imageAlt="Tangle Folk"
            buttonLink="/"
          />
          <Card
            title="TANGLEFOLK"
            description="Lorem ipsum dolor sit amet consectetur. Odio non sed eu viverra consectetur diam elementum euismod at."
            imageSrc={"/images/tanglefolk.jpeg"}
            imageAlt="Tangle Folk"
            buttonLink="/"
          />
          <Card
            title="TANGLEFOLK"
            description="Lorem ipsum dolor sit amet consectetur. Odio non sed eu viverra consectetur diam elementum euismod at."
            imageSrc={"/images/tanglefolk.jpeg"}
            imageAlt="Tangle Folk"
            buttonLink="/"
          />
          <Card
            title="TANGLEFOLK"
            description="Lorem ipsum dolor sit amet consectetur. Odio non sed eu viverra consectetur diam elementum euismod at."
            imageSrc={"/images/tanglefolk.jpeg"}
            imageAlt="Tangle Folk"
            buttonLink="/"
          />
        </div>
      </Container>
    </Section>
  );
};

const Card: FC<CardProps> = async ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonLink,
}) => {
  // get image size
  let width: number | undefined;
  let height: number | undefined;
  try {
    const { width: imgWidth, height: imgHeight } = await imageSizeFromFile(
      process.cwd() + "/public" + imageSrc
    );
    width = imgWidth;
    height = imgHeight;
  } catch (error) {
    console.error(error);
  }

  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt={imageAlt} width={width} height={height} />

      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{description}</p>
        <Button btnStyle="outline" href={buttonLink}>
          BUY BOOK
        </Button>
      </div>
    </div>
  );
};

export default InspiredBy;
