import React, { useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons";
import "./menu.css";
/**
 * returns a menu link to be rendered
 */
type MenuLink = {
  /**
   * path where the link points to
   */
  to: string;
  /**
   * link text to be rendered
   */
  text: string;
  /**
   * custom handler
   */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};
interface MenuProps {
  /**
   * html background `colors` or gradient color to be rendered
   */
  background?: string;
  /**
   * html `link color` to be rendered
   */
  linkColor?: string;
  links?: MenuLink[];
  customLinkRenderer?: React.ReactNode;
  /**
   *  renders the selected font-family defaults to `'"Autour One", cursive'`
   */
  fontFamily?: string;
}

const ReactFullMenu: React.FC<MenuProps> = ({
  background,
  linkColor = "white",
  links = [
    { to: "/home", text: "My Home" },
    { to: "/page", text: "MY Other Page" },
  ],
  fontFamily = '"Autour One", cursive',
}) => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = (): void => setOpen(!isOpen);

  const Menu = () => (
    <>
      <div
        className="menu"
        style={{ background: `${background}`, fontFamily: `${fontFamily}` }}
        onClick={toggleMenu}
      >
        <ul>
          {links.map(({ to, onClick, text }: MenuLink, index: number) => (
            <li key={index}>
              <a style={{ color: `${linkColor}` }} href={to} onClick={onClick}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <>
      <button className={isOpen ? "menu-open" : "menu-button"}>
        <div
          className={isOpen ? "menu-icon-open" : "menu-icon"}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <CloseIcon color={linkColor} />
          ) : (
            <MenuIcon color={linkColor} />
          )}
        </div>
      </button>
      {isOpen && <Menu />}
    </>
  );
};

export default ReactFullMenu;
