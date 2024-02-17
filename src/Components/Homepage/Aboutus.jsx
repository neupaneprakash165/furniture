import React, { useState, useEffect } from 'react';

const Aboutus = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg", "/images/image4.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="container about-us-section">
      <div className="row">
        <div className="col-sm-8">
          <h2>About Us</h2>
          <br />
          <h4>Triveni Furniture Udhyog stands out as a cornerstone in the furniture industry of Hetauda, Nepal, boasting a legacy spanning over 25 years. This esteemed establishment has built its reputation on a foundation of excellence, offering an extensive array of furniture pieces crafted with meticulous attention to detail and unparalleled craftsmanship.

            Beyond merely selling furniture, Triveni Furniture Udhyog provides an immersive experience for its customers. Stepping into their showroom is akin to entering a realm where each piece of furniture tells a story of dedication, expertise, and passion. From classic designs to contemporary styles, their diverse range caters to every taste and preference.

            What truly sets Triveni Furniture Udhyog apart is its commitment to sustainability. With a focus on using eco-friendly materials and implementing environmentally conscious practices, they contribute to the preservation of nature while delivering top-notch furniture solutions. Moreover, their dedication to customer satisfaction is evident in their personalized service, ensuring that each client's unique needs are met with precision and care.

            In essence, Triveni Furniture Udhyog isn't just a furniture store; it's a destination where quality meets craftsmanship, and where the vision of creating timeless pieces intersects with the ethos of sustainability. As a trusted name in the community, it continues to redefine the standards of excellence in the furniture industry, making it the preferred choice for discerning customers seeking both style and substance. </h4>
          <br />
          <button className="btn btn-default btn-lg">Get in Touch</button>
        </div>
        <div className="col-sm-4 d-flex align-items-center">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div key={index} className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}>
                  <img src={image} className="d-block w-100" alt={`Slide ${index}`} style={{ maxHeight: '300px', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" onClick={goToPreviousImage}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={goToNextImage}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
