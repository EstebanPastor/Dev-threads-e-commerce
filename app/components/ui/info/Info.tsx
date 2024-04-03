import { BiWorld } from "react-icons/bi";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { GiTrophy } from "react-icons/gi";

const Info = () => {
  return (
    <div className="mt-2 py-5">
      <div className="main-container flex justify-between max-md:grid-cols-2 max-md:gap-x-20 max-md:gap-y-10">
        <div className="flex items-center gap-2 uppercase text-sm">
          <BiWorld className="text-3xl" />
          <span>Free Shipping Worldwide</span>
        </div>
        <div className="flex items-center gap-2 uppercase text-sm">
          <FaArrowRightArrowLeft className="text-3xl" />
          <span>Money Back Guaranteed</span>
        </div>
        <div className="flex items-center gap-2 uppercase text-sm">
          <IoIosLock className="text-3xl" />
          <span>Secure online payments</span>
        </div>
        <div className="flex items-center gap-2 uppercase text-sm">
          <GiTrophy className="text-3xl" />
          <span>Best premium quality</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
