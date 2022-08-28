import React from "react";
import { Nav } from "../nav";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
    </>
  );
};
