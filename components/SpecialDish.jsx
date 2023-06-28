import Image from "next/image";
import specialdishbanner from "../public/images/veggieCombofull.png";
import badge from "../public/images/tiletc5.png";

export default function SpecialDish() {
    return (
        <section className="special-dish text-center" aria-labelledby="dish-label">
  <div className="special-dish-banner bg-black-10">
    <div className="img-cover">
         <Image src={specialdishbanner} alt="special dish" layout="responsive"/>
    </div>
  </div>
  <div className="special-dish-content bg-black-10">
    <div className="container">
    <Image className="abs-img" src={badge} alt="badge"/>
     <p className="section-subtitle label-2">Special Dish</p>
      <h2 className="headline-1 section-title">Veggie Combo</h2>
      <p className="section-text">
        Thoroughly enjoy and savour every mouthful of our 
        strictly vegeterian dishes. This dish is all naturally made
        with healthy, whole food ingredients. You will get at least five 
        different Ethiopian dishes. 
      </p>
      <div className="wrapper">
        <span className="span body-1">$17.99</span>
      </div>
      <a href="https://order.online/store/ephie's-ethiopian-kitchen-(mowry-ave)-fremont-1187321/?delivery=true&hideModal=true" target="_blank" className="btn btn-primary" rel="noreferrer">
         <span className="text text-1">View All Menu</span>
         <span className="text text-2" aria-hidden="true">
          View All Menu
        </span>
      </a>
    </div>
  </div>
  
</section>

    )
}