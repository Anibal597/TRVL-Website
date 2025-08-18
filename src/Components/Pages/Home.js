import React from 'react';
import HeroSection from './HeroSection'
import '../../App.css';
import Cards from './Cards';
import Footer from './Footer';

function Home () {
    return (
        <>
        <HeroSection></HeroSection>
        <Cards></Cards>
        <Footer></Footer>
        </>
    )
}

export default Home;