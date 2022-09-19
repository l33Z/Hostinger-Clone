import { useState, useEffect } from "react";
import "./testimonial.css";
import user1 from "../assets/79.jpg";
import user2 from "../assets/19.jpg";
import user3 from "../assets/thapa.jpg";
import user4 from "../assets/63.jpg";
import user5 from "../assets/30.jpg";
import user6 from "../assets/2.jpg";
import man from "../assets/man.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const Testimonial = () => {
  const [slidePerViewCount, setSlidePerViewCount] = useState(3);

  const Upadate = () => {
    if (window.innerWidth < 1234 && window.innerWidth > 900) {
      setSlidePerViewCount(2);
    } else if (window.innerWidth < 900) {
      setSlidePerViewCount(1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", Upadate);
    return () => window.removeEventListener("resize", Upadate);
  });
  useEffect(() => {
    Upadate();
  }, []);

  return (
    <>
      <div className="TesttimonialMain">
        <h1>Hosting Services Trusted by Thousands ⭐</h1>
        <Swiper
          slidesPerView={slidePerViewCount}
          spaceBetween={30}
          slidesPerGroup={slidePerViewCount}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="testimonials"
        >
          <SwiperSlide>
            <div className="testimonialBox">
              <img src={user1} alt="user" id="userImg" />
              <div className="content">
                <h2> Smooth experience</h2>
                <h3>
                  Hostinger Team is doing good job, their products and price is
                  satisfactory
                </h3>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <p className="userName"> - Cynthia J. Brunner</p>
                <i className="fa-solid fa-quote-left"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonialBox">
              <img src={user2} alt="user" id="userImg" />
              <div className="content">
                <h2> Superior Service</h2>
                <h3>
                  I love the service and It is very dependable and not
                  expensive.
                </h3>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <p className="userName"> - David L. Carpenter</p>
                <i className="fa-solid fa-quote-left"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonialBox">
              <img src={user3} alt="user" id="userImg" />
              <div className="content">
                <h2> Hostinger is great webhost</h2>
                <h3>
                  Hostinger is great webhost , with many options and solutions.
                </h3>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="userName"> - Thapa Technical</p>
                <i className="fa-solid fa-quote-left"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonialBox">
              <img src={user4} alt="user" id="userImg" />
              <div className="content">
                <h2> Amazing service</h2>
                <h3>Amazing service, easy to use for beginners also-Move it</h3>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <p className="userName"> - Charlene R. Ault</p>
                <i className="fa-solid fa-quote-left"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonialBox">
              <img src={user5} alt="user" id="userImg" />
              <div className="content">
                <h2> Very helpful customer care</h2>
                <h3>
                  Very helpful customer care. They're informed and know their
                  work.
                </h3>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="userName"> - Wayne A. Yarbrough</p>
                <i className="fa-solid fa-quote-left"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonialBox">
              <img src={user6} alt="user" id="userImg" />
              <div className="content">
                <h2> Amazing service</h2>
                <h3>
                  Amazing service, easy to use for beginners also , i love it
                </h3>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="userName"> - Fen Hsueh</p>
                <i className="fa-solid fa-quote-left"></i>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="cloudHosting">
          <div className="leftSideCloud">
            <img
              src={man}
              alt="cloud"
              data-aos="fade-up-right"
              data-aos-duration="600"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
            />
          </div>
          <div className="rightSideCloud">
            <h2>
              Need More Power? Try <br /> Cloud Hosting
            </h2>
            <a href="https://www.hostinger.in/cloud-hosting" target="_blank">
              <button id="Cloudplans">See all plans</button>
            </a>
            <div className="guarantee">
              <h2>30-Day Money-Back Guarantee</h2>
              <h3>
                We'll refund your payment if you’re not 100% satisfied with
                Hostinger. No hassle, no risk.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
