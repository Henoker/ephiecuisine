import React from 'react'
import Header from './Header';
import Footer from './Footer';
import TopBar from './TopBar';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <>
    <TopBar/>
    <Navbar/>
    {/* <Header/> */}
    { children }
    <Footer/>
    </>
  )
}

export default Layout
