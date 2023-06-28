import logo from "../public/images/logo.png";
import Image from 'next/image'
import Link from "next/link";

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
        <Link href="#home" className="logo">
        <Image src={logo} width={160} height={50} alt="Grilli - Home" />
         
        </Link>
        {/* <address className="body-4">
          488 Mowry Ave Fremont, CA 94536
        </address> */}
        <a href="mailto:ephieethiopiankitchen@gmail.com" className="body-4 contact-link">
        ephieethiopiankitchen@gmail.com
        </a>
        <a href="tel:+1 510-894-1894" className="body-4 contact-link">
          Order Request :  +1 510-894-1894
        </a>
        {/* <p className="body-4">Open : 4:00 pm - 8:00 pm</p> */}
        <div className="wrapper">
          <div className="separator" />
          <div className="separator" />
          <div className="separator" />
        </div>
        <p className="title-1">Learn the secret Of our cooking</p>
        <p className="label-1">
          Subscribe to our; 
          
       <Link href="https://www.youtube.com/@EphieBrettKitchen">
        <span className="span">
        Youtube channel
        </span> 
        </Link> 
         
        </p>
        
      </div>
      <ul className="footer-list">
        <li>
          <Link href="#home" className="label-2 footer-link hover-underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="#menu" className="label-2 footer-link hover-underline">
            Menus
          </Link>
        </li>
        <li>
          <Link href="#about" className="label-2 footer-link hover-underline">
            About Us
          </Link>
        </li>
        <li>
          <Link href="#contact" className="label-2 footer-link hover-underline">
           Contact
          </Link>
        </li>
      </ul>
      <ul className="footer-list">
        <li>
          <a href="https://www.grubhub.com/restaurant/ephie-ethiopian-kitchen-488-mowry-ave-fremont/2377689" className="label-2 footer-link hover-underline">
            GrubHub
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ephiecuisine" className="label-2 footer-link hover-underline">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.ubereats.com/store/ephie-ethiopian-kitchen/90iRW742QPqH9tf3r3GIuw" className="label-2 footer-link hover-underline">
            UberEats
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@EphieBrettKitchen" className="label-2 footer-link hover-underline">
            Youtube
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