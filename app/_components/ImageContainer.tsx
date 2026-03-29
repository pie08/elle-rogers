import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./ImageContainer.module.scss";

type ImageContainerProps = {
  image: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  twoColSizes?: boolean;
};

const ImageContainer: FC<ImageContainerProps> = ({
  image,
  alt,
  className,
  sizes,
  twoColSizes = false,
}) => {
  if (twoColSizes) {
    sizes = "(max-width: 68.75em) 45vw, (max-width: 37.5em) 93vw, 36em";
  }

  return (
    <div className={`${styles.imageContainer} ${className}`}>
      <Image
        className={styles.image}
        src={image}
        fill
        alt={alt}
        sizes={sizes}
      />
    </div>
  );
};

export default ImageContainer;
