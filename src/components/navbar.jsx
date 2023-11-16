const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-transparent-800 text-white">
      {/* Logo */}
      <div className="logo">
        <img src="/assets/brand_logo.png" alt="logo" />
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex space-x-4 font-bold text-black">
          <li className="hover:text-red-500">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-red-500">
            <a href="#">About</a>
          </li>
          <li className="hover:text-red-500">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Login Button */}
      <div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          <a href="#">LOGIN</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
