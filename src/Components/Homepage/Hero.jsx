const Hero = () =>{
    return( 
      <div className="container-fluid">
      <img src="/images/retro.jpg" alt="Background" className="background-img" />
        <div class="jumbotron text-center">
  <h1>Triveni</h1> 
  <p>  We specialize in all Kinds of Furniture</p> 
  <form>
    <div class="input-group">
      <input type="Search"class="form-control" style={{ width: '250px' }}  placeholder="Search" required></input>
      <div class="input-group-btn">
        <button type="button" class="btn btn-danger">Submit</button>
      </div>
    </div>
  </form>
</div>
</div>

   
)
};
export default Hero; 