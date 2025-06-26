import { IoPersonCircleSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-screen h-20 text-white  flex justify-between bg-blue-500">
      <div className="w-30 h-20 relative ml-5">
        <img
          src="/logo.webp"
          alt=""
          className="w-30 h-19 object-cover p-1 rounded-2xl"
        />
      </div>
      <div className=" h-full flex justify-center items-center ">
        <div>
          <ul className="flex gap-10">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">ContactUs</a>
            </li>
            <li>
              <a href="#">emergencyService</a>
            </li>
            <li>
              <a href="#">AboutUs</a>
            </li>
            <li>
              <a href="#">SearchJob</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center m-10 ">
        {/* <img
          src="../public/profile.png"
          alt=""
          className="w-30 h-19 object-cover p-1 rounded-2xl"
        /> */}
        <div>
          <IoPersonCircleSharp className="text-2xl" />
        </div>
        <br />
        <div>
          <p>login\signup</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
