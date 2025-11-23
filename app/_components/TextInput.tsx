import { FC, InputHTMLAttributes, ReactNode } from "react";
import styles from "./TextInput.module.scss";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldName: string;
  fieldId: string;
  fieldType?: string;
  inputType?: "input" | "textarea";
  className?: string;
  children?: ReactNode;
  [x: string]: any;
}

const TextInput: FC<TextInputProps> = ({
  fieldId,
  fieldName,
  fieldType = "text",
  inputType = "input",
  children,
  ...props
}) => {
  return (
    <div className={`${styles["form-row"]} ${props.className ?? ""}`}>
      {/* conditionally render inputs */}
      {inputType === "input" && (
        <input
          id={fieldId}
          name={fieldId}
          type={fieldType}
          placeholder=""
          {...props}
        />
      )}
      {inputType === "textarea" && (
        <textarea id={fieldId} name={fieldId} placeholder="" />
      )}
      <label htmlFor={fieldId}>{fieldName}</label>
      {children}
    </div>
  );
};

export default TextInput;
