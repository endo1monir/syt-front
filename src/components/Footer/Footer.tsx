import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" dir="rtl">
      <picture className="footer-picture">
        <source
          media="(max-width: 900px)"
          srcSet="/footer-md.png"
        />

        <img
          className="footer-background"
          src="/footer.png"
          alt=""
        />
      </picture>

      <div className="footer__grid">
        {/* START OF GRID COLUMN 1 */}
        <div className="footer__column">
          <h3 className="footer__title">
            روابط هامة
          </h3>

          <nav className="footer__links">
            <a href="/">الرئيسية</a>
            <a href="/services">خدماتنا</a>
            <a href="/blog">المدونة</a>
            <a href="/about">من نحن</a>
            <a href="/privacy">سياسة الخصوصية</a>
          </nav>
        </div>

        {/* START OF GRID COLUMN 2 */}
        <div className="footer__column">
          <h3 className="footer__title">
            خدماتنا في صيت
          </h3>

          <nav className="footer__links">
            <a href="#">تحسين محركات البحث</a>
            <a href="#">الحملات الإعلانية</a>
            <a href="#">إدارة السوشيال ميديا</a>
            <a href="#">رفع معدلات التحويل</a>
            <a href="#">إدارة المتاجر الإلكترونية</a>
            <a href="#">تحليل البيانات</a>
            <a href="#">واجهة المستخدم ui ux</a>
            <a href="#">تصميم الجرافيك و الموشن</a>
            <a href="#">صيت بلس</a>
          </nav>
        </div>

        {/* START OF GRID COLUMN 3 */}
        <div className="footer__column">
          <h3 className="footer__title">
            بعض المشاريع
          </h3>

          <div className="footer__links">
            <a href="#">جسار</a>
            <a href="#">بس رشد للبصريات</a>
            <a href="#">وجبات الكبة</a>
            <a href="#">بن رشد الطبية</a>
          </div>
        </div>

        {/* START OF GRID COLUMN 4 */}
        <div className="footer__column footer__column--contact">
          <h3 className="footer__title">
            بيانات التواصل
          </h3>

          <div className="footer__contact">
            <div className="footer__contact-item">
              <span className="footer__icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>
              </span>

              <span>
                حي السويدي ، صبيا ، الدريهمية ، الرياض
              </span>
            </div>

            <div className="footer__contact-item">
              <span className="footer__icon">
                <svg viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.7 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2Z" />
                </svg>
              </span>

              <a href="tel:536195067" dir="ltr">
                536195067
              </a>
            </div>

            <div className="footer__contact-item">
              <span className="footer__icon footer__icon--stroke">
                <svg viewBox="0 0 24 24">
                  <path d="M3 5h18v14H3V5Z" />
                  <path d="m3 6 9 7 9-7" />
                </svg>
              </span>

              <a href="mailto:info@syt-inf.com" dir="ltr">
                info@syt-inf.com
              </a>
            </div>

            <div className="footer__contact-item">
              <span className="footer__icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a9.6 9.6 0 0 0-8.2 14.6L2.5 22l5.5-1.4A9.7 9.7 0 1 0 12 2Zm4.8 13.7c-.2.6-1.2 1.1-1.7 1.2-.5.1-1.1.2-3.5-.8-2.9-1.2-4.8-4.2-5-4.4-.1-.2-1.2-1.6-1.2-3.1 0-1.5.8-2.2 1.1-2.5.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.8 2c.1.3.1.5 0 .7-.1.2-.2.3-.4.5l-.5.6c-.2.2-.3.4-.1.7.2.4.8 1.4 1.8 2.2 1.2 1.1 2.3 1.5 2.6 1.7.3.1.5.1.7-.1l1-1.2c.2-.3.5-.3.8-.2l2 .9c.3.2.6.3.7.4.1.2.1.7-.1 1.2Z" />
                </svg>
              </span>

              <a
                href="https://wa.me/551980314"
                dir="ltr"
              >
                551980314
              </a>
            </div>
          </div>

          <div className="footer__certificates">
            <img
              src="/footer-icon-1.svg"
              alt="اعتمادات صيت"
            />

            <img
              src="/footer-icon-2.svg"
              alt="اعتمادات صيت"
            />

            <img
              src="/footer-icon-3.svg"
              alt="اعتمادات صيت"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;