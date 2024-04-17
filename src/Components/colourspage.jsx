import React, { useState } from "react";
import Black from "/src/assets/Images/scooty-black.png";
import Sym from "/src/assets/Images/location sym.png";
import Tick from "/src/assets/Images/tick.png";
import Arrow from "/src/assets/Images/Arrow 2.png";
import Red from "/src/assets/Images/scooty-red.png";
import Grey from "/src/assets/Images/scooty-grey.png";
import Dblue from "/src/assets/Images/scooty-darkblue.png";
import Lblue from "/src/assets/Images/scooty-lightblue.png";
import White from "/src/assets/Images/scooty-white.png";
import Yellow from "/src/assets/Images/scooty-yellow.png";

function colourspage() {
  const [currColour, setcurrColour] = useState("#0d0d0d")
  const [currName,setCurrName] = useState("Midnight Black");
  const [currentImage, setCurrentImage] = useState(Black);
  const handleChangeImage = (image, name, number) => {
    setCurrentImage(image);
    setCurrName(name);
    setcurrColour(number);
  };
  return (
    <>
      <div className="md:hidden tracking-wide">
        <ol className="flex flex-row w-full md:hiddden justify-between">
          <li className="text-4xl ml-1 text-black font-bold md:hiddden">01</li>
          <li className="ml-2 mt-[6px] text-xs md:hiddden ">SELECT MODEL</li>
          <li className="ml-2 text-4xl font-bold md:hiddden ">02</li>
          <li className="ml-1 mt-[6px] text-xs md:hiddden ">SELECT COLOR</li>
          <li className="ml-2 text-4xl font-bold text-gray-400 md:hiddden ">03</li>
          <li className="ml-1 text-xs mt-[6px] text-gray-500 md:hiddden ">YOUR DETAILS AND PREFERRED LOCATION</li>
        </ol>
      </div>
      <div className=" w-full h-[1px] bg-gray-300 align-middle justify-center md:hidden"></div>
      <div className="flex flex-wrap md:flex-row flex-col">{/*bigger main page div*/}
        <div className="md:w-[50%]">{/*div for booking amount representation(big scooty div)*/}
          <div className="flex flex-wrap flex-row justify-between mt-2 my-4">
            <h1 className="text-2xl tracking-wide font-bold ml-4">Storie</h1>
            <div className="flex flex-row mr-3">
              <div className="rounded-full bg-[var(--custom-color)] h-5 w-5 mt-2" style={{ backgroundColor: currColour }}></div>
              <h1 className="text-xs ml-2 mt-2">{currName}</h1>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" w-[90%] h-[1px] bg-gray-400 my-4"></div>
          </div>
          <div className="flex justify-center">{/*div for scooty image representation*/}
              <img src={currentImage} alt="" className="h-56 w-80"/>
          </div>
          <div className="flex justify-center">
            <div className=" w-[90%] h-[1px] bg-gray-400 my-4"></div>
          </div>
          <div className="flex flex-row justify-between my-4">{/*div for booking amount and price*/}
              <div className="mx-5">
                <ul className="flex-col">
                  <li>Booking Amount</li>
                  <li className="text-3xl font-bold tracking-wider">&#8377;999/-</li>  
                </ul>
              </div>
              <div>
                <ul className="flex-col mx-5">
                  <li className="text-xs text-gray-600">*Ex-showroom price in</li>
                  <li className="text-xs text-gray-300">(incl. FAME II Subsidy)</li>
                  <li className="text-2xl my-3">&#8377;109999/-</li>
                  <li className="flex flex-row"><h1 className="text-xs">Andhra Pradesh</h1> <img src={Sym} className = " mx-2 h-4 w-3"/></li>
                </ul>
              </div>
          </div>
        </div> 
        <div className="bg-gray-200 md:w-[50%]">{/*div for choose a colour(small scooty div)*/}
          <h1 className="text-2xl tracking-wide font-bold mx-3 my-4">Choose a colour</h1>
          <div className="bg-white my-7 mx-3">{/*div for scooty colours*/}
            <div className="flex flex-wrap flex-row justify-around">
              <div className="flex flex-wrap flex-row my-3 justify-around">
                <img src={Tick} alt="" className="h-5 w-5 my-3 mt-10 mx-2"/>
                <ul className="flex flex-col my-2">
                  <li className="text-xl font-semibold tracking-wide">Storie</li>
                  <li className="tracking-wide">{currName}</li>
                </ul>
              </div>
              <img src={currentImage} alt="" className="h-15 w-24 my-3" />
            </div>
            <div className="">
            <ul className="flex flex-row justify-evenly my-6">
                <li>
                  <button
                    onClick={() => handleChangeImage(Black,"Midnight Black","#0d0d0d")}
                    className="my-5 w-6 h-6 rounded-full bg-[#0d0d0d] border-gray-300 border-[1px] enabled:hover:border-black"
                  ></button>
                </li>
                <li>
                  <button
                    onClick={() => handleChangeImage(Grey,"Stormy Grey","#707485")}
                    className="my-5 w-6 h-6 rounded-full bg-[#707485]   border-gray-300 border-[1px] enabled:hover:border-black"
                  ></button>
                </li>
                <li>
                  <button
                    onClick={() => handleChangeImage(Dblue,"Starlight Blue","#233A78")}
                    className="my-5 w-6 h-6 rounded-full bg-[#233A78]   border-gray-300 border-[1px] enabled:hover:border-black"
                  ></button>
                </li>
                <li>
                  <button
                    onClick={() => handleChangeImage(Lblue,"Ice Blue","#C5DBF4")}
                    className="my-5 w-6 h-6 rounded-full bg-[#C5DBF4]   border-gray-300 border-[1px] enabled:hover:border-black"
                  ></button>
                </li>
                <li>
                  <button
                    onClick={() => handleChangeImage(Red,"Candy Red","#B42025")}
                    className="my-5 w-6 h-6 rounded-full bg-[#B42025]   border-gray-300 border-[1px] enabled:hover:border-black"
                  ></button>
                </li>
                <li>
                  <button
                    onClick={() => handleChangeImage(White,"Pearl White","#ffffff")}
                    className="my-5 w-6 h-6 rounded-full bg-[#ffffff]   border-gray-300 border-[1px] enabled:hover:border-black"
                  ></button>
                </li>
                <li>
                  <button
                    onClick={() => handleChangeImage(Yellow,"Ecru Yellow","#F5D266")}
                    className="my-5 w-6 h-6 rounded-full bg-[#F5D266]   border-gray-300 border-[1px] enabled:hover:border-black"
                  ></button>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex justify-center"><button className="w-[100%]"><div className="bg-black flex flex-row justify-between mx-3 my-9">
            <h1 className="text-base text-white my-5 mx-4">LET'S GO</h1>
            <img src={Arrow} alt="" className="my-8 mx-4"/>
          </div></button></div>
        </div> 
      </div>

      
  
    </>
  );
}
export default colourspage;
