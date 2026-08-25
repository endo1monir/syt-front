import "./Services.css";
import servicesData from "../../helper/services.json";

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

    const services: Service[] = servicesData.services;


    return (
        <section className="services">

            <div className="services__container">

                <h2 className="services__title">
                    خدماتنا
                </h2>


                <div className="services__grid">

                    {services.map((service) => (

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

                                    {service.description.map((item, index) => (
                                        <p key={index}>
                                            ✓ <span>{item.boldContnet}</span>
                                            {item.text}
                                        </p>
                                    ))}

                                </div>


                                <a
                                    href="#"
                                    className="service-card__link"
                                >
                                    {service.cta}
                                    <span>←</span>
                                </a>


                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
};


export default Services;