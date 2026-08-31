import Footer from "../../components/Footer/Footer";
import LightNavBar from "../../components/NavBar/LightNavBar/LightNavBar";
import "./About.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function About() {
  return (
    <div className="light-theme">
      <LightNavBar />

      <main className="about-page">
        <header className="about-header">
          <img
            src="/about-us-page-bg.png"
            alt=""
            className="about-header__bg"
          />

          <div className="about-header__content">
            <h1 className="about-title">من نحن</h1>

            <p className="about-subtitle">
              حنا فى صيت ، مؤمنين جداً أن كل مشروع له قصته الخاصة ، و مهمتنا إننا
              نخلي مشروعك قصة استثنائية الكل يعرفها و يتكلم عنها
            </p>
          </div>
        </header>

        {/* START OF SECTION 1 */}
        <section className="about-cards">
          <div className="about-cards__container">
            <article className="about-card card-1">
              <div className="about-card__icon">
                <img src="/about-us-page-icon-1.png" alt="رؤيتنا" />
              </div>

              <h3>رؤيتنا</h3>

              <p>أن نكون الخيار الأول للتسويق الإلكتروني في المملكة</p>
            </article>

            <article className="about-card card-2">
              <div className="about-card__icon">
                <img src="/about-us-page-icon-2.png" alt="رسالتنا" />
              </div>

              <h3>رسالتنا</h3>

              <p>
                تحويل كل مشروع وفكرة إلى تجربة تسويقية مجنونة تخطف الأنظار
              </p>
            </article>

            <article className="about-card card-3">
              <div className="about-card__icon">
                <img src="/about-us-page-icon-3.png" alt="أهدافنا" />
              </div>

              <h3>أهدافنا</h3>

              <p>نخلّي مشاريعك صيت بأرقام بيعية كل يوم تزيد</p>
            </article>

            <article className="about-card card-4">
              <div className="about-card__icon">
                <img
                  src="/about-us-page-icon-4.png"
                  alt="إبداع استثنائي"
                />
              </div>

              <h3>إبداع استثنائي</h3>

              <p>نخلي منتجاتك ترند ، الناس ما توقف تشاركه</p>
            </article>
          </div>
        </section>

        {/* START OF SECTION 2 */}
        <section className="who-is-it-for" dir="rtl">
          <div className="who-is-it-for__curve"></div>

          <div className="who-is-it-for__images" aria-hidden="true">
            <img
              src="/who-2.png"
              alt=""
              className="who-is-it-for__image who-is-it-for__image--1"
            />

            <img
              src="/who-3.png"
              alt=""
              className="who-is-it-for__image who-is-it-for__image--2"
            />

            <img
              src="/who-1.png"
              alt=""
              className="who-is-it-for__image who-is-it-for__image--3"
            />
          </div>

          <div className="who-is-it-for__container">
            <h2 className="who-is-it-for__title">لو أنت من ...</h2>

            <div className="who-is-it-for__content">
              <article className="who-is-it-for__item who-is-it-for__item--one">
                <span className="who-is-it-for__number">1</span>

                <h3 className="who-is-it-for__item-title">رواد الأعمال</h3>

                <p className="who-is-it-for__description">
                  اللي يرغبون في إطلاق مشاريعهم بشكل استثنائي يلفت الأنظار
                </p>
              </article>

              <article className="who-is-it-for__item who-is-it-for__item--two">
                <span className="who-is-it-for__number">2</span>

                <h3 className="who-is-it-for__item-title">الشركات الطموحة</h3>

                <p className="who-is-it-for__description">
                  الباحثة عن دعم وجودها في السوق بخطط تسويقية مدروسة
                </p>
              </article>

              <article className="who-is-it-for__item who-is-it-for__item--three">
                <span className="who-is-it-for__number">3</span>

                <h3 className="who-is-it-for__item-title">
                  أصحاب الأفكار المجنونة
                </h3>

                <p className="who-is-it-for__description">
                  اللي يحتاجون لـ تحويل أفكارهم لـ نجاحات مختلفة و مُبهرة
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* START OF SECTION 3 */}
        <section className="partners">
          <h2 className="partners__title">شركاء النجاح</h2>

          <Swiper
            dir="ltr"
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: false,
            }}
            speed={4000}
            slidesPerView={5}
            spaceBetween={20}
            allowTouchMove={false}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            className="partners-swiper"
          >
            {[
              "/partner-1.png",
              "/partner-2.png",
              "/partner-3.png",
              "/partner-4.png",
              "/partner-5.png",
              "/partner-6.png",
              "/partner-7.png",
              "/partner-8.png",
              "/partner-9.png",
            ].map((src, index) => (
              <SwiperSlide key={`row1-${index}`}>
                <img src={src} alt={`Partner ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            dir="ltr"
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: true,
            }}
            speed={4000}
            slidesPerView={5}
            spaceBetween={20}
            allowTouchMove={false}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            className="partners-swiper"
          >
            {[
              "/partner-9.png",
              "/partner-8.png",
              "/partner-7.png",
              "/partner-6.png",
              "/partner-5.png",
              "/partner-4.png",
              "/partner-3.png",
              "/partner-2.png",
              "/partner-1.png",
            ].map((src, index) => (
              <SwiperSlide key={`row2-${index}`}>
                <img src={src} alt={`Partner ${index + 6}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>

      <Footer />
    </div>
  );
}