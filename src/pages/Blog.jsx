import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import heroImg from "../assets/images/post-img.jpg";
import { Link } from "react-router-dom";
// BLOG IMAGES
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";
import blog4 from "../assets/images/blog4.jpg";
import blog5 from "../assets/images/blog5.jpg";
import blog6 from "../assets/images/blog6.jpg";

// AUTHOR IMAGES
import post1 from "../assets/images/post-avatar1.jpg";
import post2 from "../assets/images/post-avatar2.jpg";
import post3 from "../assets/images/post-avatar3.jpg";
import post4 from "../assets/images/post-avatar4.jpg";

// SIDEBAR IMAGES
import thumb1 from "../assets/images/media-thumb1.jpg";
import thumb2 from "../assets/images/media-thumb2.jpg";
import thumb3 from "../assets/images/media-thumb3.jpg";
import thumb4 from "../assets/images/media-thumb4.jpg";
import "../styles/blog.css"

function Blog () {
const blogs = [
    {img: blog1, title:"Freeze Concern Hits Wheat Farms", author:"John Wilson", date:"Jan 15, 2019", avatar:post1},
    {img: blog2, title:"National Association of Wheat Growers", author:"Richard Miller", date:"Jan 13, 2019", avatar:post2},
    {img: blog3, title:"Farmer Sentiment Darkens Hopes Fade", author:"Lisa Smith", date:"Jan 12, 2019", avatar:post3},
    {img: blog4, title:"Rural Infrastructure for Agriculture", author:"Alex Jones", date:"Jan 10, 2019", avatar:post4},
    {img: blog5, title:"3 Ways Consumer Trends Impact Your Farm", author:"Martha Smith", date:"Jan 10, 2019", avatar:post1},
    {img: blog6, title:"Are You Prepared for the Storm Season", author:"Martha Smith", date:"Jan 10, 2019", avatar:post2}
  ];
  return (
    <>
      <div>
        <Header />

        <Hero title="Our Blog" subtitle="Blog" bgImage={heroImg} />

 <section className="blog-sec-two">
      <div className="container">
        <div className="row">

          {/* LEFT BLOG */}
          <div className="col-lg-9 col-12">
            {blogs.map((item, i) => (
              <div className="blog-card mt-lg-5 mt-4" key={i}>
                <figure>
                  <img src={item.img} className="blog-card-img" alt="blog"/>
                </figure>

                <div className="blog-content">
                  <h4 className="blog-title">{item.title}</h4>

                  <p className="blog-desc">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                  </p>

                  <div className="blog-author">
                    <img src={item.avatar} alt="author"/>
                    <div className="ms-3">
                      <h5>{item.author}</h5>
                      <p>{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-3 col-12 mt-lg-0 mt-4">
            <div className="blog-right-sec">

              {/* CATEGORY */}
              <h3 className="sidebar-title">Categories</h3>
              <ul className="category-list">
                <li><Link>Agriculture</Link><span>12</span></li>
                <li><Link>Organic</Link><span>16</span></li>
                <li><Link>Vegetables</Link><span>13</span></li>
                <li><Link>Natural Food</Link><span>10</span></li>
              </ul>

              {/* RELATED */}
              <h3 className="sidebar-title mt-5">Related Posts</h3>

              {[ 
                {img:thumb1, title:"Corn Planters Need a Raincoat"},
                {img:thumb2, title:"Process for Sourcing Food"},
                {img:thumb3, title:"Tillable Introduces Hassle-Free"},
                {img:thumb4, title:"Believing Agriculture's Future"}
              ].map((item,i)=>(
                <div className="related-post" key={i}>
                  <img src={item.img} alt="thumb"/>
                  <div>
                    <p>{item.title}</p>
                    <span>Jan 2025</span>
                  </div>
                </div>
              ))}

              {/* TAGS */}
              <h3 className="sidebar-title mt-4">Tags</h3>
              <div className="tags">
                {["farm","organic","agriculture","wheat","fruits","natural"].map((tag,i)=>(
                  <Link key={i}>{tag}</Link>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

        <ContactForm />

        <Footer />
      </div>
    </>
  );
}

export default Blog;