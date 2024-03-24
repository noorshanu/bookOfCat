import { FaTwitter, FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className=" pt-0  pb-[1rem] ">
      <div className="container-wrapper">
        <div className=" flex justify-between items-center flex-col pt-10 ">
          <div className=" w-full ">
            <img src="images/hero.jpeg" alt="" className="h-[400px] mx-auto rounded-2xl border-2" />
          </div>

          <div className=" max-w-4xl">
            <h1 className=" uppercase text-5xl text-[#000000] font-groot-one font-bold text-center my-4">
            Book of Cats combines Memes with Solana Adventure!
            </h1>

            <p className="uppercase text-xl text-[#020202] font-groot-one font-bold text-center">
            CONTRACT ADDRESS
            </p>
            <a
              href="https://solscan.io/token/Df6CCb3YmKoDkU5zjzK8STh9DKPdGsPXGfEgHT5goexY"
              target="_blank"
              className=" font-groot-two text-xs sm:text-xl text-center my-4 flex items-center justify-center bg-[#328ddc8f] py-2 px-4 rounded-full "
            >
             Df6CCb3YmKoDkU5zjzK8STh9DKPdGsPXGfEgHT5goexY
            </a>

            <div className=" flex justify-center gap-4 items-center">
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/4eieZUaaQH8uQ6hQX7icjAJwTaVFQUXJZ6JN42bGRpG9?t=1711303110888"
                target="_blank"
                className="font-groot-one text-2xl uppercase text-black bg-[#d59055] border-2 border-[#000000] py-2 px-6 rounded-full"
              >
                DexTools
              </a>
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
