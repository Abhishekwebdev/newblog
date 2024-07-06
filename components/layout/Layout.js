"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Footer1 from "./footer/Footer1";

import Header1 from "./header/Header1";

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  children,
}) {
  const [scroll, setScroll] = useState(0);
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

  //Sidebar
  const [isSidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!isSidebar);
    !isSidebar
      ? document.body.classList.add("canvas-opened")
      : document.body.classList.remove("canvas-opened");
  };
  //Search
  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(!isSearch);
    !isSearch
      ? document.body.classList.add("open-search-form")
      : document.body.classList.remove("open-search-form");
  };

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      <Sidebar
        isSidebar={isSidebar}
        handleSidebar={handleSidebar}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
      {!headerStyle && (
        <Header1
          scroll={scroll}
          isSidebar={isSidebar}
          handleSidebar={handleSidebar}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
        />
      )}
      {headerStyle == 1 ? (
        <Header1
          scroll={scroll}
          isSidebar={isSidebar}
          handleSidebar={handleSidebar}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
        />
      ) : null}

      <Search isSearch={isSearch} handleSearch={handleSearch} />

      <main className="main-content bg-lighter">
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

        {children}
      </main>

      {!footerStyle && <Footer1 />}
      {footerStyle == 1 ? <Footer1 /> : null}

      {isSearch && <div className="dark-mark" onClick={handleSearch} />}
      {isSidebar && <div className="dark-mark" onClick={handleSidebar} />}

      <BackToTop />
    </>
  );
}
