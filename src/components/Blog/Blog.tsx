import "./Blog.css";

import blogsData from "../../helper/blog.json";
import { TfiArrowLeft } from "react-icons/tfi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";


interface BlogItem {
    id: number;
    image: string;
    badge: string;
    title: string;
    description: string;
}



const Blog = () => {


    const blogs: BlogItem[] = blogsData.blogs;



    return (

        <section className="blog">


            <div className="blog__container">


                {/* Title */}

                <h1>
                    المدونة
                </h1>



                {/* Slider */}

                <div className="blog__slider">


                    <Swiper


                        dir="rtl"

                        className="blog-swiper"

                        modules={[
                            Mousewheel,
                            FreeMode
                        ]}

                        slidesPerView={2.5}

                        spaceBetween={35}

                        freeMode={{
                            enabled: true
                        }}

                        mousewheel={{
                            forceToAxis: true
                        }}

                        breakpoints={{
                            0: {
                                slidesPerView: 1.2
                            },

                            700: {
                                slidesPerView: 2
                            },

                            1100: {
                                slidesPerView: 2.5
                            }
                        }}



                    >


                        {
                            blogs.map((blog) => (

                                <SwiperSlide key={blog.id}>


                                    <article className="blog-card">


                                        <div className="blog-card__image-wrapper">

                                            <img

                                                src={blog.image}

                                                alt={blog.title}

                                                className="blog-card__image"

                                            />

                                        </div>




                                        <div className="blog-card__badge">


                                            <img

                                                src="/blog-icon.svg"

                                                alt="icon"

                                            />


                                            <span>
                                                {blog.badge}
                                            </span>


                                        </div>





                                        <div className="blog-card__content">


                                            <h3>
                                                {blog.title}
                                            </h3>




                                            <div className="blog-card__bottom">


                                                <p>
                                                    {blog.description}
                                                </p>




                                                <a
                                                    href="#"
                                                    className="blog-card__link"
                                                >

                                                    <span>
                                                        <TfiArrowLeft />
                                                    </span>

                                                </a>


                                            </div>


                                        </div>



                                    </article>


                                </SwiperSlide>

                            ))
                        }





                        {/* Transparent Last Slide */}

                        <SwiperSlide>


                            <div className="transparnet-box">
                                <h2>أقرأ احدث المقالات</h2>

                                <img
                                    className="shape-1"
                                    src="/shape-1.svg"
                                    alt=""
                                />


                                <img
                                    className="shape-2"
                                    src="/shape-2.svg"
                                    alt=""
                                />


                                <img
                                    className="shape-3"
                                    src="/shape-3.svg"
                                    alt=""
                                />


                                <img
                                    className="shape-4"
                                    src="/shape-4.svg"
                                    alt=""
                                />


                            </div>


                        </SwiperSlide>



                    </Swiper>



                </div>



            </div>


        </section>

    );


};


export default Blog;