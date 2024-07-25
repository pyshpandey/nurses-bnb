import React from "react";
import Navbar from "../components/common/Navbar";
import { createNewListMenuItems } from "../config/Owner-And-NewList_Menu-Items";
import { constantTexts } from "../constants/utils";

const OwnerNewListLayout = ({ children }) => {
  return (
    <div className="main-wrapper">
      <div className="left-sidebar">
        <Navbar
          meunItems={createNewListMenuItems}
          layout={constantTexts.CREATE_NEW_LIST_LAYOUT}
        />
      </div>
      <div className="right-sidebar">{children}</div>
    </div>
  );
};

export default OwnerNewListLayout;
