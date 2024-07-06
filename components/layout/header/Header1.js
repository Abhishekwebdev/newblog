import dynamic from "next/dynamic";

const ThemeSwitch = dynamic(() => import("@/components/elements/ThemeSwitch"), {
  ssr: false,
});
import Link from "next/link";
import SlickNav from "../SlickNav";
import Image from "next/image";

export default function Header1({
  scroll,
  isSidebar,
  handleSidebar,
  isMobileMenu,
  handleMobileMenu,
  handleSearch,
}) {
  return (
    <>
      <header
        className={`main-header header-sticky header-style-1 bg-white ${scroll ? "sticky-bar" : ""}`}
      >
        {/*Main navigation*/}
        <div className="container">
          <div className="mobile_menu d-lg-none d-block">
            <SlickNav
              isMobileMenu={isMobileMenu}
              handleMobileMenu={handleMobileMenu}
            />
          </div>

          <div className="mobile_logo d-md-none">
            <h1 className="font-secondary">
              <Link href="/">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/imgs/logo/logo.svg" alt="logo" />
              </Link>
            </h1>
          </div>
          <div className="mobile-search d-md-none">
            <button className="search-icon d-inline" onClick={handleSearch}>
              <i className="athena-search mr-5" />
            </button>
          </div>
          <div className="row align-items-center d-none d-md-flex">
            <div className="col-lg-5 col-md-4">
              <div
                className="off-canvas-toggle-cover d-none d-lg-inline-block mr-20"
                onClick={handleSidebar}
              >
                <div
                  className="off-canvas-toggle hidden d-inline-block"
                  id="off-canvas-toggle"
                >
                  <span />
                </div>
              </div>
              <ul className="main-menu d-none d-lg-inline font-primary">
                <li className="menu-item-has-children">
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/page-contact">Contact</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link href="/about-us">AboutUs</Link>
                </li>
              </ul>
              {/*Mobile menu*/}

              <ul id="mobile-menu" className="d-none">
                <li className="menu-item-has-children">
                  <Link href="#">Home</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link href="/page-contact">Contact</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link href="/about-us">AboutUS</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4">
              {/*Logo and tagline */}
              <div className="header-logo text-center">
                <h1 className="font-secondary">
                  <Link href="/">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/imgs/logo/logo.svg" alt="logo" />
                  </Link>
                </h1>
              </div>
            </div>
            <div className="col-lg-5 col-md-4 text-end">
              <div className="d-flex flex-end justify-content-end align-items-center">
                <ThemeSwitch />
                <div className="d-flex align-items-center">
                  <Link
                    className="social-icon text-xs-center mx-1 pt-1"
                    target="_blank"
                    href="/#"
                  >
                    <i className="ui-facebook-fill" />
                  </Link>
                  <Link
                    className="social-icon text-xs-center mx-1 pt-1"
                    target="_blank"
                    href="/#"
                  >
                    <i className="ui-twitter-x-line" />
                  </Link>
                  <Link
                    className="social-icon text-xs-center mx-1 pt-1"
                    target="_blank"
                    href="/#"
                  >
                    <i className="ui-pinterest-fill" />
                  </Link>
                  <Link
                    className="social-icon text-xs-center mx-1 pt-1"
                    target="_blank"
                    href="/#"
                  >
                    <i className="ui-instagram-line" />
                  </Link>
                </div>
                <button
                  className="search-icon d-flex align-items-center"
                  onClick={handleSearch}
                >
                  <i className="athena-search mr-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
