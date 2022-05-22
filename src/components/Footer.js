import React from "react";
import mailIcon from "../assests/icons/email.png";
import logo from "../assests/icons/p.png";
import phone from "../assests/icons/phone-call.png";
import pin from "../assests/icons/pin.png";
import socialIcon from "../assests/icons/Group 32972.png";
import playStoreImg from "../assests/images/kindpng_4830469.png";
import bankImg from "../assests/images/ssl-commerce.1d268dce.png";
const Footer = () => {
  return (
    <div className="py-10  bg-slate-600">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <img className="w-6 h-6 rounded-md" src={logo} alt="" />
            <span className="text-white font-bold text-2xl">
              {" "}
              Programming-Hero
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <img className="w-6 h-6 " src={pin} alt="" />
            <span className="text-white font-bold">
              {" "}
              Level-4, 34, Awal Centre, Banani, Dhaka
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <img className="w-6 h-6 " src={mailIcon} alt="" />
            <span className="text-white font-bold">
              {" "}
              Official: web@programming-hero.com
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <img className="w-6 h-6 " src={phone} alt="" />
            <span className="text-white font-bold">
              {" "}
              Helpline : 01322810873 , 01322810867 , 01322810869 <br /> (Available : Sat - Thu, 10:00 AM to 7:00 PM)
            </span>
          </div>
          <p className="text-white font-bold">
            
          </p>

          <div>
            <img className="h-16 mt-8" src={playStoreImg} alt="" />
          </div>
        </div>
        <div className="text-white font-bold space-y-3">
          <p>About Us</p>
          <p>Success</p>
          <p>Refund policy</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>App Privacy Policy</p>
          <img src={socialIcon} alt="" />
        </div>
        <div>
          <img src={bankImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
