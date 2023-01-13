import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PageHead from "./PageHead";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <PageHead />
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
