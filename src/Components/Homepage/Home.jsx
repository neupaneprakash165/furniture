import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation, { Navbar } from './Navbar';
import Herosection from './Hero';
import Aboutus from './Aboutus';
import Hero from './Hero';
const Home = () => {
return( 
<div>
    <Hero/> 
    <Aboutus/> 
</div>
);
}
export default Home; 
