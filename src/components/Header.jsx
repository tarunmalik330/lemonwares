import React from "react";
import WomanImag from "../assets/images/png/womenworking.png";
import RedVector1 from "../assets/images/png/RedVector1.png";
import RedVector2 from "../assets/images/png/RedVector2.png";
import RedVector3 from "../assets/images/png/Vector3.png";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <ul
        className="inline-flex mb-0 list-none flex-wrap sm:pt-[80px] pt-[40px] flex-row after:absolute relative after:h-[1px] after:bottom-0 after:left-[1%] after:right-[1%] after:bg-[#e5e5e5] "
        role="tablist"
        data-aos="zoom-in-right"
      >
        <li className="pb-1 relative">
          <a
            className={
              "text-[15px] font-semibold ff_poppins leading-normal " +
              (openTab === 1
                ? "text-[#B00000]"
                : "text-[rgba(214,212,212,0.88)]")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            Hosting
          </a>
          <div
            className={
              "absolute h-[1px] bottom-0 left-[7%] right-[10%] bg-[#b00000] z-[3]" +
              (openTab === 1 ? "" : "bg-[#b00000]")
            }
          ></div>
        </li>
        <li className="ml-[23px] pb-1 relative">
          <a
            className={
              "text-[15px] font-semibold ff_poppins leading-normal " +
              (openTab === 2
                ? "text-[#B00000]"
                : "text-[rgba(214,212,212,0.88)]")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
          >
            Domain
          </a>
          <div
            className={
              "absolute h-[1px] bottom-0 left-[7%] right-[10%] bg-[#b00000] z-[3]" +
              (openTab === 2 ? "" : "bg-[#b00000]")
            }
          ></div>
        </li>
        <li className="ml-[18px] pb-1 relative">
          <a
            className={
              "text-[15px] font-semibold ff_poppins leading-normal " +
              (openTab === 3
                ? "text-[#B00000]"
                : "text-[rgba(214,212,212,0.88)]")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
            data-toggle="tab"
            href="#link3"
            role="tablist"
          >
            SEO
          </a>
          <div
            className={
              "absolute h-[1px] bottom-0 left-[7%] right-[10%] bg-[#b00000] z-[3]" +
              (openTab === 3 ? "" : "bg-[#b00000]")
            }
          ></div>
        </li>
        <li className="ml-[15px] pb-1 relative">
          <a
            className={
              "text-[15px] font-semibold ff_poppins leading-normal " +
              (openTab === 4
                ? "text-[#B00000]"
                : "text-[rgba(214,212,212,0.88)]")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(4);
            }}
            data-toggle="tab"
            href="#link4"
            role="tablist"
          >
            Email
          </a>
          <div
            className={
              "absolute h-[1px] bottom-0 left-[7%] right-[10%] bg-[#b00000] z-[3]" +
              (openTab === 4 ? "" : "bg-[#b00000]")
            }
          ></div>
        </li>
      </ul>
      <div className="relative flex flex-col">
        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
          <div className=" flex flex-row flex-wrap">
            <div className="lg:w-1/2 w-full pt-[24px]">
              <h1
                className="text-[#2E2E2E] ff_poppins xl:text-[64px] sm:text-[55px] text-[23px] font-bold leading-[121.094%] lg:max-w-[608px] sm:mb-[34px] mb-[12px]"
                data-aos="zoom-in-right"
              >
                Premium Web Hosting for Your Website
              </h1>
              <p
                className="text-[#808080] ff_inter text-base !leading-[175%] font-normal tracking-[0.8px] lg:max-w-[448px] sm:mb-[60px] mb-[30px]"
                data-aos="zoom-in-right"
              >
                Blazing fast web hosting for individuals and businesses of all
                sizes backed by 24x7x365 Support.
              </p>
              <div
                className="flex sm:flex-row flex_col sm:gap-[24px] gap-3"
                data-aos="zoom-in-right"
              >
                <button className="text-white whitespace-nowrap hover:shadow-[0_3px_20px_rgba(176,_0,_0,_1)] transition-all ease-linear duration-500 ff_poppins font-normal text-sm !leading-[171.429%] bg-[#B00000] shadow-[0px_0px_64px_0px_rgba(176,_0,_0,_0.30)] rounded-[12px] py-3 px-[14px] ">
                  Create an Account
                </button>
                <button className="text-black whitespace-nowrap hover:shadow-[0_3px_20px_rgba(0,_0,_0,_0.3)] transition-all ease-linear duration-500 ff_poppins text-sm !leading-[171.429%] font-normal rounded-[8px] border border-solid border-black py-3 px-[17px] ">
                  Choose your plan
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex lg:justify-end lg:mt-0 mt-10">
              <div className="relative" data-aos="zoom-in-left">
                <img
                  src={RedVector1}
                  alt="RedVector1"
                  className="w-full absolute sm:right-[-20px] right-[-6px] top-[10%] max-w-[40px] z-[1] "
                />
                <img
                  src={RedVector2}
                  alt="RedVector2"
                  className="w-full max-w-[72px] absolute sm:right-[-8%] right-[-2%] bottom-[11%] z-[1] "
                />
                <img
                  src={RedVector3}
                  alt="RedVector3"
                  className="w-full max-w-[40px] absolute sm:left-[-24px] left-[-6px] bottom-[32%] z-[1] "
                />
                <img
                  src={WomanImag}
                  alt="WomanImag"
                  className="w-full sm:h-[504px] h-[400px] max-w-[501px] object-cover object-center translate-y-[-9px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
          <div className=" flex flex-row flex-wrap">
            <div className="lg:w-1/2 w-full pt-[24px]">
              <h1
                className="text-[#2E2E2E] ff_poppins xl:text-[64px] sm:text-[55px] text-[23px] font-bold leading-[121.094%] lg:max-w-[608px] sm:mb-[34px] mb-[12px]"
                data-aos="zoom-in-right"
              >
                <span className="text-[#B00000]">Premium Web </span> Hosting for
                Your Website
              </h1>
              <p
                className="text-[#808080] ff_inter text-base !leading-[175%] font-normal tracking-[0.8px] lg:max-w-[448px] sm:mb-[60px] mb-[30px]"
                data-aos="zoom-in-right"
              >
                Blazing fast web hosting for individuals and businesses of all
                sizes backed by 24x7x365 Support.
              </p>
              <div
                className="flex sm:flex-row flex_col sm:gap-[24px] gap-3"
                data-aos="zoom-in-right"
              >
                <button className="text-white whitespace-nowrap hover:shadow-[0_3px_20px_rgba(176,_0,_0,_1)] transition-all ease-linear duration-500 ff_poppins font-normal text-sm !leading-[171.429%] bg-[#B00000] shadow-[0px_0px_64px_0px_rgba(176,_0,_0,_0.30)] rounded-[12px] py-3 px-[14px] ">
                  Create an Account
                </button>
                <button className="text-black whitespace-nowrap hover:shadow-[0_3px_20px_rgba(0,_0,_0,_0.3)] transition-all ease-linear duration-500 ff_poppins text-sm !leading-[171.429%] font-normal rounded-[8px] border border-solid border-black py-3 px-[17px] ">
                  Choose your plan
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex lg:justify-end lg:mt-0 mt-10">
              <div className="relative" data-aos="zoom-in-left">
                <img
                  src={RedVector1}
                  alt="RedVector1"
                  className="w-full absolute sm:right-[-20px] right-[-6px] top-[10%] max-w-[40px] z-[1] "
                />
                <img
                  src={RedVector2}
                  alt="RedVector2"
                  className="w-full max-w-[72px] absolute sm:right-[-8%] right-[-2%] bottom-[11%] z-[1] "
                />
                <img
                  src={RedVector3}
                  alt="RedVector3"
                  className="w-full max-w-[40px] absolute sm:left-[-24px] left-[-6px] bottom-[32%] z-[1] "
                />
                <img
                  src={WomanImag}
                  alt="WomanImag"
                  className="w-full sm:h-[504px] h-[400px] max-w-[501px] object-cover object-center translate-y-[-9px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
          <div className=" flex flex-row flex-wrap">
            <div className="lg:w-1/2 w-full pt-[24px]">
              <h1
                className="text-[#2E2E2E] ff_poppins xl:text-[64px] sm:text-[55px] text-[23px] font-bold leading-[121.094%] lg:max-w-[608px] sm:mb-[34px] mb-[12px]"
                data-aos="zoom-in-right"
              >
                Premium Web <span className="text-[#B00000]">Hosting </span> for
                Your Website
              </h1>
              <p
                className="text-[#808080] ff_inter text-base !leading-[175%] font-normal tracking-[0.8px] lg:max-w-[448px] sm:mb-[60px] mb-[30px]"
                data-aos="zoom-in-right"
              >
                Blazing fast web hosting for individuals and businesses of all
                sizes backed by 24x7x365 Support.
              </p>
              <div
                className="flex sm:flex-row flex_col sm:gap-[24px] gap-3"
                data-aos="zoom-in-right"
              >
                <button className="text-white whitespace-nowrap hover:shadow-[0_3px_20px_rgba(176,_0,_0,_1)] transition-all ease-linear duration-500 ff_poppins font-normal text-sm !leading-[171.429%] bg-[#B00000] shadow-[0px_0px_64px_0px_rgba(176,_0,_0,_0.30)] rounded-[12px] py-3 px-[14px] ">
                  Create an Account
                </button>
                <button className="text-black whitespace-nowrap hover:shadow-[0_3px_20px_rgba(0,_0,_0,_0.3)] transition-all ease-linear duration-500 ff_poppins text-sm !leading-[171.429%] font-normal rounded-[8px] border border-solid border-black py-3 px-[17px] ">
                  Choose your plan
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex lg:justify-end lg:mt-0 mt-10">
              <div className="relative" data-aos="zoom-in-left">
                <img
                  src={RedVector1}
                  alt="RedVector1"
                  className="w-full absolute sm:right-[-20px] right-[-6px] top-[10%] max-w-[40px] z-[1] "
                />
                <img
                  src={RedVector2}
                  alt="RedVector2"
                  className="w-full max-w-[72px] absolute sm:right-[-8%] right-[-2%] bottom-[11%] z-[1] "
                />
                <img
                  src={RedVector3}
                  alt="RedVector3"
                  className="w-full max-w-[40px] absolute sm:left-[-24px] left-[-6px] bottom-[32%] z-[1] "
                />
                <img
                  src={WomanImag}
                  alt="WomanImag"
                  className="w-full sm:h-[504px] h-[400px] max-w-[501px] object-cover object-center translate-y-[-9px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={openTab === 4 ? "block" : "hidden"} id="link4">
          <div className=" flex flex-row flex-wrap">
            <div className="lg:w-1/2 w-full pt-[24px]">
              <h1
                className="text-[#2E2E2E] ff_poppins xl:text-[64px] sm:text-[55px] text-[23px] font-bold leading-[121.094%] lg:max-w-[608px] sm:mb-[34px] mb-[12px]"
                data-aos="zoom-in-right"
              >
                Premium Web Hosting for{" "}
                <span className="text-[#B00000]">Your Website</span>
              </h1>
              <p
                className="text-[#808080] ff_inter text-base !leading-[175%] font-normal tracking-[0.8px] lg:max-w-[448px] sm:mb-[60px] mb-[30px]"
                data-aos="zoom-in-right"
              >
                Blazing fast web hosting for individuals and businesses of all
                sizes backed by 24x7x365 Support.
              </p>
              <div
                className="flex sm:flex-row flex_col sm:gap-[24px] gap-3"
                data-aos="zoom-in-right"
              >
                <button className="text-white whitespace-nowrap hover:shadow-[0_3px_20px_rgba(176,_0,_0,_1)] transition-all ease-linear duration-500 ff_poppins font-normal text-sm !leading-[171.429%] bg-[#B00000] shadow-[0px_0px_64px_0px_rgba(176,_0,_0,_0.30)] rounded-[12px] py-3 px-[14px] ">
                  Create an Account
                </button>
                <button className="text-black whitespace-nowrap hover:shadow-[0_3px_20px_rgba(0,_0,_0,_0.3)] transition-all ease-linear duration-500 ff_poppins text-sm !leading-[171.429%] font-normal rounded-[8px] border border-solid border-black py-3 px-[17px] ">
                  Choose your plan
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex lg:justify-end lg:mt-0 mt-10">
              <div className="relative" data-aos="zoom-in-left">
                <img
                  src={RedVector1}
                  alt="RedVector1"
                  className="w-full absolute sm:right-[-20px] right-[-6px] top-[10%] max-w-[40px] z-[1] "
                />
                <img
                  src={RedVector2}
                  alt="RedVector2"
                  className="w-full max-w-[72px] absolute sm:right-[-8%] right-[-2%] bottom-[11%] z-[1] "
                />
                <img
                  src={RedVector3}
                  alt="RedVector3"
                  className="w-full max-w-[40px] absolute sm:left-[-24px] left-[-6px] bottom-[32%] z-[1] "
                />
                <img
                  src={WomanImag}
                  alt="WomanImag"
                  className="w-full sm:h-[504px] h-[400px] max-w-[501px] object-cover object-center translate-y-[-9px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Header = () => {
  return (
    <div
      id="account"
      className="container mx-auto xl:max-w-[1239px] xl:px-3 px-6"
    >
      <Tabs />
    </div>
  );
};

export default Header;
