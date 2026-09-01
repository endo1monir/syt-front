import Footer from "../../components/Footer/Footer";
import LightNavBar from "../../components/NavBar/LightNavBar/LightNavBar";
import "../Services/Services.css";

const InfluencerServices = () => {
    return (
        <div className="light-theme">
            <LightNavBar />

            <main className="services-light">
                <section className="services-hero" dir="rtl">
                    <div className="services-hero__container">
                        <img
                            src="/influencer-header-bg.png"
                            alt=""
                            className="services-hero__background"
                        />

                        <img
                            src="/influencer-object.png"
                            alt=""
                            className="services-hero__object"
                        />

                        <div className="services-hero__content">
                            <h1 className="services-hero__title">
                                محتوى يخلّي عميلك يشاور عليك
                            </h1>

                            <p className="services-hero__description">
                                في زمن السوشيال ، وجودك الرقمي لازم يكون قوي ويشدّ ، و حنا في صيت نحول حساباتك إلى منصات تفاعل حقيقية تخلي الناس تتابعك ، تتكلم عنك ، و تشتري منك ، مو بس ننشر ، حنا نبني علاقة بينك و بين جمهورك ، علاقة تدوم و تبيع
                            </p>

                            <button
                                type="button"
                                className="services-hero__button"
                            >
                                ابدأ معنا الآن
                            </button>
                        </div>
                    </div>
                </section>

                <section className="how-we-work">
                    <div className="how-we-work__container">
                        <h2 className="how-we-work__title">
                            كيف نشتغل
                        </h2>

                        <div className="how-we-work__cards-wrapper">
                            <div className="how-we-work__cards">
                                <article
                                    className="how-we-work__card how-we-work__card--1"
                                    style={{
                                        backgroundImage: "url('/service-bg-1.png')",
                                    }}
                                >
                                    <div className="how-we-work__card-top">
                                        <span className="how-we-work__number">
                                            1
                                        </span>

                                        <img
                                            src="/service-icon-1.png"
                                            alt=""
                                            className="how-we-work__icon"
                                        />
                                    </div>

                                    <span className="how-we-work__line" />

                                    <p className="how-we-work__description">
                                        نبدأ بتحليل سوقك والكلمات اللي يبحث عنها عملاءك، نطلع لك قرار
                                        فعلاً وقت الحاجة ومهتم بخدماتك ومنتجاتك.
                                    </p>
                                </article>

                                <article
                                    className="how-we-work__card how-we-work__card--2"
                                    style={{
                                        backgroundImage: "url('/service-bg-2.png')",
                                    }}
                                >
                                    <div className="how-we-work__card-top">
                                        <span className="how-we-work__number">
                                            2
                                        </span>

                                        <img
                                            src="/service-icon-2.png"
                                            alt=""
                                            className="how-we-work__icon"
                                        />
                                    </div>

                                    <span className="how-we-work__line" />

                                    <p className="how-we-work__description">
                                        نحسن محتوى موقعك وهيكلته ونخليه يتوافق مع متطلبات محركات
                                        البحث عشان يظهر بشكل أقوى ويوصل للعملاء الصح.
                                    </p>
                                </article>

                                <article
                                    className="how-we-work__card how-we-work__card--3"
                                    style={{
                                        backgroundImage: "url('/service-bg-3.png')",
                                    }}
                                >
                                    <div className="how-we-work__card-top">
                                        <span className="how-we-work__number">
                                            3
                                        </span>

                                        <img
                                            src="/service-icon-3.png"
                                            alt=""
                                            className="how-we-work__icon"
                                        />
                                    </div>

                                    <span className="how-we-work__line" />

                                    <p className="how-we-work__description">
                                        نشتغل على سرعة الموقع وتجربة المستخدم وكل التفاصيل التقنية
                                        اللي ترفع فرص ظهورك وتخلي موقعك أقوى.
                                    </p>
                                </article>

                                <article
                                    className="how-we-work__card how-we-work__card--4"
                                    style={{
                                        backgroundImage: "url('/service-bg-4.png')",
                                    }}
                                >
                                    <div className="how-we-work__card-top">
                                        <span className="how-we-work__number">
                                            4
                                        </span>

                                        <img
                                            src="/service-icon-4.png"
                                            alt=""
                                            className="how-we-work__icon"
                                        />
                                    </div>

                                    <span className="how-we-work__line" />

                                    <p className="how-we-work__description">
                                        نرسل لك تقارير دورية توضح ترتيبك وأثر الشغل والنتائج اللي
                                        وصلنا لها والخطوات الجاية.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default InfluencerServices;