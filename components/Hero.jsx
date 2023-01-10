import Image from "next/image";
import Heroslide1 from "../public/images/Meatcombo.png";
import Heroslide2 from "../public/images/veggieCombofull.png";
import Heroslide3 from "../public/images/MushroomTibes.jpg";
import Heroicon from "../public/images/hero-icon.png";
import Link from "next/link";

export default function Hero() {
    return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider="">
        <li className="slider-item active" data-hero-slider-item="">
          <div className="slider-bg img-cover">
          <Image src={Heroslide1} alt="hero" width={2048} height={2048} layout="responsive" />
          </div>
          <p className="label-2 section-subtitle slider-reveal">
            Tradational &amp; Hygine
          </p>
          <h1 className="display-1 hero-title slider-reveal">
            For the love of <br />
            delicious food
          </h1>
          <p className="body-2 hero-text slider-reveal">
            Come &amp; feel the joy of our mouthwatering food
          </p>
          <Link href="#menu" className="btn btn-primary slider-reveal">
          <span className="text text-1">View Our Menu</span>
            <span className="text text-2" aria-hidden="true">
              View Our Menu
            </span>
          </Link >
          {/* <a href="#" className="btn btn-primary slider-reveal">
           
          </a> */}
        </li>
        <li className="slider-item" data-hero-slider-item="">
          <div className="slider-bg img-cover">
          <Image src={Heroslide2} width={2048} height={2048} alt="" layout="responsive" />
          </div>
          <p className="label-2 section-subtitle slider-reveal">
            delightful experience
          </p>
          <h1 className="display-1 hero-title slider-reveal">
            Flavors Inspired by <br />
            the Seasons
          </h1>
          <p className="body-2 hero-text slider-reveal">
            Come with family &amp; feel the joy of mouthwatering food
          </p>
          <a href="#" className="btn btn-primary slider-reveal">
            <span className="text text-1">View Our Menu</span>
            <span className="text text-2" aria-hidden="true">
              View Our Menu
            </span>
          </a>
        </li>
        <li className="slider-item" data-hero-slider-item="">
          <div className="slider-bg">
          <Image src={Heroslide3} width={2048} height={2048} alt="" layout="responsive" />
          </div>
          <p className="label-2 section-subtitle slider-reveal">
            amazing &amp; delicious
          </p>
          <h1 className="display-1 hero-title slider-reveal">
            Where every flavor <br />
            tells a story
          </h1>
          <p className="body-2 hero-text slider-reveal">
            Come &amp; feel the joy of our mouthwatering food
          </p>
          <a href="#" className="btn btn-primary slider-reveal">
            <span className="text text-1">View Our Menu</span>
            <span className="text text-2" aria-hidden="true">
              View Our Menu
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
      <a href="#" className="hero-btn has-after">
      <Image src={Heroicon} width={48} height={48} alt="booking icon" />
        <span className="label-2 text-center span">Book A Table</span>
      </a>
    </section>
 

    )
}