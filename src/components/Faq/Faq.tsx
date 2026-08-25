import "./Faq.css";
import { useState } from "react";

const faqData = [
    {
        id: 1,
        question: "وش المقصود بـ صيت؟ هل أنتم وكالة تسويق؟",
        answer:
            "حنا نؤمن أن لكل براند حكاية تستاهل تنحكي. صيت مو مجرد وكالة تقدم خدمات تقنية، حنا شركاء نجاحك من أول فكرة الـ Branding لين ما توصل لجمهورك وتحقق أهدافك بطريقة واضحة.",
    },
    {
        id: 2,
        question: "كيف تضمنون أن الحملة الإعلانية تجيب نتائج فعلية؟",
        answer:
            "نعتمد على تحليل البيانات وفهم الجمهور المستهدف قبل إطلاق أي حملة، ثم نتابع الأداء بشكل مستمر ونحسن الاستراتيجيات للوصول لأفضل النتائج الممكنة.",
    },
    {
        id: 3,
        question: "عندي مشروع ناشئ، هل خدماتكم تناسبني ولا بس للشركات الكبيرة؟",
        answer:
            "خدماتنا مصممة لتناسب المشاريع الناشئة والشركات الكبيرة، ونساعد كل مشروع على بناء حضور قوي واستراتيجية تسويقية تناسب أهدافه وميزانيته.",
    },
    {
        id: 4,
        question: "كيف تختارون المؤثرين المناسبين؟",
        answer:
            "نختار المؤثرين بناءً على طبيعة العلامة التجارية والجمهور المستهدف، مع تحليل البيانات والتأكد من توافق المحتوى مع أهداف الحملة.",
    },
    {
        id: 5,
        question: "هل خدمات السيو (SEO) عندكم تقتصر على الكلمات المفتاحية بس؟",
        answer:
            "لا، خدمات السيو تشمل تحسين تجربة المستخدم، بناء المحتوى، تحسين الموقع تقنياً، تحليل المنافسين، واستراتيجيات تساعد على ظهور أفضل في محركات البحث.",
    },
    {
        id: 6,
        question: "كيف أقدر أبدأ رحلتي معكم؟",
        answer:
            "تقدر تبدأ بالتواصل معنا، نناقش أهداف مشروعك واحتياجاتك، وبعدها نجهز لك الحلول والاستراتيجية المناسبة لتحقيق أفضل نمو.",
    },
];


const Faq = () => {

    const [active, setActive] = useState<number | null>(1);


    return (
        <section className="faq">

            <div className="faq__container">


                {/* FAQ List */}
                <div className="faq__list">

                    {faqData.map((item) => (

                        <div
                            className={`faq__item ${active === item.id ? "active" : ""
                                }`}
                            key={item.id}
                        >


                            <button
                                className="faq__question"
                                onClick={() =>
                                    setActive(
                                        active === item.id
                                            ? null
                                            : item.id
                                    )
                                }
                            >

                                <span className="faq__number">
                                    {item.id}
                                </span>


                                <span className="faq__text">
                                    {item.question}
                                </span>

                                <span className="faq__icon">
                                    <span className="faq__arrow">
                                        ↓
                                    </span>
                                </span>
                            </button>


                            <div className="faq__answer">

                                <p>
                                    {item.answer}
                                </p>

                            </div>


                        </div>

                    ))}


                </div>



                {/* Side Content */}
                <div className="faq__side">

                    <h2>
                        الأسئلة الشائعة
                    </h2>


                    <p>
                        Lorem ipsum dolor sit amet consectetur
                        Egestas massa fames ac nunc enim fames
                        porttitor massa nisi.
                    </p>


                    <button>
                        اسأل الدعم
                    </button>


                </div>


            </div>

        </section>
    );
};


export default Faq;