import React, { useRef, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./CaseStudies.css";

export interface SlideItem {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    views: string;
    link: string;
}

const slides: SlideItem[] = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
        title: "وجبات الكبة",
        subtitle: "شاهد المشروع",
        views: "631.0k",
        link: "#",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop",
        title: "أطباق مشاوي",
        subtitle: "شاهد المشروع",
        views: "412.3k",
        link: "#",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
        title: "حلويات شرقية",
        subtitle: "شاهد المشروع",
        views: "298.7k",
        link: "#",
    },
    {
        id: 4,
        image:
            "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
        title: "مقبلات باردة",
        subtitle: "شاهد المشروع",
        views: "175.4k",
        link: "#",
    },
    {
        id: 5,
        image:
            "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?q=80&w=800&auto=format&fit=crop",
        title: "معجنات فرن",
        subtitle: "شاهد المشروع",
        views: "540.1k",
        link: "#",
    },
];

const CaseStudies: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const coverflowConfig = useMemo(
        () => ({
            rotate: 0,
            stretch: 0,
            depth: 500,
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

    const handleCardClick = (slide: SlideItem, index: number) => {
        if (!swiperRef.current) return;

        if (swiperRef.current.realIndex === index) {
            window.open(slide.link, "_blank", "noopener,noreferrer");
        } else {
            swiperRef.current.slideToLoop(index);
        }
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
                    loop
                    slideToClickedSlide
                    slidesPerView="auto"
                    watchSlidesProgress
                    keyboard={{ enabled: true }}
                    mousewheel={{
                        forceToAxis: true,
                        sensitivity: 1,
                    }}
                    coverflowEffect={coverflowConfig}
                    autoplay={autoplayConfig}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.realIndex);
                    }}
                    className="case-studies-swiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide
                            key={slide.id}
                            className="case-studies-slide"
                        >
                            <div
                                className="case-studies-card"
                                onClick={() =>
                                    handleCardClick(slide, index)
                                }
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (
                                        e.key === "Enter" ||
                                        e.key === " "
                                    ) {
                                        handleCardClick(slide, index);
                                    }
                                }}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    draggable={false}
                                    className="case-studies-img"
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
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    >
                        {currentSlide.subtitle}
                    </a>
                </div>

            </div>
        </section>
    );
};

export default CaseStudies;