import {Transaction, WalletTransaction} from "@/model/interface"
import AdobeLogo from '@/public/images/adobe.png'
import McDonaldLogo from '@/public/images/mc-donald.png'
import LevisLogo from '@/public/images/levis.png'
export const testimonials = [
  {
    name: "Ali Riaz",
    location: "Singapore",
    text: "I've been using Uifry for over a year, and it’s helped simplify all my payments.",
  },
  {
    name: "John Doe",
    location: "United States",
    text: "Uifry has been a game-changer for managing my expenses!",
  },
  {
    name: "Jane Smith",
    location: "Canada",
    text: "Highly recommend Uifry! It's easy to use and very reliable.",
  },
];

export const transactions: Transaction[] = [
  {
    id: 1,
    name: "Adobe After Effect",
    logo: AdobeLogo, // Replace with actual image path
    date: "2025-03-05T14:30:00Z",
    amount: "$80.09",
    status: "Deposited",
  },
  {
    id: 2,
    name: "McDonald's",
    logo: McDonaldLogo,
    date: "2025-03-05T14:30:00Z",
    amount: "$80.09",
    status: "Deposited",
  },
  {
    id: 3,
    name: "Levi",
    logo: LevisLogo,
    date: "2025-03-05T14:30:00Z",
    amount: "$80.09",
    status: "Deposited",
  },
  {
    id: 4,
    name: "Adobe After Effect",
    logo: AdobeLogo,
    date: "2025-03-05T14:30:00Z",
    amount: "$80.09",
    status: "Deposited",
  },
  {
    id: 5,
    name: "Levi",
    logo: LevisLogo,
    date: "2025-03-05T14:30:00Z",
    amount: "$80.09",
    status: "Deposited",
  },
];


export const walletTransactions: WalletTransaction[] = [
  {
    id: 1,
    name: "Adobe After Effect",
    logo: AdobeLogo, // Replace with actual image path
    date: "2025-03-05T14:30:00Z",
    amount: "$80.09",
    status: "Deposited",
    description: "Adobe after Virtual Card top-up",
  },
  {
    id: 2,
    name: "McDonald's",
    logo: McDonaldLogo,
    date: "2025-03-05T14:30:00Z",
    amount: "$80.09",
    status: "Deposited",
    description: "Adobe after Virtual Card top-up",
  },
  {
    id: 3,
    name: "Levi",
    logo: LevisLogo,
    date: "2025-03-05T14:30:00Z",
    amount: "$80.09",
    status: "Deposited",
    description: "Adobe after Virtual Card top-up",
  },
  {
    id: 4,
    name: "Adobe After Effect",
    logo: AdobeLogo,
    date: "2025-03-05T14:30:00Z",
    amount: "$80.09",
    status: "Deposited",
    description: "Adobe after Virtual Card top-up",
  },
  {
    id: 5,
    name: "Levi",
    logo: LevisLogo,
    date: "2025-03-05T14:30:00Z",
    amount: "$80.09",
    status: "Deposited",
    description: "Adobe after Virtual Card top-up",
  },
];