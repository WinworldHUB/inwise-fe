import React, { FC } from "react";
import PageSideBar from "./page-sidebar";
import PageNavigation from "./page-navigation";
import PageFooter from "./page-footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="main-wrapper">
      <PageSideBar />
      <div className="page-wrapper">
        <PageNavigation />
        <div className="page-content">{children}</div>
        <PageFooter />
      </div>
    </div>
  );
};

export default PageLayout;
