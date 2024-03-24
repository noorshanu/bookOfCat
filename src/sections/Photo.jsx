import React from "react";

function Photo() {
  return (
    <section>
      <div className=" container-wrapper">
        <h2 className="font-groot-one text-2xl  text-[#000000] text-center font-bold relative z-30 my-4">
          Our Products
        </h2>

        <div className=" flex justify-center gap-4 items-center flex-col sm:flex-row">
          <div className=" border-2 rounded-2xl px-4 py-8">
            <img
              src="images/img4.jpeg"
              alt=""
              className=" h-[300px] rounded-xl mx-auto"
            />
            <p className=" font-groot-one text-xl my-2 text-[#000000] text-center font-bold">
              The Degen Chain
            </p>
            <p className=" max-w-full sm:max-w-xl ">
              Step into the chaos of the Degen Chain, where meme madness
              collides with decentralized finance. Trade, gamble, and hodl your
              way to excitement!
            </p>
          </div>

          <div className=" border-2 rounded-2xl px-4 py-8">
            <img
              src="images/img3.jpeg"
              alt=""
              className=" h-[300px] rounded-xl mx-auto"
            />
            <p className=" font-groot-one text-xl my-2 text-[#000000] text-center font-bold">
              Digital Book of Cat
            </p>
            <p className=" max-w-full sm:max-w-xl ">
              Explore our digital library packed with cat memes, seamlessly
              linked to IPFS, Arweave, and on-chain storage. craft memes, and
              collect adorable cat NFTs!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Photo;
