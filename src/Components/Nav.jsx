import React from "react";
import Menu from "/src/assets/Images/menu.png";
import BattReLogo from "/src/assets/Images/BattReLogo.png";

function Nav() {
  return (
    <>
      <div className="bg-black w-screen p-0 m-0 overflow-x-hidden">
        <ul className="bg-black text-white flex items-center text-sm p-0">
          <div className=" flex justify-between w-screen sm:hidden">
            <div>
              <li className=" m-5  mt-6 md:block">
                <button>
                  <img
                    className=" h-auto w-auto"
                    src={BattReLogo}
                    alt=""
                  />
                </button>
              </li>
            </div>
            <div>
              <li className=" md:hidden  fill-white  m-5  text-2xl">
                {" "}
                <button>&equiv;</button>
              </li>
            </div>
          </div>
          <li className="hidden md:block">
            <button>
              <img className=" h-auto w-auto" src={BattReLogo} alt="" />
            </button>
          </li>
          <li className="p-5  hidden md:block">
            <button>Storie</button>
          </li>
          <li className="p-5 hidden md:block">
            <button>Loev</button>
          </li>
          <li className="p-5 hidden md:block">
            <button>One</button>
          </li>
          <li className="mr-24 p-5 hidden md:block">
            <button>
              Superbike<sup className=" bg-yellow-300 text-black">new</sup>
            </button>
          </li>
          <li className="ml-auto p-5 hidden md:block">
            <button>Book Now</button>
          </li>
          <li className="p-5 hidden md:block">
            <button>Book a Test Ride</button>
          </li>
          <li className="p-5 hidden md:block">
            <button>Become a Dealer</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
