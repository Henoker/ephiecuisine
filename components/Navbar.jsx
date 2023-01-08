import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/images/logo.png";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "#about" },
  { text: "Our Menu", href: "#menu" },
];

export default function Navbar() {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);
    return (
        <header className="header">
      <nav className={`nav`}>
        <Link href={"/"} legacyBehavior>
          <a>
          <Image src={logo} width={60} height={50} alt="EPHIE - Cuisine" />
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list `}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <div className="separator" />
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
    )
}