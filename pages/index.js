import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import logo from "../public/images/logo.svg";
import Script from 'next/script';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Layout from '../components/Layout';
import About from '../components/About';
import SpecialDish from '../components/SpecialDish';
import Menu from '../components/Menu';
import Service from '../components/Service';
import Contact from '../components/Contact';
import Reservation from '../components/Testimonial';
import Testimonial from '../components/Testimonial';



export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ephie Cuisine</title>
        <meta name="description" content="Ethiopian Restaurant in Fremont CA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        <article>
          <Hero/>
          <About/>
          <Service/>
          <SpecialDish/>
          <Menu/>
          <Testimonial/>
          <Contact/>
        </article>
        </main>
     

      


  <Script src="js/script.js"></Script>

 
  <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
  <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
</Layout>
    
  )
}
