import Image from "next/image";
import MeatCombo from "../public/images/Meatcombo.png";
import PenneMarinara from "../public/images/PenneMarinara.png";
import redlentil from "../public/images/redlentil.png";
import Pastaham from "../public/images/pastaham.png";
import Mushroombites from "../public/images/MushroomTibes.jpg";
import CaeserSalad from "../public/images/CaeserSalad.jpg";


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
                  <span className="span title-2">$17.00</span>
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
         <Image src={PenneMarinara} width={100} height={100} alt="Penne Marinara"/>
                </div>
              </figure>
              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">
                      Penne Marinara
                    </a>
                  </h3>
                  <span className="span title-2">$16.00</span>
                </div>
                <p className="card-text label-1">
                penne pasta, marinara, caramelized peppers and onions and garlic
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
                      Mushroom Bites
                    </a>
                  </h3>
                  <span className="span title-2">$14.00</span>
                </div>
                <p className="card-text label-1">
                  Ethiopian spice includes onion ,tomato, garlic, and ginger
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
                       Caeser Salad
                    </a>
                  </h3>
                  <span className="span title-2">$9.00</span>
                </div>
                <p className="card-text label-1">
                  salad with Romain, croton, shaved parmesan cheese
                </p>
              </div>
            </div>
          </li>
        </ul>
        <p className="menu-text text-center">
          Open daily from <span className="span">10:00 am</span> to{" "}
          <span className="span">10:00 pm</span>
        </p>
        <a href="Menu.pdf" download="Menu.PDF" className="btn btn-primary">
          <span className="text text-1">View All Menu</span>
          <span className="text text-2" aria-hidden="true">
            View All Menu
          </span>
        </a>
       
      </div>
    </section>
    

    )
}