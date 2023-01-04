import React from 'react'
import Header from './Header';
import Footer from './Footer';
import TopBar from './TopBar';

const Layout = ({children}) => {
  return (
    <>
    <TopBar/>
    <Header/>
    { children }
    <Footer/>
    </>
  )
}

export default Layout
