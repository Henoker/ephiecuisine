import Image from "next/image";
import cert from "../public/images/Certificate.png";
import restview from '../public/images/ephierestaurant.jpg';
import shape3 from "../public/images/shape-3.png";

export default function About() {
    return (
        <section
  className="section about text-center"
  aria-labelledby="about-label"
  id="about"
>
  <div className="container">
    <div className="about-content">
      <p className="label-2 section-subtitle" id="about-label">
        Our Story
      </p>
      <h2 className="headline-1 section-title">Every Sauce Tells a Story</h2>
      <p className="section-text">
        Founded in 2020, EPHIE CUISINE provides a mix of authentic Ethiopian, Eritrean and Italian dishes
        and caters to all kinds of dietary preferences which include; exotic, vegan, meat lovers, vegetarian, 
        and/or gluten-free. Our cultural, historical and exotic dishes are served on large platters accompanied
        by fluffy injera bread. And if you prefer your dishes on the mild side, we can customize any dish to the 
        exact spice level that you wish. We are changing the way fremont customers eat and enjoy food.
      </p>
      <div className="contact-label">Book Through Call</div>
      <a
        href="tel:+804001234567"
        className="body-1 contact-number hover-underline"
      >
        +1 510-894-1894
      </a>
      <a href="#" className="btn btn-primary">
        <span className="text text-1">Read More</span>
        <span className="text text-2" aria-hidden="true">
          Read More
        </span>
      </a>
    </div>
    <figure className="about-banner">
        <div className="w-100">
        <Image src={restview} width={570}
        height={570} alt="about banner"/>
        </div>
        
      {/* <img
        src="./assets/images/about-banner.jpg"
        width={570}
        height={570}
        loading="lazy"
        alt="about banner"
        className="w-100"
        data-parallax-item=""
        data-parallax-speed={1}
      /> */}
      <div
        className="abs-img abs-img-1 has-before"
        data-parallax-item=""
        data-parallax-speed="1.75"
      >
         
        <Image src={cert} width={285}
        height={285} alt=""/>
        
        {/* <img
          src="./assets/images/about-abs-image.jpg"
          width={285}
          height={285}
          loading="lazy"
          alt=""
          className="w-100"
        /> */}
      </div>
      {/* <div className="abs-img abs-img-2 has-before">
        <img
          src="./assets/images/badge-2.png"
          width={133}
          height={134}
          loading="lazy"
          alt=""
        />
      </div> */}
    </figure>
    <div className="shape">
    <Image src={shape3} width={197} height={194} alt=""/>
    </div>
    
     

  </div>
</section>

    )
}