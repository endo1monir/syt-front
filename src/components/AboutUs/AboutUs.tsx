import "./AboutUs.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

function AboutUs() {
  const containerRef = useRef<HTMLElement | null>(null);

  const contentRef = useRef<HTMLSpanElement | null>(null);

  const yellowBadgeRef = useRef<HTMLDivElement | null>(null);
  const blueBadgeRef = useRef<HTMLDivElement | null>(null);

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useGSAP(
    () => {
      if (
        !containerRef.current ||
        !contentRef.current ||
        !yellowBadgeRef.current ||
        !blueBadgeRef.current ||
        !buttonRef.current
      ) {
        return;
      }

      // Split ONLY the main content
      const split = SplitText.create(contentRef.current, {
        type: "words",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // 1. Yellow badge - animate entire DIV
      timeline.from(yellowBadgeRef.current, {
        opacity: 0,
        scale: 0.6,
        x: 80,
        y: -30,
        rotation: 18,
        duration: 0.7,
        ease: "back.out(1.7)",
      });

      // 2. Main content
      timeline.from(split.words, {
        opacity: 0,
        y: 35,
        duration: 0.7,
        stagger: 0.045,
        ease: "power3.out",
      });

      // 3. Blue badge - animate entire DIV
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
        "-=0.15"
      );

      // 4. Button
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
      <h2 className="about-us__title" ref={titleRef}>
        About Us
      </h2>

      <div className="about-us__flow" dir="rtl">
        {/* Yellow badge stays as ONE element */}
        <div
          ref={yellowBadgeRef}
          className="about-us__badge about-us__badge--yellow"
        >
          <span>التأثير عندنا فن</span>

          <img
            src="/icon-1.svg"
            alt=""
            className="about-us__badge-icon"
          />
        </div>

        {/* SplitText ONLY works inside this span */}
        <span ref={contentRef} className="about-us__text-content">
          لأننا نعرف كيف نكتب القصة من أول سطر ، و كيف نصمم مسارها بخطط
          تسويقية مدروسة ، و نوجه أحداثها بمتابعة دقيقة و تحسين مستمر ، عشان
          كل فصل فيها يقربك أكثر من أهدافك ، و هذا اللي يخلي مشروعك مع صيت ،
          مو مجرد فكرة في السوق لكن تأثر و تستمر 
        </span>

        {/* Blue badge stays as ONE element */}
        <div
          ref={blueBadgeRef}
          className="about-us__badge about-us__badge--blue"
        >
          <span>و علامة تلهم.</span>

          <img
            src="/icon-2.svg"
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

export default AboutUs;