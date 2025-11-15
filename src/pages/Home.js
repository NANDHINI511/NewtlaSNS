import React from "react";
import { videoBanner, swiperSlides,services,companyLogos } from "../constant/Constant";
import './home.css'

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* Video Section */}
      <section>
        <div className="row w-100">
          <div className="col-lg-12 home p-0">
            <video
              src={videoBanner}
              autoPlay
              muted
              loop
              playsInline
              className="w-100"
              style={{ height: "90vh", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Swiper Section */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={true}
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
          >
            {swiperSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div style={{ position: "relative" }}>
                  <img
                    src={slide.img}
                    alt={slide.text}
                    className="w-100"
                    style={{
                      height: "400px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(0, 0, 0, 0.6)",
                      color: "#fff",
                      padding: "10px 20px",
                      borderRadius: "6px",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    {slide.text}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

<section className="py-5" style={{ background: "#f9f9f9" }}>
  <div className="container">
    <h2 className="text-center fw-bold mb-5" style={{ color: "#003366" }}>
      Our Services
    </h2>

    <div className="row g-4"> {/* g-3 = balanced gap */}
      {services.map((service) => (
        <div key={service.id} className="col-md-4"> {/* always 3 per row */}
          <div className="card service-card">
            <img src={service.img} alt={service.title} className="card-img-top" />
            <div className="card-body text-center">
              <h5 className="card-title">{service.title}</h5>
            </div>
            <div className="corner-arrow">➔</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

 <section className="py-5" style={{ background: "#f9f9f9" }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ color: "#003366" }}>
            Our Clients
          </h2>

          <div className="logo-slider">
            <div className="logo-track">
              {companyLogos.concat(companyLogos).map((logo, index) => (
                <div className="logo" key={index}>
                  <img src={logo.img} alt={`Customer Logo ${logo.id}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


 

    </>
  );
};

export default Home;
