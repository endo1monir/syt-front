import { TfiArrowLeft } from "react-icons/tfi";
import blogsData from "../../helper/blog.json";
import "./Blog.css";
import Footer from "../../components/Footer/Footer";
import DarkNavBar from "../../components/NavBar/DarkNavBar/DarkNavBar";

interface BlogItem {
  id: number;
  image: string;
  badge: string;
  title: string;
  description: string;
}

export default function Blog() {
  const blogs: BlogItem[] = blogsData.blogs;

  return (
    <div className="dark-theme">
      <DarkNavBar />

      {/*  START OF BLOG SECTION */}
      <section className="blog">
        <div className="blog__container">
          <h1>المدونة</h1>

          <div className="blog__grid">
            {blogs.map((blog) => (
              <article className="blog-card" key={blog.id}>
                <div className="blog-card__image-wrapper">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-card__image"
                  />
                </div>

                <div className="blog-card__badge">
                  <img src="/blog-icon.svg" alt="icon" />
                  <span>{blog.badge}</span>
                </div>

                <div className="blog-card__content">
                  <h3>{blog.title}</h3>

                  <div className="blog-card__bottom">
                    <p>{blog.description}</p>

                    <a href="#" className="blog-card__link">
                      <span>
                        <TfiArrowLeft />
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <Footer />
      </footer>
    </div >
  );
}