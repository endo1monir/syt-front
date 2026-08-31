import "./AboutUsSection.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

function AboutUsSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLSpanElement | null>(null);

  const yellowBadgeRef = useRef<HTMLDivElement | null>(null);
  const blueBadgeRef = useRef<HTMLDivElement | null>(null);

  const yellowTextRef = useRef<HTMLSpanElement | null>(null);
  const blueTextRef = useRef<HTMLSpanElement | null>(null);

  const yellowIconRef = useRef<HTMLImageElement | null>(null);
  const blueIconRef = useRef<HTMLImageElement | null>(null);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useGSAP(
    () => {
      if (
        !containerRef.current ||
        !contentRef.current ||
        !yellowBadgeRef.current ||
        !blueBadgeRef.current ||
        !yellowIconRef.current ||
        !blueIconRef.current ||
        !buttonRef.current
      ) {
        return;
      }

      const split = SplitText.create(contentRef.current, {
        type: "words",
      });

      gsap.set([yellowIconRef.current, blueIconRef.current], {
        autoAlpha: 0,
        x: -30,
        rotation: -45,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      timeline.from(yellowBadgeRef.current, {
        opacity: 0,
        scale: 0.6,
        x: 80,
        y: -30,
        rotation: 18,
        duration: 0.7,
        ease: "back.out(1.7)",
      });

      timeline.from(
        yellowBadgeRef.current.querySelector("span"),
        {
          opacity: 0,
          y: 15,
          duration: 0.35,
          ease: "power3.out",
        },
        "-=0.5"
      );

      timeline.to(
        yellowIconRef.current,
        {
          autoAlpha: 1,
          x: 0,
          rotation: 0,
          duration: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.1"
      );

      timeline.from(split.words, {
        opacity: 0,
        y: 35,
        duration: 0.7,
        stagger: 0.045,
        ease: "power3.out",
      });

      timeline.from(
        blueBadgeRef.current,
        {
          opacity: 0,
          scale: 0.6,
          x: -80,
          y: 30,
          rotation: -20,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      timeline.from(
        blueBadgeRef.current.querySelector("span"),
        {
          opacity: 0,
          y: 15,
          duration: 0.35,
          ease: "power3.out",
        },
        "-=0.3"
      );

      timeline.to(
        blueIconRef.current,
        {
          autoAlpha: 1,
          x: 0,
          rotation: 0,
          duration: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.1"
      );

      timeline.from(
        buttonRef.current,
        {
          opacity: 0,
          y: 25,
          duration: 0.55,
          ease: "power3.out",
        },
        "-=0.1"
      );

      return () => {
        split.revert();
      };
    },
    {
      scope: containerRef,
    }
  );

  return (
    <section className="about-us" ref={containerRef}>
      <h2 className="about-us__title">About Us</h2>

      <div className="about-us__flow" dir="rtl">
        <div
          ref={yellowBadgeRef}
          className="about-us__badge about-us__badge--yellow"
        >
          <span ref={yellowTextRef}>التأثير عندنا فن</span>

          <img
            ref={yellowIconRef}
            src="/about-us-icon-1.svg"
            alt=""
            className="about-us__badge-icon"
          />
        </div>

        <span ref={contentRef} className="about-us__text-content">
          لأننا نعرف كيف نكتب القصة من أول سطر ، و كيف نصمم مسارها بخطط تسويقية
          مدروسة ، و نوجه أحداثها بمتابعة دقيقة و تحسين مستمر ، عشان كل فصل فيها
          يقربك أكثر من أهدافك ، و هذا اللي يخلي مشروعك مع صيت ، مو مجرد فكرة في
          السوق لكن تأثر و تستمر
        </span>

        <div
          ref={blueBadgeRef}
          className="about-us__badge about-us__badge--blue"
        >
          <span ref={blueTextRef}>و علامة تلهم.</span>

          <img
            ref={blueIconRef}
            src="/about-us-icon-2.svg"
            alt=""
            className="about-us__badge-icon"
          />
        </div>
      </div>

      <button
        ref={buttonRef}
        type="button"
        className="about-us__button"
      >
        خلك بطل قصتنا الجاية
      </button>
    </section>
  );
}

export default AboutUsSection;