import Image from "next/image";
import specialdishbanner from "../public/images/veggieCombofull.png";
export default function SpecialDish() {
    return (
        <section className="special-dish text-center" aria-labelledby="dish-label">
  <div className="special-dish-banner">
    <div className="img-cover">
         <Image src={specialdishbanner} width={940} height={960} alt="special dish"/>
    </div>
    
    {/* <img
      src="./assets/images/special-dish-banner.jpg"
      width={940}
      height={900}
      loading="lazy"
      alt="special dish"
      className="img-cover"
    /> */}
  </div>
  <div className="special-dish-content bg-black-10">
    <div className="container">
      <img
        src="./assets/images/badge-1.png"
        width={28}
        height={41}
        loading="lazy"
        alt="badge"
        className="abs-img"
      />
      <p className="section-subtitle label-2">Special Dish</p>
      <h2 className="headline-1 section-title">Lobster Tortellini</h2>
      <p className="section-text">
        Thoroughly enjoy and savour every mouthful of our 
        strictly vegeterian dishes. This dish is all naturally made
        with healthy, whole food ingredients. You will get at least five 
        different Ethiopian dishes. 
      </p>
      <div className="wrapper">
        <del className="del body-3">$40.00</del>
        <span className="span body-1">$20.00</span>
      </div>
      <a href="#" className="btn btn-primary">
      <a href="Menu.pdf" download="Menu.PDF" className="btn-text hover-underline label-2">
      <span className="text text-1"> View All Menu</span>
        </a>
       
        {/* <span className="text text-2" aria-hidden="true">
          View All Menu
        </span> */}
      </a>
    </div>
  </div>

</section>

    )
}