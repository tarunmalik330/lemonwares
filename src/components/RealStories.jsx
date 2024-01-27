import React from "react";
import { BlueComma, PinkComma } from "./IconImg";
import CLIimg from "../assets/images/web.p/CLILogo.webp";
import JnplLogoimg from "../assets/images/web.p/JPNLLogo.webp";
import Brandingimg from "../assets/images/web.p/BrandingLogo.webp";

const RealStories = () => {
  return (
    <>
      <div
        id="blognews"
        className="xl:pt-[105px] lg:pt-[70px] lg:pb-[55px] md:py-[70px] sm:py-[60px] pt-[30px] pb-[50px]"
      >
        <div className="container xl:max-w-[1039px] xl:px-3 px-6 mx-auto">
          <div className="flex flex-row max-lg:flex-wrap gap-[30px] mt-14 justify-end relative">
            <PinkComma />
            <div
              className="xl:w-[40%] lg:w-[50%] flex flex-col items-end"
              data-aos="zoom-in-up"
            >
              <div>
                <h4 className="text-[#18191F] lg:text-[48px] md:text-[43px] sm:text-[38px] text-[28px] font-extrabold ff_inter leading-[133.999%] lg:max-w-[444px] lg:text-start text-center">
                  Real Stories from Real Customers
                </h4>
                <p className="text-[#18191F] text-[18px] ff_inter font-normal leading-[178%] mt-2 lg:text-start text-center">
                  Get inspired by these stories.
                </p>
              </div>
              <div className="rounded-[8px] cursor-pointer shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] hover:shadow-[5px_10px_20px_8px_rgba(41,41,42,0.07)] transition-all ease-linear duration-500 sm:px-8 px-4 lg:max-w-[350px] mt-6 lg:pb-24 py-8 lg:pt-[40px]">
                <img
                  src={CLIimg}
                  alt="CLIimg"
                  className="max-w-[116px] w-full ml-[28px] lg:mb-[15px] mb-4"
                />
                <div className="flex gap-4">
                  <BlueComma />
                  <ul>
                    <li className="text-black ff_inter font-normal sm:text-[16px] text-[14px] sm:leading-[200%] leading-[145%] lg:mb-6 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor rhoncus dolor purus non enim
                      praesent elem
                    </li>
                    <li className="text-[#18191F] ff_inter text-[18px] font-bold leading-[155.556%]">
                      Floyd Miles
                    </li>
                    <li className="text-[#969BAB] text-[14px] font-medium leading-[171.429%] ff_inter ">
                      Vice President, CLI
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="lg:w-[50%] flex flex-col gap-8 lg:pt-[48px]"
              data-aos="zoom-in-up"
            >
              <div className="rounded-[8px] cursor-pointer shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] hover:shadow-[5px_10px_20px_8px_rgba(41,41,42,0.07)] transition-all ease-linear duration-500 sm:px-8 px-4 lg:max-w-[445px] lg:pb-[14px] py-8 lg:pt-[39px]">
                <img
                  src={JnplLogoimg}
                  alt="JnplLogoimg"
                  className="max-w-[78px] w-full ml-8 mb-[15px]"
                />
                <div className="flex gap-4">
                  <BlueComma />
                  <ul>
                    <li className="text-black ff_inter font-normal sm:text-[16px] text-[14px] sm:leading-[183%] leading-[145%] lg:mb-6 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor rhoncus dolor purus non enim
                      praesent elem
                    </li>
                    <li className="text-[#18191F] ff_inter text-[18px] font-bold leading-[155.556%]">
                      Jane Cooper
                    </li>
                    <li className="text-[#969BAB] text-[14px] font-medium leading-[171.429%] ff_inter ">
                      CEO, JPNL
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-[8px] cursor-pointer shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] hover:shadow-[5px_10px_20px_8px_rgba(41,41,42,0.07)] transition-all ease-linear duration-500  sm:px-8 px-4 lg:max-w-[350px] py-8 lg:pt-[41.2px]">
                <img
                  src={Brandingimg}
                  alt="Brandingimg"
                  className="max-w-[120px] w-full ml-8 lg:mb-[12px] mb-4"
                />
                <div className="flex gap-4">
                  <BlueComma />
                  <ul>
                    <li className="text-black ff_inter font-normal sm:text-[16px] text-[14px] sm:leading-[200%] leading-[145%] lg:mb-6 mb-4">
                      LemonWares saved our time in Hosting my company page.
                    </li>
                    <li className="text-[#18191F] ff_inter text-[18px] font-bold leading-[155.556%]">
                      Kristin Watson
                    </li>
                    <li className="text-[#969BAB] text-[14px] font-medium leading-[171.429%] ff_inter ">
                      Co-Founder, LeeveOn Branding
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealStories;
