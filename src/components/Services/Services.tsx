import "./Services.css";
import servicesData from "../../helper/services.json";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(
    ScrollTrigger,
    useGSAP
);



interface Service {
    id: number;
    title: string;
    badge: string;
    description: {
        boldContnet: string;
        text: string;
    }[];
    cta: string;
    image: string;
}



const Services = () => {


    const servicesRef = useRef<HTMLElement | null>(null);


    const services: Service[] = servicesData.services;



    useGSAP(() => {
        // Animate section title on scroll
        gsap.from(".services__title", {
            scrollTrigger: {
                trigger: ".services__title",
                start: "top 95%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power2.out"
        });

        // Stagger animate cards on scroll
        const cards = gsap.utils.toArray<HTMLElement>(".service-card");
        cards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 45,
                duration: 0.8,
                delay: (index % 2) * 0.12,
                ease: "power3.out"
            });
        });
    }, { scope: servicesRef });




    return (

        <section
            ref={servicesRef}
            className="services"
        >


            <div className="services__container">


                <h2 className="services__title">
                    خدماتنا
                </h2>




                <div className="services__grid">


                    {
                        services.map((service) => (


                            <article

                                className="service-card"

                                key={service.id}

                            >


                                <img

                                    src={service.image}

                                    alt={service.title}

                                    className="service-card__image"

                                />



                                <div className="service-card__content">



                                    <h3>

                                        {service.title}

                                    </h3>



                                    <div className="service-card__badge">

                                        {service.badge}

                                    </div>




                                    <div className="service-card__description">


                                        {
                                            service.description.map(
                                                (item, index) => (

                                                    <p key={index}>

                                                        ✓{" "}

                                                        <span>
                                                            {item.boldContnet}
                                                        </span>

                                                        {item.text}

                                                    </p>

                                                )
                                            )
                                        }


                                    </div>




                    <a
    href="#"
    className="service-card__link"
>
    <span>
        ←
    </span>

    {service.cta}

</a>




                                </div>


                            </article>


                        ))
                    }


                </div>

                <div className="services__footer">
                    <p>و المزيد من الخدمات اللتي تدعم نشاطك التجاري</p>
                    <button type="button" className="services__button">
                       المزيد من الخدمات
                    </button>
                </div>

            </div>



        </section>


    );

};


export default Services;