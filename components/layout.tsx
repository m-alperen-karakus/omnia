import Footer from "./footer"
import Navbar from "./navbar"
import React from "react";

type LayoutProps={
  children: React.ReactNode
};

export default function Layout({ children }:LayoutProps) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }