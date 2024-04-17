import React from "react";
import insta from "/src/assets/Images/insta.png";
import facebook from "/src/assets/Images/facebook.png";
import twitter from "/src/assets/Images/twitter.png";
import linkedin from "/src/assets/Images/linkedin.png";
import yt from "/src/assets/Images/yt.png";

function Footer() {
  return (
    <div className="bg-black text-white h-100% flex-col md:flex-row">
      <div className="bg-black flex-col md:flex-row">
        <div className="flex flex-col md:flex-row justify-between p-10">
          {/* <div className=" justify-around text-4xl text-wrap flex flex-col tracking-wide text-center md:hidden">Stay Informed About Batt:RE</div> */}
          <div className="text-4xl text-center md:text-5xl md:justify-around md:flex md:tracking-wider">
            <ul className="">
              <li>Stay Informed</li>
              <li>About Batt:RE</li>
            </ul>
          </div>
          <div className=" flex flex-row items-stretch my-6 justify-center">
            <input
              className=" bg-gray-600 text-gray-200 h-12 w-60 border-none p-3"
              type="email"
              placeholder="Your email ID"
              id=""
            ></input>
            <button className=" w-32 text-xs md:p-3 justify-around place-items-center bg-white text-black  md:w-40 border-none">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[90%] h-[1px] bg-slate-400 mb-10"></div>
        </div>
        <div className="md:flex md:flex-row mb-16 justify-between">
          <div className="tracking-wider justify-around text-sm mx-7 md:mx-12">
            <ul>
              <li>351, 80 Feet Road</li>
              <li>Vinayak City</li>
              <li>Guru Marg, Sirsi Road Neemera, Bindayaka,</li>
              <li>Jaipur, Rajasthan, 302041</li>
            </ul>
          </div>
          <div className= "grid grid-cols-2 m-4 md:flex md:flex-row  text-md my-3 md:my-0 md:w-2/5 md:justify-between">
            <div className="flex-col m-4 mx-4">
              <ul>
                <li className="text-slate-400">Model</li>
                <li>
                  <button>Storie</button>
                </li>
                <li>
                  <button>One</button>
                </li>
                <li>
                  <button>Loev</button>
                </li>
              </ul>
            </div>
            <div className=" m-4 mx-4">
              <ul>
                <li className="text-slate-400">Company</li>
                <li>
                  <button>About</button>
                </li>
                <li>
                  <button>Contact</button>
                </li>
              </ul>
            </div>
            <div className=" m-4 mx-4">
              <ul>
                <li className="text-slate-400">Quick Links</li>
                <li>
                  <button>Book Now</button>
                </li>
                <li>
                  <button>Test Ride</button>
                </li>
                <li>
                  <button>Become a Dealer</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[90%] h-[1px] bg-slate-400 mb-10"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around text-gray-400 bg-black text-center gap-3 p-3">
        <div>&#169; 2023 Batt:RE. All rights reserved</div>
        <div>
          <button>PRIVACY POLICY</button>
        </div>
        <div>
          <button>TERMS AND CONDITIONS</button>
        </div>
        <div className="flex flex-row justify-center">
          <ul className="flex flex-row gap-6">
            <li>
              <button>
                <img src={insta} alt=""></img>
              </button>
            </li>
            <li>
              <button>
                <img src={facebook} alt=""></img>
              </button>
            </li>
            <li>
              <button>
                <img src={twitter} alt=""></img>
              </button>
            </li>
            <li>
              <button>
                <img src={linkedin} alt=""></img>
              </button>
            </li>
            <li>
              <button>
                <img src={yt} alt=""></img>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
