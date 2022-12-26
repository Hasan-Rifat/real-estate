import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type layoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <section>{children}</section>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
