import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 pb-[3rem] ">
        <div className="  px-4  py-2 flex justify-center flex-col  items-center gap-6 sm:gap-2 mt-4 ">
          <div className=" max-w-6xl">
            <div className=" border-2 bg-white rounded-2xl py-8 px-4">
              <h2 className="font-groot-one text-2xl my-2 text-[#000000] text-center font-bold relative z-30 -mt-4">
                Book of Cat Coin on Solana is the ultimate destination for meme
                enthusiasts and crypto aficionados alike!
              </h2>
              <p className=" text-center">
                Book of Cat Coin isn't your run-of-the-mill crypto token. It's a
                rollercoaster ride through memes, decentralized storage, and
                degen shitcoin trading and gambling. Our mission? To
                revolutionize decentralized social media and make memes
                unstoppable!
              </p>
            </div>

            <div className="flex justify-center gap-6 flex-col sm:flex-row py-5">
              <img
                src="images/img1.jpeg"
                alt=""
                className=" h-[300px] rounded-xl"
              />
              <img
                src="images/img2.jpeg"
                alt=""
                className=" h-[300px] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
