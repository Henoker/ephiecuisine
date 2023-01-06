import logo from "../public/images/logo.png";
import Image from 'next/image'

export default function Footer() {
    return (
        <footer
  className="footer section has-bg-image text-center"
  style={{ backgroundImage: 'url("images/footerbasketreal.JPG")' }}
>
  <div className="container">
    <div className="footer-top grid-list">
      <div className="footer-brand has-before has-after"
         style={{ backgroundImage: 'url("images/footer-bg-mine1.png")' }}
        >
        <a href="#" className="logo">
        <Image src={logo} width={160} height={50} alt="Grilli - Home" />
         
        </a>
        <address className="body-4">
          488 Mowry Ave Fremont, CA 94536
        </address>
        <a href="mailto:ephesonbeyene@gmail.com" className="body-4 contact-link">
        ephesonbeyene@gmail.com
        </a>
        <a href="tel:+1 510-894-1894" className="body-4 contact-link">
          Booking Request :  +1 510-894-1894
        </a>
        <p className="body-4">Open : 11:00 am - 8:00 pm</p>
        <div className="wrapper">
          <div className="separator" />
          <div className="separator" />
          <div className="separator" />
        </div>
        <p className="title-1">Learn the secret Of our cooking</p>
        <p className="label-1">
          Subscribe to our; <span className="span">youtube channel.</span>
        </p>
        {/* <form action="" className="input-wrapper">
          <div className="icon-wrapper">
            <input
              type="email"
              name="email_address"
              autoComplete="off"
              className="input-field"
              disabled
            />
          </div> */}
         
        {/* </form> */}
      </div>
      <ul className="footer-list">
        <li>
          <a href="#" className="label-2 footer-link hover-underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="label-2 footer-link hover-underline">
            Menus
          </a>
        </li>
        <li>
          <a href="#" className="label-2 footer-link hover-underline">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="label-2 footer-link hover-underline">
            Our Chefs
          </a>
        </li>
        <li>
          <a href="#" className="label-2 footer-link hover-underline">
            Contact
          </a>
        </li>
      </ul>
      <ul className="footer-list">
        <li>
          <a href="#" className="label-2 footer-link hover-underline">
            Facebook
          </a>
        </li>
        <li>
          <a href="#" className="label-2 footer-link hover-underline">
            Instagram
          </a>
        </li>
        <li>
          <a href="#" className="label-2 footer-link hover-underline">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@EphieBrettKitchen" className="label-2 footer-link hover-underline">
            Youtube
          </a>
        </li>
        <li>
          <a href="https://www.google.com/maps/place/488+Mowry+Ave,+Fremont,+CA+94536,+USA/@37.567482,-121.9743387,17z/data=!3m1!4b1!4m5!3m4!1s0x808fc060ef6cb825:0x7aa610fe6802b389!8m2!3d37.567482!4d-121.97215" className="label-2 footer-link hover-underline">
            Google Map
          </a>
        </li>
      </ul>
    </div>
    <div className="footer-bottom">
      <p className="copyright">
        © 2022 EphieCuisine All Rights Reserved |         
      </p>
    </div>
  </div>
</footer>
    )
}