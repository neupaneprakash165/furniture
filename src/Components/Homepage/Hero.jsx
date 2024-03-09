import React from 'react';

const Hero = () => {
  return (
    <div className="container-fluid ">
      <div id="demo" className="carousel slide shadow" data-bs-ride="carousel">
        {/* Indicators/dots */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        {/* The slideshow/carousel */}
        <div className="carousel-inner">
          {/* Make sure your project structure includes the images referenced here */}
          <div className="carousel-item active">
            <img src="/images/retro.png" alt="Los Angeles" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="/images/retro2.jpg" alt="Chicago" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="/images/retro3.jpg" alt="New York" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="/images/retro4.jpg" alt="New York" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="/images/retro5.jpg" alt="New York" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="/images/retro6.jpg" alt="New York" className="d-block w-100" />
          </div>
        </div>

        {/* Left and right controls/icons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
