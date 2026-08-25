import "./SideMenu.css"
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeView, setActiveView] = useState("main");

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveView("main");
  };

  const openServices = () => {
    setActiveView("services");
  };

  const goBack = () => {
    setActiveView("main");
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          className="side-menu__overlay"
          onClick={closeMenu}
          aria-label="إغلاق القائمة"
        />
      )}

      <div className="side-menu-wrapper">
        <div
          className={`side-menu ${
            isOpen ? "side-menu--open" : ""
          }`}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
        >
          {/* Menu Header / Trigger */}
          <div className="nav-menu">
            <img
              className="nav-menu__icon"
              src="/menu.svg"
              alt="menu"
            />

            <h2 className="nav-menu__title">
              القائمة
            </h2>
          </div>

          {/* Menu Body */}
          {isOpen && (
            <div className="side-menu__body">
              <div
                key={activeView}
                className={`side-menu__view side-menu__view--${activeView}`}
              >
                {/* ======================
                    Main Menu
                ====================== */}
                {activeView === "main" && (
                  <div className="side-menu__content">
                    <a
                      href="/"
                      className="side-menu__item"
                    >
                      الرئيسية
                    </a>

                    <button
                      type="button"
                      className="side-menu__item"
                      onClick={openServices}
                    >
                      خدماتنا
                    </button>

                    <a
                      href="/influencer-services"
                      className="side-menu__item"
                    >
                      خدمات الانفلونسر
                    </a>

                    <a
                      href="/portfolio"
                      className="side-menu__item"
                    >
                      أعمالنا السابقة
                    </a>

                    <a
                      href="/blog"
                      className="side-menu__item"
                    >
                      المدونة
                    </a>

                    <a
                      href="/about"
                      className="side-menu__item"
                    >
                      من نحن
                    </a>
                  </div>
                )}

                {/* ======================
                    Services Menu
                ====================== */}
                {activeView === "services" && (
                  <div className="side-menu__content">
                    <button
                      type="button"
                      className="side-menu__back"
                      onClick={goBack}
                      aria-label="العودة للقائمة الرئيسية"
                    >
                  <BsArrowRight size={20} />
                    </button>

                    <a
                      href="/services"
                      className="side-menu__item"
                    >
                      تصفح الخدمات
                    </a>

                    <a
                      href="/services/paid-ads"
                      className="side-menu__item"
                    >
                      الحملات الإعلانية الممولة
                    </a>

                    <a
                      href="/services/social-media"
                      className="side-menu__item"
                    >
                      إدارة السوشيال ميديا
                    </a>

                    <a
                      href="/services/data-analysis"
                      className="side-menu__item"
                    >
                      تحليل البيانات
                    </a>

                    <a
                      href="/services/cro"
                      className="side-menu__item"
                    >
                      CRO
                    </a>

                    <a
                      href="/services/ui-ux"
                      className="side-menu__item"
                    >
                      واجهة المستخدم UI/UX
                    </a>

                    <a
                      href="/services/ecommerce"
                      className="side-menu__item"
                    >
                      إنشاء المتاجر الإلكترونية
                    </a>

                    <a
                      href="/services/syt-plus"
                      className="side-menu__item"
                    >
                      صيت بلس
                    </a>

                    <a
                      href="/services/graphic-motion"
                      className="side-menu__item"
                    >
                      تصميم الجرافيك والموشن
                    </a>

                    <a
                      href="/services/seo"
                      className="side-menu__item"
                    >
                      SEO
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideMenu;