import { DashboardIcon, UserIcon,WalletIcon,AnalyticsIcon,SettingsIcon } from "@/public/icons";
import { IMenu } from "@/model/interface";

export const useMenu = () => {
    const menu: IMenu[] = [
      {
        name: "Dashboard",
        logo: <DashboardIcon color="#fff" />,
        link: "/dashboard",
        selectedLogo: <DashboardIcon color="#1D1D41" />,
      },
      {
        name: "Analytics",
        logo: <AnalyticsIcon color="#fff" />,
        link: "/analytics",
        selectedLogo: <AnalyticsIcon color="#1D1D41" />,
      },
      {
        name: "My Wallet",
        logo: <WalletIcon color="#fff" />,
        link: "/my-wallet",
        selectedLogo: <WalletIcon color="#1D1D41" />,
      },
      {
        name: "Accounts",
        logo: <UserIcon color="#fff" />,
        link: "/accounts",
        selectedLogo: <UserIcon color="#1D1D41" />,
      },
      {
        name: "Settings",
        logo: <SettingsIcon color="#fff" />,
        link: "/settings",
        selectedLogo: <SettingsIcon color="#1D1D41" />,
      },
    ];


    return {menu}
}