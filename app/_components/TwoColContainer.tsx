import { FC } from "react";
import styles from "./TwoColContainer.module.scss";

type TwoColContainerProps = {
  children: React.ReactNode[];
  reorderOnMobile?: boolean;
  [x: string]: any;
};

const TwoColContainer: FC<TwoColContainerProps> = ({
  children,
  reorderOnMobile = false,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${styles.twoColContainer} ${props.className || ""} ${
        reorderOnMobile ? styles.reorder : ""
      }`}
    >
      {children}
    </div>
  );
};

export default TwoColContainer;
