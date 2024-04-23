import { AppRoutes } from "./app-routes";

export const APP_MENU_ITEMS: MenuItem[] = [
  { title: "Dashboard", featherIcon: "box", route: AppRoutes.Empty },
  { title: "Profile", featherIcon: "user", route: AppRoutes.Empty },
  { title: "Partners", featherIcon: "users", route: AppRoutes.Empty },
  { title: "Accounting", featherIcon: "book-open", route: AppRoutes.Empty },
  {
    title: "Business Settings",
    featherIcon: "settings",
    route: AppRoutes.Empty,
  },
];
