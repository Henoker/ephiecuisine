import Image from "next/image";
import MeatCombo from "../public/images/Meatcombo.png";
import PenneMarinara from "../public/images/chikenalfredo.jpg";
import redlentil from "../public/images/redlentil.png";
import Pastaham from "../public/images/spagettimeatball.jpg";
import Mushroombites from "../public/images/veggieCombofull1.jpg";
import CaeserSalad from "../public/images/ChickenPesto.jpg";
import shape from "../public/images/kettleart.png";


export default function Menu() {
    return (
      <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">Special Selection</p>
        <h2 className="headline-1 section-title text-center">Delicious Menu</h2>
        <ul className="grid-list">
          <li>
            <div className="menu-card hover:card">
              <figure className="card-banner img-holder">
              <div className="img-cover">
         <Image src={MeatCombo} width={100} height={100} alt="meat combo"/>
                </div>
              </figure>
              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">
                      Meat Combo
                    </a>
                  </h3>
                  <span className="span title-2">$17.99</span>
                </div>
                <p className="card-text label-1">
                Meat dish with beef, lamb alicha, chicken wot and collard
                green
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card hover:card">
              <figure className="card-banner img-holder">
              <div className="img-cover">
         <Image src={PenneMarinara} width={100} height={100} alt="chicken alfredo"/>
                </div>
              </figure>
              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">
                      Chicken Alfredo
                    </a>
                  </h3>
                  <span className="span title-2">$14.00</span>
                </div>
                <p className="card-text label-1">
                chicken breasts, Fettuccine pasta, Heavy cream, caramelized peppers and onions and garlic
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card hover:card">
              <figure className="card-banner img-holder">
              <div className="img-cover">
         <Image src={redlentil} width={100} height={100} alt="red lentil"/>
                </div>
              </figure>
              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">
                      Red Lentil
                    </a>
                  </h3>
                  <span className="span title-2">$14.00</span>
                </div>
                <p className="card-text label-1">
                Cooked with ethiopian spice includes onion, tomato, garlic
                and ginger.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card hover:card">
              <figure className="card-banner img-holder">
              <div className="img-cover">
         <Image src={Pastaham} width={100} height={100} alt="Spaghetti Meatball"/>
                </div>
              </figure>
              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">
                    Spaghetti Meatball
                    </a>
                  </h3>
                  
                  <span className="span title-2">$15.00</span>
                </div>
                <p className="card-text label-1">
                Fresh pomodoro sauce, olive-oil, rosemary meatballs
                garnished with parmesan cheese
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card hover:card">
              <figure className="card-banner img-holder">
              <div className="img-cover">
         <Image src={Mushroombites} width={100} height={100} alt="Mushroom Bites"/>
                </div>
              </figure>
              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">
                      Veggie Combo
                    </a>
                  </h3>
                  <span className="span title-2">$17.99</span>
                </div>
                <p className="card-text label-1">
                  Red lentil, Yellow Lentil, Collard Green, cabage
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card hover:card">
              <figure className="card-banner img-holder">
              <div className="img-cover">
         <Image src={CaeserSalad} width={100} height={100} alt="Caeser Salad"/>
                </div>
              </figure>
              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">
                       Chicken Pesto penne green
                    </a>
                  </h3>
                  <span className="span title-2">$15.00</span>
                </div>
                <p className="card-text label-1">
                chicken breast, penne pasta, greens
                </p>
              </div>
            </div>
          </li>
        </ul>
        <a href="https://order.online/store/ephie's-ethiopian-kitchen-(mowry-ave)-fremont-1187321/?delivery=true&hideModal=true" target="_blank" className="btn btn-primary" rel="noreferrer">
          <span className="text text-1">View All Menu</span>
          <span className="text text-2" aria-hidden="true">
            View All Menu
          </span>
        </a>

        <Image className="shape shape-3 move-anim" style={{
      backgroundImage: `url(${shape.src})`
    }} alt="shape" src={shape}/>
       
      </div>
    </section>
    

    )
}