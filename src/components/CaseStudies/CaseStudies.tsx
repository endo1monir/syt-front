import React, { useMemo, useRef, useState } from "react";
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
import "./CaseStudies.css";

export interface SlideItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

const CaseStudies: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: SlideItem[] = caseStudiesData.caseStudiesData;

const coverflowConfig = useMemo(
    () => ({
      rotate: -1,
      stretch: 10,
      depth: 100,
      modifier: 5,
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

  const handleCardClick = (slide: SlideItem, index: number) => {
    if (!swiperRef.current) return;

    if (swiperRef.current.realIndex === index) {
      window.open(slide.link, "_blank", "noopener,noreferrer");
      return;
    }

    swiperRef.current.slideToLoop(index);
  };

  const currentSlide = slides[activeIndex] || slides[0];

  return (
    <section className="case-studies-section">
      <div className="case-studies-wrap">
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

        <div className="case-studies-caption">
          <h2>{currentSlide.title}</h2>

          <a
            href={currentSlide.link}
            className="case-studies-link"
            onClick={(e) => e.stopPropagation()}
          >
            {currentSlide.subtitle}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;