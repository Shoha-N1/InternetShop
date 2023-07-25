import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Card.scss";
import { useNavigate } from "react-router-dom";

export default function Card({
  title,
  description,
  price,
  img1,
  img2,
  img3,
  id,
}) {
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    const product = {
      id: id,
      title: title,
      image: img1,
      count: 1,
      price: price,
    };
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex((item) => item.id === product.id);

    if (index === -1) {
      cart.push({ ...product, count: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      setAdded(true);
    } else {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      setAdded(false);
    }
  }

  function AddToCart() {
    if (added) {
      return <h3 style={{ color: "#61ff01", marginTop:"15px"}}>Added</h3>;
    } else if (!added) {
      return <h3 style={{ marginTop: "15px" }}>Add</h3>;
    }
  }


  return (
    <>
      <div className="container">
        <section className="myCard">
        
          <Swiper
            style={{ marginTop: "25px", cursor: "pointer" }}
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={2}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <img width={"100%"} height={"auto"} src={img1} alt="swiper" />
            </SwiperSlide>
            <SwiperSlide>
              <img width={"100%"} height={"auto"} src={img2} alt="swiper" />
            </SwiperSlide>
            <SwiperSlide>
              <img width={"100%"} height={"auto"} src={img3} alt="swiper" />
            </SwiperSlide>
          </Swiper>
          <div className="myCard__infos">
              <h2 className='myCard__title'>{title}</h2>
          <p className='myCard__description'>{description}</p>
          <span className='myCard__price'>{`Price: $${price}`}</span>

            <button className="btn" onClick={handleAddToCart}>
              {AddToCart()}
            </button>
            <button onClick={() => navigate("/")} className="myCard__btn--back">
              Back to Home
            </button>
          </div>
        </section>
        <section className="similar">
          <h2 className="similar__heading">SIMILAR PRODUCTS</h2>
        </section>
      </div>
    </>
  );
}
