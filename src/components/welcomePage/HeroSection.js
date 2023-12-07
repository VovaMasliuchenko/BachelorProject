import React from "react";
import logoImg from "../../assets/LogoWhite.png";
import housePic from "../../assets/DesignHouse.png";
import arrowCircle from "../../assets/arrowCircle.png";

function HeroSection() {
  return (
    <div className="flex flex-row w-full">
      <div className="flex bg-hero-image h-screen w-1/2 bg-fixed pl-5 pt-2 flex-col justify-between h-screen">
        <div>
        <header>
          <a href='/' className=""><img src={logoImg}/></a>
        </header>
        <div className="flex justify-end pr-5 mt-[80px]">
          <p className="text-5xl text-white font-regular font-goldman">Expert team of <br/>Architectures, Designers, <br/>and Builders.</p>
        </div>
        </div>
        <div className="flex justify-end flex col pr-5 mb-6 cursor-pointer">
          <div><p className="text-white font-semibold font-bold font-inter">Click here to <br/>see our <br/>works</p></div>
          <div><a><img src={arrowCircle}></img></a></div>
        </div>
      </div>
      <div className="w-1/2 pr-5 pt-2">
        <header className="flex items-center justify-between m-5">
          <ul className="flex text-black space-x-3 font-medium text-lg items-center">
            <li className=""><a href="#hero">Home</a></li>
            <li className=""><a href="#about">Services</a></li>
            <li className=""><a href="#goals">Our Works</a></li>
            <li className=""><a href="#goals">About</a></li>
          </ul>
          <ul className="flex text-black space-x-3 items-center text-lg">
            <li><a href="/Register" className="w-full border-2 border-black rounded-lg font-medium pl-5 pr-5 pb-2 pt-2 hover:bg-black hover:text-white transition ease-in-out">Get Started</a></li>
          </ul>
        </header>
        <div className="flex flex-col space-y-12">
          <div className="flex mt-[50px]">
            <p className="text-5xl text-black font-bold pt-5 pl-5 font-regular font-goldman">Make your dreams <br/>come true with us.</p>
          </div>
          <div className="flex flex-col items-end space-y-4 font-regular font-inter">
            <p className="w-96">Our business foundation rests on effective engagement with clients, built upon mutual trust and respect.</p>
            <p className="w-96">Every client we serve can expect our devoted time and unwavering attention, while having full confidence in the skill and dependability of our services.</p>
          </div>
          <div className="flex justify-center">
            <img src={housePic} className="scale-90"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
