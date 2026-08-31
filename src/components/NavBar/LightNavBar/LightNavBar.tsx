import "./LightNavBar.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import { FaPhone } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

const DarkNavBar = () => {
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState("main");

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveView("main");
  };

  const togglePhone = (e: React.MouseEvent) => {
    if (window.innerWidth <= 767) {
      e.preventDefault();
      setPhoneOpen(!phoneOpen);
    }
  };

  return (
    <nav className="light-navbar">

      {/* Phone */}
      <div
        className="light-navbar__phone"
        onMouseEnter={() => setPhoneOpen(true)}
        onMouseLeave={() => setPhoneOpen(false)}
      >
        <a
          href="tel:536195067"
          className={`light-navbar__phone-tooltip ${phoneOpen
            ? "light-navbar__phone-tooltip--open"
            : ""
            }`}
        >
          536195067
        </a>

        <a
          href="tel:536195067"
          className="light-navbar__phone-button"
          onClick={togglePhone}
        >
          <span className="light-navbar__phone-number">
            536195067
          </span>

          <span className="light-navbar__phone-icon-wrapper">
            <span className="light-navbar__phone-bubble">
              <FaPhone className="light-navbar__phone-icon" />
            </span>
          </span>
        </a>
      </div>


      {/* Logo */}
      <div className="light-navbar__logo">
        <Link to="/" onClick={closeMenu}>
          <img
            src="/logo.svg"
            alt="SYT Plus"
          />
        </Link>
      </div>


      {/* Overlay */}
      {menuOpen && (
        <button
          className="light-navbar__overlay"
          onClick={closeMenu}
          aria-label="close menu"
        />
      )}


      {/* Menu */}
      <div className="light-navbar__menu-wrapper">

        <div
          className={`light-navbar__menu ${menuOpen
            ? "light-navbar__menu--open"
            : ""
            }`}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={closeMenu}
        >

          <div className="light-navbar__menu-trigger">
            <img
              src="/menu.svg"
              alt="menu"
            />

            <h2>القائمة</h2>
          </div>


          {menuOpen && (
            <div className="light-navbar__menu-body">

              {/* Main Menu */}
              {activeView === "main" && (
                <div className="light-navbar__menu-content">

                  <Link
                    to="/"
                    onClick={closeMenu}
                  >
                    الرئيسية
                  </Link>


                  <button
                    type="button"
                    onClick={() =>
                      setActiveView("services")
                    }
                  >
                    خدماتنا
                  </button>


                  <Link
                    to="/influencer-services"
                    onClick={closeMenu}
                  >
                    خدمات الانفلونسر
                  </Link>


                  <Link
                    to="/#portfolio"
                    onClick={closeMenu}
                  >
                    أعمالنا السابقة
                  </Link>


                  <Link
                    to="/blog"
                    onClick={closeMenu}
                  >
                    المدونة
                  </Link>


                  <Link
                    to="/about"
                    onClick={closeMenu}
                  >
                    من نحن
                  </Link>

                </div>
              )}


              {/* Services Menu */}
              {activeView === "services" && (
                <div className="light-navbar__menu-content">

                  <button
                    type="button"
                    className="light-navbar__back"
                    onClick={() =>
                      setActiveView("main")
                    }
                  >
                    <BsArrowRight />
                  </button>


                  <Link
                    to="/services/seo"
                    onClick={closeMenu}
                  >
                    SEO
                  </Link>


                  <Link
                    to="/services/social-media"
                    onClick={closeMenu}
                  >
                    إدارة السوشيال ميديا
                  </Link>


                  <Link
                    to="/services/cro"
                    onClick={closeMenu}
                  >
                    CRO
                  </Link>


                  <Link
                    to="/services/ads"
                    onClick={closeMenu}
                  >
                    الحملات الإعلانية الممولة
                  </Link>

                  
                  <Link
                    to="/services/ui-ux"
                    onClick={closeMenu}
                  >
                    واجهة المستخدم UI/UX
                  </Link>


                  <Link
                    to="/services/data-analysis"
                    onClick={closeMenu}
                  >
                    تحليل البيانات
                  </Link>




                  <Link
                    to="/services/ecommerce"
                    onClick={closeMenu}
                  >
                    إنشاء المتاجر الإلكترونية
                  </Link>


                  <Link
                    to="/services/syt-plus"
                    onClick={closeMenu}
                  >
                    صيت بلس
                  </Link>


                  <Link
                    to="/services/graphic-motion"
                    onClick={closeMenu}
                  >
                    تصميم الجرافيك والموشن
                  </Link>

                </div>
              )}

            </div>
          )}

        </div>
      </div>

    </nav>
  );
};

export default DarkNavBar;