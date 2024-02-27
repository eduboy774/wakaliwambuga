import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "./SearchModal";

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};
export default Menu;

const DeskTopMenu = () => {
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <nav className="main-menu d-none d-xl-block">
        <ul>
          <li className="menu-item has-children">
            <a href="/">
              Home
              <span className="dd-trigger">
              </span>
            </a>
          </li>
          <li className="menu-item has-children">
            <a href="/about">
              About Us
              <span className="dd-trigger">
              </span>
            </a>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              Tours
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="/three-days-itenary">3 Days Safaris</Link>
              </li>
              <li>
                <Link href="/fours-days-itenary">4 Days Safaris</Link>
              </li>
              <li>
                <Link href="/five-days-itenary">5 Days Safaris</Link>
              </li>
               <li>
                <Link href="/six-days-itenary">6 Days Safaris</Link>
              </li>
              <li>
                <Link href="/seven-days-itenary">7 Days Safaris</Link>
              </li>
               <li>
                <Link href="/eight-days-itenary">8 Days Safaris</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              Trekking
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="/five-days-marangu-route">5 Days Marangu Route</Link>
              </li>
              <li>
                <Link href="/seven-days-lemosho-route">7 Days Lemosho Route</Link>
              </li>
              <li>
                <Link href="/seven-days-machame-route">7 Days Machame Route</Link>
              </li>
              <li>
                <Link href="/six-days-rongai-route">6 Days Rongai Route</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item has-children">
            <a href="#">
              Destination
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="/nothern-circuit-destinations">Northern Circuit Destinations</Link>
              </li>
              <li>
                <Link href="/southern-circuit-destinations">Southern Circuit Destinations</Link>
              </li>
              <li>
                <Link href="/western-circuit-destinations">Western  Circuit Destinations</Link>
              </li>
            </ul>
          </li>
          
          <li className="menu-item has-children">
            <a href="contact">
            Contact Us
            </a>
          </li>
          <li className="menu-item search-item">
            <div
              className="search-btn"
              data-bs-toggle="modal"
              data-bs-target="#search-modal"
              onClick={() => setSearchModal(true)}
            >
              <i className="far fa-search" />
            </div>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li className="menu-item has-children">
          <a href="/">
             Home
            <span className="dd-trigger" onClick={() => activeMenuSet("home")}>
            </span>
          </a>
        </li>
        <li className="menu-item has-children">
          <a href="/about">
             About Us
            <span className="dd-trigger" onClick={() => activeMenuSet("About")}>
            </span>
          </a>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Tours
            <span className="dd-trigger" onClick={() => activeMenuSet("Tours")}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("Tours")}>
            <li>
              <Link href="three-days-itenary">3 Days</Link>
            </li>
            <li>
              <Link href="fours-days-itenary">4 Days</Link>
            </li>
            <li>
              <Link href="five-days-itenary">5 Days</Link>
            </li>
            <li>
              <Link href="six-days-itenary">6 Days</Link>
            </li>
            <li>
              <Link href="seven-days-itenary">7 Days</Link>
            </li>
            <li>
              <Link href="eight-days-itenary">8 Days</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="#">
            Trekking
            <span className="dd-trigger" onClick={() => activeMenuSet("Trekking")}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("Trekking")}>
            <li>
              <Link href="five-days-marangu-route">3 Days Marangu</Link>
            </li>
            <li>
              <Link href="seven-days-lemosho-route">7 Days Lemosho</Link>
            </li>
            <li>
              <Link href="seven-days-machame-route">7 Days Machame</Link>
            </li>
            <li>
              <Link href="six-days-rongai-route">6 Days Rongai</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a>
            Destination
            <span
              className="dd-trigger"
              onClick={() => activeMenuSet("Destination")}
            >
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("Destination")}>
            <li>
              <Link href="nothern-circuit-destinations"> Northern Destination</Link>
            </li>
            <li>
              <Link href="southern-circuit-destinations"> Southern Destination</Link>
            </li>
            <li>
              <Link href="western-circuit-destinations"> Western Destination</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="contact">
             Contact Us
            <span className="dd-trigger" onClick={() => activeMenuSet("contact")}>
            </span>
          </a>
        </li>
        <li className="menu-item search-item">
          <div
            className="search-btn"
            data-bs-toggle="modal"
            data-bs-target="#search-modal"
          >
            <i className="far fa-search" />
          </div>
        </li>
      </ul>
    </nav>
  );
};
