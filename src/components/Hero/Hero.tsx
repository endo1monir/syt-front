import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__visual">
          <picture>
            <source media="(max-width: 768px)" srcSet="/hero-md.png" />

            <img
              src="/hero.png"
              alt="صيت للتسويق والتجارة الإلكترونية"
              className="hero__image"
            />
          </picture>
        </div>

        <div className="hero__content">
          <h1>جاهز تصير قصتنا الجاية ؟</h1>

          <p>
            في عالم التجارة الإلكترونية النجاح ما عاد رفاهية و هنا يجي دورنا،
            لأن صيت مو مجرد شركة تسويق عادية، حنا فريق كامل من المبدعين و
            المجانين اللي يعرفون كيف يحولون كل فكرة لـ أجواء تخطف الأنظار و
            كل مشروع لـ استثمار يحقق أعلى مبيعات
          </p>

          <button type="button" className="hero__button">
            خلك بطل قصتنا الجاية
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;