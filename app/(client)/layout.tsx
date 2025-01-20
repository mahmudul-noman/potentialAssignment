import React from "react";
import Header from "@/components/layout/Header/MainHeader";
const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default ClientLayout;
