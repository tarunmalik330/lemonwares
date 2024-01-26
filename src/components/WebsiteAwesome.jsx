import React from "react";
import { WhatsappSvg } from "./IconImg";
import RedImg1 from "../assets/images/web.p/RedImg1.webp";
import RedImg2 from "../assets/images/web.p/RedImg2.webp";
import RedImg3 from "../assets/images/web.p/RedImg3.webp";

const WebsiteAwesome = () => {
  return (
    <>
      <div
        id="contact"
        className="sm:pt-[106px] sm:pb-[110px] pt-[30px] pb-[50px] "
      >
        <div className="container mx-auto xl:max-w-[1296px] xl:px-3 px-6">
          <div className="rounded-[16px] relative flex flex-col items-center justify-center sm:pt-[80px] sm:pb-[88px] sm:ml-[15px] sm:mr-[25px] py-[70px] px-2 bg-[#F7FAFE]">
            <img
              src={RedImg1}
              alt="RedImg1"
              className="absolute zoom-in-out-box sm:block hidden right-[-25px] bottom-[30px] w-full sm:max-w-[72px] max-w-[40px]"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            />
            <img
              src={RedImg2}
              alt="RedImg2"
              className="absolute zoom-in-out-box w-full sm:block hidden max-w-[40px] top-0 left-[31%]"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            />
            <img
              src={RedImg3}
              alt="RedImg3"
              className="absolute zoom-in-out-box sm:block hidden bottom-[30%] left-[-15px] w-full max-w-[40px]"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            />
            <h2
              className="text-[#2E2E2E] ff_poppins font-semibold lg:text-[64px] sm:text-[37px] text-[22px] leading-[137.5%] text-center sm:mb-[40px] mb-[20px] lg:max-w-[1024px]"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              We're here to make your website awesome.
            </h2>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <a
                className="px-[16px] pt-3 pb-[11px] bg-[#B00000] hover:shadow-[0_3px_20px_rgba(176,_0,_0,_1)] transition-all ease-linear duration-500 rounded-lg inline-flex items-start justify-center gap-[9px] text-white ff_poppins text-sm !leading-[171.429%] font-normal"
                href="https://web.whatsapp.com/"
                target="blank"
              >
                <WhatsappSvg /> Get in touch with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteAwesome;
