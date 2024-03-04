import React from 'react';

const Hero = () => {
  return (
    <div className="container-fluid p-0 position-relative">
      <img src="/images/retro.jpg" alt="Background" className="background-img position-absolute top-0 start-0 w-100" />
      <div className="navbar navbar-expand-md  bg-transparent py-3">
        <div className="container">
          {/* Navbar content */}
        </div>
      </div>
      <div className="jumbotron text-center hero-content">
        <h1 className="display-4">Triveni</h1>
        <p className="lead">We specialize in all kinds of furniture</p>
      </div>
    </div>
  );
};

export default Hero;
