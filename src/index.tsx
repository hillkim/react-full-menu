import React, { useState } from "react";
import Icon from "./Icons";
import "./menu.css";

const Menu = ({ hide }: any) => (
  <div className="menu" onClick={hide}>
    <ul>
      <li>
        <a href="/home">Just a test link</a>
      </li>
      <li>
        <div className="menu-footer">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/WycliffOparanya4GovernorKK/"
                target="blank"
              >
                <Icon name="facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/GovWOparanya" target="blank">
                <Icon name="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
);

const ReactFullMenu = () => {
  const [isOpen, setOpen] = useState(true);
  const hide = (): void => setOpen(!isOpen);
  return (
    <div>
      <button className={isOpen ? "menu-open" : "menu-button"}>
        <div className={isOpen ? "menu-icon-open" : "menu-icon"} onClick={hide}>
          <Icon name={isOpen ? "cancel" : "menu"} />
        </div>
      </button>
      {isOpen && <Menu hide={hide} />}
    </div>
  );
};

export default ReactFullMenu;
