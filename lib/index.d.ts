import React from "react";
import "./menu.css";
/**
 * returns a menu link to be rendered
 */
declare type MenuLink = {
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
declare const ReactFullMenu: React.FC<MenuProps>;
export default ReactFullMenu;
