import gscLogo from "../assets/gcs-logo.png";

// react icons
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin, FaYoutube, FaMobileAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-[#003478] h-[468px] flex">
      <div className="bg-white h-[106px] w-[70px] ml-[95px] rounded-b-[100px] pt-[20px]">
        <img src={gscLogo} className="h-[66px] w-[66px]" alt="" />
      </div>
      <div className="">
        <div className="w-[293px] pt-20">
          <p className="text-white font-inter text-[18px] font-[700] mt-14">
            Global Stanford Campus (GSC) Deliver Degrees and Diploma fim
            Recognized Local and Foreign Universities.
          </p>
          <ul className="flex text-white gap-6 mt-24">
            <li className="text-xl">
              <FaFacebookF />
            </li>
            <li className="text-2xl">
              <IoLogoWhatsapp />
            </li>
            <li className="text-2xl">
              <FaLinkedin />
            </li>
            <li className="text-2xl">
              <FaYoutube />
            </li>
            <li className="text-2xl">
              <AiFillInstagram />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center mx-6">
        <div className="h-[286px] w-[3px] bg-white opacity-[36%]"></div>
      </div>
      <div className="flex mt-[96px]">
        <div className="w-[210px]">
          <h2 className="font-inter text-[22px] font-[700] pt-[25px] pl-[19px] text-white">
            Programs
          </h2>
          <p className="text-[16px] font-[500] pt-6 pl-[19px] text-white">
            Bachelor’s Degrees
          </p>
          <p className="text-[16px] font-[500] pt-6 pl-[19px] text-white">
            Master’s Degrees
          </p>
          <p className="text-[16px] font-[500] pt-6 pl-[19px] text-white">
            Ph.d / DBA
          </p>
        </div>
        <div>
          <h2 className="font-inter text-[22px] font-[700] pt-[25px] pl-[19px] text-white">
            Quick links
          </h2>
          <p className="text-[16px] font-[500] pt-6 pl-[19px] text-white">
            Home
          </p>
          <p className="text-[16px] font-[500] pt-6 pl-[19px] text-white">
            Payments Policy
          </p>
          <p className="text-[16px] font-[500] pt-6 pl-[19px] text-white">
            Privacy Policy
          </p>
          <p className="text-[16px] font-[500] pt-6 pl-[19px] text-white">
            Quality Policy
          </p>
          <p className="text-[16px] font-[500] pt-6 pl-[19px] text-white">
            About Us
          </p>
        </div>
        <div className="pl-14">
          <h2 className="font-inter text-[22px] font-[700] pt-[25px] pl-[19px] text-white">
            Contact us
          </h2>
          <p className="text-[16px] font-[500] pt-6 pl-[19px] text-white flex gap-2 items-center">
            <FaMobileAlt className="text-xl" />
            +94 70 747 7771
          </p>
          <p className="text-[16px] font-[500] pt-6 pl-[19px] text-white flex gap-2 items-center">
            <TbDeviceLandlinePhone className="text-xl" />
            +94 11 445 5155
          </p>
          <p className="text-[16px] font-[500] pt-6 pl-[19px] text-white flex gap-2 items-center">
            <MdOutlineMailOutline className="text-xl" />
            info@globalstanfordcampus.com
          </p>
          <p className="text-[16px] font-[500] pt-6 pl-[19px] text-white flex gap-2">
            <IoHomeOutline className="text-xl mt-1" />
            Global Stanford Campus, <br />
            191 High Level Rd, <br />
            Nugegoda, Sri Lanka
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
