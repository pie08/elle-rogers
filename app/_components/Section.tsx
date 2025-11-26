"use client";

import {
  FC,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Section.module.scss";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  dark?: boolean;
  disableObserver?: boolean;
  [x: string]: any;
}

const Section: FC<SectionProps> = ({
  children,
  dark,
  disableObserver,
  ...props
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(disableObserver ? true : false);

  // use intersection observer on sections to make them appear as you scroll
  useEffect(() => {
    if (disableObserver || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer after first intersection for performance
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -48px 0px",
      }
    );

    observer.observe(sectionRef.current as Element);

    // Cleanup function to prevent memory leaks
    return () => {
      observer.disconnect();
    };
  }, [disableObserver]);

  return (
    <section
      {...props}
      ref={sectionRef}
      className={`${styles["section"]} ${dark ? styles.sectionDark : ""} ${
        isVisible ? "" : styles.hidden
      } ${props.className ?? ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
