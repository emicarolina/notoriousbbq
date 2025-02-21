import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./BurgerCarousel.module.css";

import classicburger from "../../assets/Images/classicburger.webp";
import beat2 from "../../assets/Images/smashbeat2.webp";
import beat3 from "../../assets/Images/smashbeat3.webp";
import blessedburger from "../../assets/Images/blessedburger.webp";
import bigburgeat from "../../assets/Images/bigburgeat.webp";
import smashsalad from "../../assets/Images/smashsalad.webp";
import brtburger from "../../assets/Images/brtburger.webp";
import beansblessed from "../../assets/Images/beansblessed.webp";
import beanssalad from "../../assets/Images/beanssalad.webp";

const burgers = [
  { name: "Classic Burger", image: classicburger },
  { name: "Smash Beat 2", image: beat2 },
  { name: "Smash Beat 3", image: beat3 },
  { name: "Blessed Burger", image: blessedburger },
  { name: "Big Burgeat", image: bigburgeat },
  { name: "Smash Salad", image: smashsalad },

  { name: "BRT Burger", image: brtburger },
  { name: "Beans Blessed", image: beansblessed },
  { name: "Beans Salad", image: beanssalad },
];

const BurgerCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3}
        spaceBetween={30}
        grabCursor={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        {burgers.map((burger, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <img
              src={burger.image}
              alt={burger.name}
              className={styles.burgerImage}
            />
            <p className={styles.burgerName}>{burger.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BurgerCarousel;
