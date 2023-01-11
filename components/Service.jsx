import Image from "next/image";
import service2 from "../public/images/toffuethio.png";
import service3 from "../public/images/Ephiegarlic.jpg";
import service4 from "../public/images/wine.jpg";
import shape from "../public/images/tiletc.png";

export default function Service() {
    return (
        <section
    className="section service bg-black-10 text-center"
    aria-label="service"
  >
    <div className="container">
      <p className="section-subtitle label-2">Real. Fresh. Food.</p>
      <h2 className="headline-1 section-title">Creativity is always on our menu.</h2>
      <p className="section-text">
        Come for a drink, stay for a meal. We provide both traditional and modern 
        cuisine options on our menu. 
      </p>
      <ul className="grid-list">
  <li>
    <div className="service-card">
    <a href="#" className="has-before hover:shine">
  <figure
    className="card-banner img-holder"
    style={{ width: 285, height: 286 }}
  >
    <div className="img-cover">
      <Image src={service2} width={285} height={836} object-fit="cover" alt="appetizers"/>
    </div>
  </figure>
</a>
      <div className="card-content">
        <h3 className="title-4 card-title">
          <a href="#">Lunch/Dinner</a>
        </h3>
        <a href="Menu.pdf" download="Menu.PDF" className="btn-text hover-underline label-2">
          View Menu
        </a>
      </div>
    </div>
  </li>
  <li>
    <div className="service-card">
    <a href="#" className="has-before hover:shine">
  <figure
    className="card-banner img-holder"
    style={{ width: 285, height: 186 }}
  >
    <div className="img-cover">
      <Image src={service3} width="285" height="286" object-fit="cover" alt="appetizers"/>
    </div>
  </figure>
</a>
      <div className="card-content">
        <h3 className="title-4 card-title">
          <a href="#">Appetizers</a>
        </h3>
        <a href="Menu.pdf" download="Menu.PDF" className="btn-text hover-underline label-2">
          View Menu
        </a>
      </div>
    </div>
  </li>
  <li>
    <div className="service-card">
    <a href="#" className="has-before hover:shine">
  <figure
    className="card-banner img-holder"
    style={{ width: 285, height: 386 }}
  >
    <div className="img-cover">
      <Image src={service4} width="285" height="286" object-fit="cover" alt="appetizers"/>
    </div>
  </figure>
</a>
      <div className="card-content">
        <h3 className="title-4 card-title">
          <a href="#">Drinks</a>
        </h3>
        <a href="Menu.pdf" download="Menu.PDF" className="btn-text hover-underline label-2">
          View Menu
        </a>
      </div>
    </div>
  </li>
</ul>

      {/* <img
        src="./assets/images/shape-1.png"
        width={246}
        height={412}
        loading="lazy"
        alt="shape"
        className="shape shape-1 move-anim"
      />
      <img
        src="./assets/images/shape-2.png"
        width={343}
        height={345}
        loading="lazy"
        alt="shape"
        className="shape shape-2 move-anim"
      /> */}
         <Image className="shape shape-1 move-anim" src={shape} alt="shape"/>
    </div>
  </section>
    )
}