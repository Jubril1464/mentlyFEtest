import {
  HomeIcon,
  SettingsIcon,
  ActivitiesIcon,
  AwardIcon,
  ChartIcon,
  LogoutIcon,
  NoteIcon,
  ProgramsIcon,
  UserIcon,
  WalletIcon,
} from "@/public/icons";
import { IMenu } from "@/model/interface";

export const useMenu = () => {
  const menu: IMenu[] = [
    {
      name: "Dashboard",
      logo: <HomeIcon />,
      link: "/dashboard",
    },
    {
      name: "Programs",
      logo: <ProgramsIcon />,
      link: "/programs",
    },
    {
      name: "Activities",
      logo: <ActivitiesIcon/>,
      link: "/activities",
    },
    {
      name: "Users",
      logo: <UserIcon />,
      link: "/users",
    },
    {
      name: "Forum",
      logo: <NoteIcon />,
      link: "/forum",
    },
    {
      name: "Finances",
      logo: <WalletIcon />,
      link: "/finances",
    },
    {
      name: "Rewards",
      logo: <AwardIcon />,
      link: "/rewards",
    },
    {
      name: "Analytics",
      logo: <ChartIcon />,
      link: "/analytics",
    },
    {
      name: "Settings",
      logo: <SettingsIcon />,
      link: "/settings",
    },
  ];

  return { menu };
};
