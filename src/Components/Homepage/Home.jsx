import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navigation, { Navbar } from './Navbar';
// import Herosection from './Hero';
import Aboutus from './Aboutus';
import Hero from './Hero';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
return( 
<div>
    <Navbar/>
    <Hero/> 
    <Aboutus/> 
    <Footer/>
</div>
);
}
export default Home; 
