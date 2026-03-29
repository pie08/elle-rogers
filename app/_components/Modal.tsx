"use client";

import { cloneElement, createContext, FC, useContext, useState } from "react";
import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { useMounted } from "./_lib/useMounted";
import { PiXBold } from "react-icons/pi";

export interface ModalContextType {
  openId: string;
  setOpenId: (openId: string) => void;
  open: (id: string) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

type ModalProps = {
  children: React.ReactNode;
  defaultOpenId?: string;
};

type WindowProps = {
  children: React.ReactNode;
  id: string;
  options?: {
    disableCloseOnOutsideClick?: boolean;
    defaultStyles?: boolean;
    closeButton?: boolean;
    mobileFullScreen?: boolean;
  };
};

interface OpenProps {
  children: React.ReactNode;
  opens: string;
}

interface ChildrenProps {
  onClick: () => void;
}

const Modal: FC<ModalProps> = ({ children, defaultOpenId }) => {
  const [openId, setOpenId] = useState(defaultOpenId || "");

  function open(id: string) {
    setOpenId(id);
  }

  function close() {
    setOpenId("");
  }

  return (
    <ModalContext.Provider value={{ openId, setOpenId, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

const ModalWindow: FC<WindowProps> = ({
  children,
  id,
  options: {
    disableCloseOnOutsideClick = false,
    defaultStyles = true,
    closeButton = true,
    mobileFullScreen = false,
  } = {},
}) => {
  const { openId, close } = useContext(ModalContext);

  // make sure component is mounted
  const mounted = useMounted();
  if (!mounted) return null;

  if (openId !== id) return null;

  return createPortal(
    <>
      <div
        className={styles.overlay}
        onClick={disableCloseOnOutsideClick ? () => {} : close}
      >
        &nbsp;
      </div>
      <div
        className={`${styles.window} ${defaultStyles ? styles.default : ""} ${
          mobileFullScreen ? styles.mobileFullScreen : ""
        }`}
      >
        {/* close button */}
        {closeButton && (
          <button
            className={styles.closeButton}
            onClick={close}
            aria-label="close"
          >
            <PiXBold />
          </button>
        )}
        {children}
      </div>
    </>,
    document.body,
  );
};

const ModalOpen: FC<OpenProps> = ({ children, opens }) => {
  const { open } = useContext(ModalContext);

  return cloneElement(children as React.ReactElement<ChildrenProps>, {
    onClick: () => {
      open(opens);
    },
  });
};

export { Modal, ModalWindow, ModalOpen };

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("ModalContext was used outside of the provider");
  }
  return context;
};
