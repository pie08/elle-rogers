"use client";

import { FC } from "react";
import styles from "./PurchaseModal.module.scss";
import Button from "../Button";

type PurchaseModalProps = object;

const PurchaseModal: FC<PurchaseModalProps> = ({}) => {
  return (
    <div className={styles.window}>
      <div className={styles.content}>
        <h4>BUY THE TANGLEFOLK</h4>
      </div>

      <div className={styles.buttons}>
        <Button href="/#" btnStyle="cta">
          Amazon
        </Button>
        <Button href="/#" btnStyle="cta">
          Barnes & Noble
        </Button>
      </div>
    </div>
  );
};

export default PurchaseModal;
