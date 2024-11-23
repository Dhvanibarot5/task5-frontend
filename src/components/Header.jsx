import React, { useState } from "react";
import DesktopNav from "./DesktopNav";
import Logo from "/logo.svg";

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const menuItems = ["recipes", "resources", "about", "contact"];

  const onOpen = () => {
    setHideLeft("left-0");
  };
  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };
  return (
    <>
      <div className="max-[900px]:hidden">
        <DesktopNav menuItems={menuItems} Logo={Logo} />
      </div>
      <div className="min-[900px]:hidden">Mobile view</div>
    </>
  );
};
export default Header;
