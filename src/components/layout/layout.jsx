import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

const Layout = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen grid gap-6 grid-rows-[auto,1fr,auto]">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <Toaster richColors />
    </>
  );
};

export default Layout;
