import React, { FC } from "react";
import PageSideBar from "./page-sidebar";
import PageNavigation from "./page-navigation";
import PageFooter from "./page-footer";
import useAppMenu from "../../hooks/useAppMenu";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  const { menuItems, onChange, selectedMenuItemIndex } = useAppMenu();
  return (
    <div className="main-wrapper">
      <PageSideBar
        items={menuItems}
        selectedItemIndex={selectedMenuItemIndex}
        onMenuItemClick={onChange}
      />
      <div className="page-wrapper">
        <PageNavigation />
        <div className="page-content">{children}</div>
        <PageFooter />
      </div>
    </div>
  );
};

export default PageLayout;
