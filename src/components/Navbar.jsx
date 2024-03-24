import { FaTelegram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <nav className=" py-1 bg-[#328ddc8f]  ">
      <div className="container-wrapper relative">
        <div className=" flex items-center justify-between gap-2">
          
          <div className=" flex items-center gap-1">
          <img src="/images/logo.png" className="max-w-[7rem] w-full " alt="" />
            <h2 className=" text-[#000000] font-groot-one text-3xl ">Book of Cat</h2>
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://t.me/bookofcatso" target="_blank" className=" text-2xl text-[#ffb22e]">
              <FaTelegram />
            </a>
            <a href="https://twitter.com/Book_of_catt" target="_blank" className=" text-2xl text-[#ffb22e]">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
