import "./Faq.css";
import { useState } from "react";
import faqData from "../../helper/faq.json";



const Faq = () => {


    const [active, setActive] = useState<number | null>(1);

    interface FAQItem {
        id: number;
        question: string;
        answer: string;
    }


    const faqs: FAQItem[] = faqData.faqData;
    return (

        <section className="faq">


            <div className="faq__container">



                {/* FAQ List */}

                <div className="faq__list">


                    {
                        faqs.map((item) => (


                            <div

                                className={`faq__item ${active === item.id
                                        ? "active"
                                        : ""
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


                        ))
                    }



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