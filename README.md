# React-Full-Menu
 A customizable React side menu with desktop and mobile support
 
 ## Installation
 ### Run
 > `yarn add react-full-menu`
        or
 > `npn install react-full-menu`
 
 ### Dev Setup
 
 > `git clone https://github.com/hillkim/react-full-menu.git`
 
 
 > `yarn start` or `npm run start` to start webpack dev server.
 

 ## Usage 
 ```js
 import React from "react";
 import ReactFullMenu from "react-full-menu";
  
  const App = () => {
  const links = [
               { 
                 to:"/home"
                 text:"Home Page"
               }, 
               { 
                 to:"/page2"
                 text:"My Awesome page"
               }];
  
  return <ReactFullMenu linkColor="cyan" bakground="gray" links={links} />
  
  }
 ```
 
 ## API
 | Prop                      | Description  and example                                                                                                                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| background                 | takes a `string` of any valid `html` color or color gradient and renders it to the menu background.  |
| linkColor                  | takes a `string` of valid html color and renders the links with the color - defaults to `white`                                                                                             |
| fontFamily       | takes a `string` of a valid css font-family or google font and renders text in the font - defaults to `"Autour One", cursive'`                                                                                                                                                                      |
| links                   |  takes an array of link objects with `to` ,`text` and  an optional `onClick`  properties.       |
 
 
 
