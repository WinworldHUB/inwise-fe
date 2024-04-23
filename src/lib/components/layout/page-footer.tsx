import { FC } from "react";

const PageFooter: FC = () => {
  return (
    <footer className="footer d-flex flex-column flex-md-row align-items-center justify-content-between px-4 py-3 border-top small">
      <p className="text-muted mb-1 mb-md-0">
        Copyright © 2022{" "}
        <a href="../../../../../index.html" target="_blank">
          NobleUI
        </a>
        .
      </p>
      <p className="text-muted">
        Handcrafted With <i className="text-danger" data-feather="heart"></i>
      </p>
    </footer>
  );
};

export default PageFooter;
