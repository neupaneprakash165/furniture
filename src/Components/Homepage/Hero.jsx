const Hero = () =>{
    return( 
      <div className="container1">
      <img src="/images/retro.jpg" alt="Background" className="background-img" />
        <div class="jumbotron text-center">
  <h1>Triveni</h1> 
  <p>  We specialize in all Kinds of Furniture</p> 
  <form class="d-flex ms-auto me-auto  w-50">
                <input class="form-control" id="searchbox" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
</div>
</div>  
)
};
export default Hero; 