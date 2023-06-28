import Image from "next/image";
import Heroslide1 from "../public/images/Meatcombo.png";
import Heroslide2 from "../public/images/veggieCombofull.png";
import Heroslide3 from "../public/images/MushroomTibes.jpg";
import Heroslide4 from "../public/images/workplaces.jpg";
import Heroslide5 from "../public/images/familykids.jpg";
import Heroslide6 from "../public/images/cateringcart.jpg";
import Heroicon from "../public/images/hero-icon.png";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Hero() {
    return (
    <section className="hero text-center" aria-label="home" id="home">
      {/* <video
					className="slider-bg"
					src="/images/ephie2.mp4"
					muted
					playsInline
					autoPlay
					loop
				/>  */}

{/* <div className="hero-slider">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="slider-item">
          <SwiperSlide >
          <Image src={Heroslide1} alt="hero" quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }} />
          </SwiperSlide>
        </div>
        <div className="slider-item">
          <SwiperSlide  >
          <Image src={Heroslide2} alt="hero" quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }} />
          </SwiperSlide>
        </div>
        <div className="slider-item">
          <SwiperSlide  >
          <Image src={Heroslide3} alt="hero" quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }} />
          </SwiperSlide>
        </div>
      </Swiper>
    </div> */}

      <ul className="hero-slider" data-hero-slider=""> 
         <li className="slider-item active" data-hero-slider-item="">
          <div className="slider-bg img-cover">
          <Image src={Heroslide1} 
          quality={100}
          fill
          sizes="100vw"
          style={{objectFit: 'cover',}}
          alt="heroslide1"
          />
          </div>
          <p className="label-2 section-subtitle slider-reveal">
            Tradational &amp; Hygine
          </p>
          <h1 className="display-1 hero-title slider-reveal">
            For the love of <br />
            healthy food
          </h1>
          <p className="body-2 hero-text slider-reveal">
           Feel the joy of Ethiopian food
          </p>
          <a href="#menu" className="btn btn-primary slider-reveal">
            <span className="text text-1">View Our Menu</span>
            <span className="text text-2" aria-hidden="true">
              View Our Menu
            </span>
          </a>
        </li>
        <li className="slider-item" data-hero-slider-item="">
          <div className="slider-bg img-cover">
          <Image src={Heroslide2} 
          quality={100}
          fill
          sizes="100vw"
          style={{objectFit: 'cover',}}
          alt="heroslide2"
          />
          </div>
          <p className="label-2 section-subtitle slider-reveal">
            delightful experience
          </p>
          <h1 className="display-1 hero-title slider-reveal">
            Eat Tasty Eat Healthy
          </h1>
          <p className="body-2 hero-text slider-reveal">
            Food for your senses
          </p>
          <a href="#menu" className="btn btn-primary slider-reveal">
            <span className="text text-1">View Our Menu</span>
            <span className="text text-2" aria-hidden="true">
              View Our Menu
            </span>
          </a>
        </li>
        <li className="slider-item" data-hero-slider-item="">
          <div className="slider-bg">
          <Image src={Heroslide3} 
           quality={100}
           fill
           sizes="100vw"
           style={{objectFit: 'cover',}}
           alt="heroslide3"
           />
          </div>
          <p className="label-2 section-subtitle slider-reveal">
            amazing &amp; delicious
          </p>
          <h1 className="display-1 hero-title slider-reveal">
            Where every spice <br />
            tells a story
          </h1>
          <p className="body-2 hero-text slider-reveal">
            Enjoy our gluten-free foods
          </p>
          <a href="#menu" className="btn btn-primary slider-reveal">
            <span className="text text-1">View Our Menu</span>
            <span className="text text-2" aria-hidden="true">
              View Our Menu
            </span>
          </a>
        </li>
        {/* <li className="slider-item" data-hero-slider-item="">
          <div className="slider-bg">
          <Image src={Heroslide4} 
           quality={100}
           fill
           sizes="100vw"
           style={{objectFit: 'cover',}}
           alt="heroslide2"
           />
          </div>
          <p className="label-2 section-subtitle slider-reveal">
            amazing &amp; delicious
          </p>
          <h1 className="display-1 hero-title slider-reveal">
            A place for your <br />
            social gathering
          </h1>
          <p className="body-2 hero-text slider-reveal">
            Come with your collegues
          </p>
          <a href="#contact" className="btn btn-primary slider-reveal">
            <span className="text text-1">Book a Table</span>
            <span className="text text-2" aria-hidden="true">
              Book a Table
            </span>
          </a>
        </li> */}
        {/* <li className="slider-item" data-hero-slider-item="">
          <div className="slider-bg">
          <Image src={Heroslide5} 
           quality={100}
           fill
           sizes="100vw"
           style={{objectFit: 'cover',}}
           alt="heroslide2"
           />
          
          </div>
          <p className="label-2 section-subtitle slider-reveal">
            amazing &amp; delicious
          </p>
          <h1 className="display-1 hero-title slider-reveal">
            A place for happy <br />
            family meal
          </h1>
          <p className="body-2 hero-text slider-reveal">
            Come with your family
          </p>
          <a href="#contact" className="btn btn-primary slider-reveal">
            <span className="text text-1">Book a Table</span>
            <span className="text text-2" aria-hidden="true">
              Book a Table
            </span>
          </a>
        </li> */}
        <li className="slider-item" data-hero-slider-item="">
          <div className="slider-bg">
          <Image src={Heroslide6} 
           quality={100}
           fill
           sizes="100vw"
           style={{objectFit: 'cover',}}
           alt="heroslide6"
           />
          </div>
          <p className="label-2 section-subtitle slider-reveal">
            amazing &amp; delicious
          </p>
          <h1 className="display-1 hero-title slider-reveal">
           We provide reliable <br />
            catering Services
          </h1>
          <p className="body-2 hero-text slider-reveal">
            Order our Service
          </p>
          <a href="#contact" className="btn btn-primary slider-reveal">
            <span className="text text-1">Contact Us</span>
            <span className="text text-2" aria-hidden="true">
              Contact Us
            </span>
          </a>
        </li>
        
      </ul>
      <button
        className="slider-btn prev"
        aria-label="slide to previous"
        data-prev-btn=""
      >
        <ion-icon name="chevron-back" />
      </button>
      <button
        className="slider-btn next"
        aria-label="slide to next"
        data-next-btn=""
      >
        <ion-icon name="chevron-forward" />
      </button>
      <a href="#menu" className="hero-btn has-after">
      <Image src={Heroicon} width={48} height={48} alt="booking icon" />
        <span className="label-2 text-center span">Book A Table</span>
      </a> 
    </section>
 

    )
}