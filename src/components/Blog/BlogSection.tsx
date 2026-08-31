import "./BlogSection.css";
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
    <section className="blog-section">
      <div className="blog-section__container">
        <h1>المدونة</h1>

        <div className="blog-section__slider">
          <Swiper
            dir="rtl"
            className="blog-section__swiper"
            modules={[Mousewheel, FreeMode]}
            slidesPerView={2.5}
            spaceBetween={35}
            freeMode={{
              enabled: true,
            }}
            mousewheel={{
              forceToAxis: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              700: {
                slidesPerView: 2,
              },
              1100: {
                slidesPerView: 2.5,
              },
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <article className="blog-section__card">
                  <div className="blog-section__image-wrapper">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-section__image"
                    />
                  </div>

                  <div className="blog-section__badge">
                    <img src="/blog-icon.svg" alt="icon" />
                    <span>{blog.badge}</span>
                  </div>

                  <div className="blog-section__content">
                    <h3>{blog.title}</h3>

                    <div className="blog-section__bottom">
                      <p>{blog.description}</p>

                      <a href="#" className="blog-section__link">
                        <span>
                          <TfiArrowLeft />
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}

            <SwiperSlide>
              <div className="blog-section__transparent-box">
                <h2>أقرأ احدث المقالات</h2>

                <img
                  className="blog-section__shape-1"
                  src="/shape-1.svg"
                  alt=""
                />

                <img
                  className="blog-section__shape-2"
                  src="/shape-2.svg"
                  alt=""
                />

                <img
                  className="blog-section__shape-3"
                  src="/shape-3.svg"
                  alt=""
                />

                <img
                  className="blog-section__shape-4"
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