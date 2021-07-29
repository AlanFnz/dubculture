import React from "react";
import logo from "../../assets/lg-dub-culture-2-white.svg";
import "./Header.scss";

export function Header() {
  return (
    <div className="cnt-header">
      <img src={logo} alt="Dub culture" />
    </div>
  );
}
