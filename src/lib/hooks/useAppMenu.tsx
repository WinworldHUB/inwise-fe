import { useState } from "react";
import { APP_MENU_ITEMS } from "../constants/app-menu";
import useLocalStorage from "./useLocalStorage";
import { APP_MENU_LOCAL_STORAGE_KEY } from "../constants";

interface AppMenuState {
  menuItems: MenuItem[];
  selectedMenuItemIndex: number;
  onChange: (menuItemIndex: number) => void;
}

const useAppMenu = (): AppMenuState => {
  const { getValue: getLastSelectedMenuIndex, setValue: setMenuIndex } =
    useLocalStorage<number>(APP_MENU_LOCAL_STORAGE_KEY);
  const [selectedMenuItemIndex, setSelectedMenuItemIndex] = useState<number>(
    getLastSelectedMenuIndex() ?? 0
  );

  const onChange = (menuItemIndex: number) => {
    setSelectedMenuItemIndex(menuItemIndex);
    setMenuIndex(menuItemIndex);
  };

  return {
    menuItems: APP_MENU_ITEMS,
    onChange,
    selectedMenuItemIndex,
  };
};

export default useAppMenu;
