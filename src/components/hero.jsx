const Hero = () => {
    return (
      <div className="main-container flex items-center mt-20 pl-20">
        {/* Left Section */}
        <div className="hero-content flex flex-col gap-9 w-1/2">
          {/* Title */}
          <h1>YOUR FEET DESERVE THE BEST</h1>
          {/* Description */}
          <p className="font-medium text-gray-500 max-w-[400px]">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          {/* Buttons */}
          <div className="hero-btn">
            <button className="primary-btn bg-red-500 text-white hover:bg-red-700 px-4 py-2 rounded-md"><a href="#">Shop Now</a></button>
            <button className="secondary-btn bg-transparent text-black border border-black px-4 py-2 rounded-md ml-4"><a href="#">Category</a></button>
          </div>
          {/* Shopping Icons */}
          <div className="shopping">
            <p>available on</p>
            <div className="icons flex flex-row">
              <img src="assets/flipkart.png" alt="Flipkart" />
              <img src="assets/amazon.png" alt="Amazon" />
            </div>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="banner w-1/2">
          <img src="/assets/shoe_image.png" alt="Shoe-imag" />
        </div>
      </div>
    );
  };
  
  export default Hero;
  