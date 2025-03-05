import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface IMenu {
  logo: ReactNode;
  name: string;
  link: string;
  selectedLogo: ReactNode;
}

export interface HeaderProps {
  title: string;
  subTitle: string;
}

export interface Transaction {
  id: number;
  name: string;
  logo: StaticImageData;
  date: string;
  amount: string;
  status: string;
}
export interface WalletTransaction extends Transaction {
  description: string;
}

export interface IWalletCard {
  logo: StaticImageData;
  title: string;
  balance: string;
}
