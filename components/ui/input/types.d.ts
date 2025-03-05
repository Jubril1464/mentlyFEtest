import { ReactNode, HTMLInputTypeAttribute } from "react";

export interface CustomInputProps {
  label: string;
  name: string;
  placeholder: string,
  inputType?:string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  icon?: ReactNode;
  type?: HTMLInputTypeAttribute | undefined;
}
