import React from "react";
import { Nav } from "../nav";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Nav />
      <main><div className="layout__container">{props.children}</div></main>
    </>
  );
};
