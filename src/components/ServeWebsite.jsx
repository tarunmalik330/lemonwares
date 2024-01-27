import React from "react";
import Serveimg1 from "../assets/images/web.p/serve-img1.webp";
import Serveimg2 from "../assets/images/web.p/serve-img2.webp";
import Serveimg3 from "../assets/images/web.p/serve-img3.webp";
import Serveimg4 from "../assets/images/web.p/serve-img4.webp";
import Serveimg5 from "../assets/images/web.p/serve-img5.webp";
import Serveimg6 from "../assets/images/web.p/serve-img6.webp";

const ServeWebsite = () => {
  return (
    <>
      <div className="container mx-auto xl:px-3 px-6 xl:max-w-[1218px] xl:pt-[84px] lg:pt-[15px] pt-0">
        <div className="flex flex-row justify-between flex-wrap items-center">
          <div className="lg:w-1/2 w-full">
            <p
              className="text-[#18191F] sm:text-[41px] text-[24px] md:text-[48px] font-extrabold ff_inter leading-[133%] lg:max-w-[445px] m-0 pb-[8px] text-center"
              data-aos="fade-right"
            >
              We serve over 100 Nigerian Websites
            </p>
            <p
              className="ff_inter font-normal lg:text-[18px] leading-[177%] text-[#18191F] lg:max-w-[445px] lg:text-start text-center sm:text-[16px] text-[14px]"
              data-aos="fade-right"
            >
              Connect LemonWares with your favourite tools that you use daily
              and keep things on track.
            </p>
          </div>
          <div className="lg:w-[48%] w-full">
            <div
              className="flex flex-row flex-wrap justify-center"
              data-aos="fade-left"
            >
              <div className="sm:w-4/12 w-1/2 flex justify-center lg:justify-end">
                <img
                  src={Serveimg1}
                  alt="Serveimg1"
                  className="max-w-[120px] w-full"
                />
              </div>
              <div className="sm:w-4/12 w-1/2 flex justify-center lg:justify-end">
                <img
                  src={Serveimg2}
                  alt="Serveimg2"
                  className="max-w-[120px] w-full"
                />
              </div>
              <div className="sm:w-4/12 w-1/2 flex justify-center lg:justify-end">
                <img
                  src={Serveimg3}
                  alt="Serveimg3"
                  className="max-w-[120px] w-full"
                />
              </div>
              <div className="sm:w-4/12 w-1/2 flex justify-center lg:justify-end">
                <img
                  src={Serveimg4}
                  alt="Serveimg4"
                  className="max-w-[120px] w-full"
                />
              </div>
              <div className="sm:w-4/12 w-1/2 flex justify-center lg:justify-end">
                <img
                  src={Serveimg5}
                  alt="Serveimg5"
                  className="max-w-[120px] w-full"
                />
              </div>
              <div className="sm:w-4/12 w-1/2 flex justify-center lg:justify-end">
                <img
                  src={Serveimg6}
                  alt="Serveimg6"
                  className="max-w-[120px] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServeWebsite;
