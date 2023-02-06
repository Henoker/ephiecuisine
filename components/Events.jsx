import Image from "next/image";
import event1 from "../public/images/event5v.jpg";
import event2 from "../public/images/event8v.jpg";
import event3 from "../public/images/event6v.jpg";


export default function Events() {
    return (
        <section className="section event bg-black-10" aria-label="event">
  <div className="container">
    <p className="section-subtitle label-2 text-center">Recent Updates</p>
    <h2 className="section-title headline-1 text-center">Upcoming Event</h2>
    <ul className="grid-list">
      <li>
        <div className="event-card has-before hover:shine">
          <div className="card-banner img-holder">
            <div className="img-cover">
            <Image src={event1} alt="event" uality={100}
           fill
           sizes="100vw"
           style={{objectFit: 'cover',}}/>
            </div>
            
            
            {/* <img
              src="./assets/images/event-1.jpg"
              width={350}
              height={450}
              loading="lazy"
              alt="Flavour so good you’ll try to eat with your eyes."
              className="img-cover"
            /> */}
            <time className="publish-date label-2" dateTime="2022-09-15">
              14/02/2023
            </time>
          </div>
          <div className="card-content">
            <p className="card-subtitle label-2 text-center">Valentine, Day</p>
            <h3 className="card-title title-2 text-center">
              Eat with your Heart.
            </h3>
          </div>
        </div>
      </li>
      <li>
        <div className="event-card has-before hover:shine">
          <div className="card-banner img-holder">
          <div className="img-cover">
          <Image src={event2} alt="event" uality={100}
           fill
           sizes="100vw"
           style={{objectFit: 'cover',}}/>
            </div>
            {/* <img
              src="./assets/images/event-2.jpg"
              width={350}
              height={450}
              loading="lazy"
              alt="Flavour so good you’ll try to eat with your eyes."
              className="img-cover"
            /> */}
            <time className="publish-date label-2" dateTime="2022-09-08">
            14/02/2023
            </time>
          </div>
          <div className="card-content">
            <p className="card-subtitle label-2 text-center">Catered For Love</p>
            <h3 className="card-title title-2 text-center">
            Happy Place For A Happy Heart
            </h3>
          </div>
        </div>
      </li>
      <li>
        <div className="event-card has-before hover:shine">
          <div className="card-banner img-holder">
            {/* <img
              src="./assets/images/event-3.jpg"
              width={350}
              height={450}
              loading="lazy"
              alt="Flavour so good you’ll try to eat with your eyes."
              className="img-cover"
            /> */}
            <div className="img-cover">
            <Image src={event3} alt="event" quality={100}
           fill
           sizes="100vw"
           style={{objectFit: 'cover',}}/>
            </div>
            <time className="publish-date label-2" dateTime="2022-09-03">
            14/02/2023
            </time>
          </div>
          <div className="card-content">
            <p className="card-subtitle label-2 text-center">The Affordable Love</p>
            <h3 className="card-title title-2 text-center">
            Catered For Love, Dine with Us This Valentine’s Day.
            </h3>
          </div>
        </div>
      </li>
    </ul>
    <a href="#contact" className="btn btn-primary">
      <span className="text text-1">Book A Table</span>
      <span className="text text-2" aria-hidden="true">
        Book A Table
      </span>
    </a>
  </div>
</section>

    )
}