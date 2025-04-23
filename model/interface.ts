import { ReactNode } from "react";

export interface IMenu {
  logo: any;
  name: string;
  link: string;
}

export interface SideModalProps {
  open: boolean;
  cancel: () => void;
  children: ReactNode;
}
