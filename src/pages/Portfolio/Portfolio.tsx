import "./Portfolio.css";
import { FiCamera, FiThumbsUp } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import caseStudiesData from "../../helper/caseStudies.json";
import "swiper/css";
import "swiper/css/effect-coverflow";
import LightNavBar from "../../components/NavBar/LightNavBar/LightNavBar";
import Footer from "../../components/Footer/Footer";

import CountUpModule from "react-countup";
interface SlideItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

const Portfolio = () => {


  const AnimatedCounter =
    (
      CountUpModule as unknown as {
        default?: typeof CountUpModule;
      }
    ).default ?? CountUpModule;

  const stats = [
    {
      id: 1,
      value: 5,
      label: "سنين الخبرة",
    },
    {
      id: 2,
      value: 5000,
      label: "عدد الانفلونسرز",
    },
    {
      id: 3,
      value: 89,
      suffix: "%",
      label: "نسبة رضا العملاء",
    },
    {
      id: 4,
      value: 241,
      label: "عدد المشروعات",
    },
  ];
  const swiperRef = useRef<SwiperType | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const slides: SlideItem[] = caseStudiesData.caseStudiesData;

  const coverflowConfig = useMemo(
    () => ({
      rotate: -1,       // tilts the side cards — this is what gives the "fanned" look
      stretch: 20,      // pulls slides closer together horizontally; tune to taste
      depth: 200,        // pushes side slides back in Z — smaller than 500 so they don't vanish
      modifier: 1,
      slideShadows: false,
    }),
    []
  );

  const autoplayConfig = useMemo(
    () => ({
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }),
    []
  );

  const handleCardClick = (
    slide: SlideItem,
    index: number
  ) => {
    if (!swiperRef.current) return;

    if (swiperRef.current.realIndex === index) {
      window.open(
        slide.link,
        "_blank",
        "noopener,noreferrer"
      );

      return;
    }

    swiperRef.current.slideToLoop(index);
  };

  const currentSlide = slides[activeIndex] || slides[0];

  return (
    <div className="light-theme">
      <LightNavBar />

      <section className="portfolio-case">
        <div className="portfolio-case__content">

          <div className="portfolio-case__media">
            <div className="portfolio-case__video-card">
              <img
                src="/portofilio.png"
                alt="وجبات الكبة"
                className="portfolio-case__video-image"
              />
            </div>
          </div>

          <div className="portfolio-case__info">

            <div className="portfolio-case__breadcrumb">
              <span>
                أعمالنا السابقة
              </span>

              <span>
                /
              </span>

              <strong>
                وجبات الكبة
              </strong>
            </div>

            <h1 className="portfolio-case__title">
              وجبات الكبة
            </h1>

            <p className="portfolio-case__description">
              وجبات الكبة أطلقوا حملة مؤثرين مبتكرة بهدف زيادة الوعي بالبراند
              وتحقيق أعلى ظهور ووصول ممكن للجمهور المستهدف. قدرنا نحقق أرقام قوية
              ونتائج مميزة من خلال اختيار المؤثرين المناسبين وصناعة محتوى قريب من
              الجمهور.
            </p>

            <div className="portfolio-case__work">

              <h2 className="portfolio-case__work-title">
                وش سوينا بالضبط؟
              </h2>

              <div className="portfolio-case__work-grid">

                <div className="portfolio-case__work-item">
                  <div className="portfolio-case__icon">
                    <SiTiktok />
                  </div>

                  <p>
                    دعينا 10 مؤثرين يزورون الفرع ويجربون الأطباق بأنفسهم.
                  </p>
                </div>

                <div className="portfolio-case__work-item">
                  <div className="portfolio-case__icon">
                    <FiCamera />
                  </div>

                  <p>
                    المحتوى كان قصير، كرييتف، ومشوّق يركّز على تجربة الأكل.
                  </p>
                </div>

                <div className="portfolio-case__work-item">
                  <div className="portfolio-case__icon">
                    <FaInstagram />
                  </div>

                  <p>
                    ركزنا على تيك توك لأنه يعطي دفعة قوية للانتشار السريع.
                  </p>
                </div>

                <div className="portfolio-case__work-item">
                  <div className="portfolio-case__icon">
                    <FiThumbsUp />
                  </div>

                  <p>
                    التغطيات كانت طبيعية وعفوية ورد فعل فوري من الجمهور.
                  </p>
                </div>

                <div className="portfolio-case__work-item">
                  <div className="portfolio-case__icon">
                    <FaInstagram />
                  </div>

                  <p>
                    كل مؤثر حفّز متابعينه يزورون الفرع ويجربون الأكل.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="portfolio-stats">
        <div className="portfolio-stats__counter">
          {stats.map((stat) => (
            <div
              className="portfolio-stats__item"
              key={stat.id}
            >
              <div className="portfolio-stats__value">
                <AnimatedCounter
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  suffix={stat.suffix ?? ""}
                  useGrouping={false}
                  enableScrollSpy
                  scrollSpyOnce
                  scrollSpyDelay={150}
                />
              </div>

              <p className="portfolio-stats__label">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>


      <section className="portfolio-slider">
        <div className="portfolio-slider__wrap">

          <Swiper
            modules={[
              EffectCoverflow,
              Mousewheel,
              Keyboard,
              Autoplay,
            ]}
            effect="coverflow"
            grabCursor
            centeredSlides
            centeredSlidesBounds
            loop
            slideToClickedSlide
            slidesPerView={3}
            spaceBetween={-10}
            watchSlidesProgress
            keyboard={{
              enabled: true,
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
            }}
            coverflowEffect={coverflowConfig}
            autoplay={autoplayConfig}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className="portfolio-slider__swiper"
          >
            {slides.map((slide, index) => (

              <SwiperSlide
                key={slide.id}
                className="portfolio-slider__slide"
              >

                <div
                  className="portfolio-slider__card"
                  onClick={() =>
                    handleCardClick(slide, index)
                  }
                  role="button"
                  tabIndex={0}
                >

                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="portfolio-slider__image"
                    draggable={false}
                    loading="lazy"
                  />

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>
      </section>

      <Footer />

    </div>
  );
};

export default Portfolio;