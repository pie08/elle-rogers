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
        <Button
          href="https://www.amazon.com/Tanglefolk-Elle-Saoirse-Rogers/dp/B0GV1SHVPR/ref=sr_1_1?crid=1N92Y6L6XKC2W&dib=eyJ2IjoiMSJ9.swDdkZyhjph7DEELtgsYSQ.fZhE5gfdGzu3_pSgTlKnVVNSn60QAbiMQWTaDQYBceE&dib_tag=se&keywords=The+Tanglefolk&qid=1774723126&sprefix=the+tanglefolk%2Caps%2C201&sr=8-1"
          btnStyle="cta"
        >
          Amazon
        </Button>
        <Button
          href="https://www.barnesandnoble.com/w/the-tanglefolk-elle-saoirse-rogers/1149778921?ean=9798822985858"
          btnStyle="cta"
        >
          Barnes & Noble
        </Button>
        <Button
          href="https://www.booksamillion.com/search?query=The+Tanglefolk"
          btnStyle="cta"
        >
          Books-A-Million
        </Button>
      </div>
    </div>
  );
};

export default PurchaseModal;
