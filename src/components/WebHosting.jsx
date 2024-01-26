import React from "react";
import Cpanel from "../assets/images/png/Cpanel.png";
import Secured from "../assets/images/png/securedImg.png";
import LiteSpeed from "../assets/images/png/litespeedImg.png";
import SoftImg from "../assets/images/png/SoftImg.png";
import WordPress from "../assets/images/png/WordPressImg.png";
import CloudFlare from "../assets/images/png/CloudFlareImg.png";
import uptime from "../assets/images/png/UptimeImg.png";
import BlazingImg from "../assets/images/png/BlazingImg.png";
import Certificates from "../assets/images/png/CertificatesImg.png";
import FriendlySupport from "../assets/images/png/FriendlySupport.png";

const WebHosting = () => {
  const Trueweb = [
    {
      Image: uptime,
      heading: "99.9% Uptime",
      content:
        "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
    {
      Image: BlazingImg,
      heading: "Blazing Fast Web Hosting",
      content:
        "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
    {
      Image: Certificates,
      heading: "Free SSL Certificates",
      content:
        "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
    {
      Image: FriendlySupport,
      heading: "24x7 Friendly Support",
      content:
        "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
  ];
  return (
    <>
      <div
        id="about"
        className="container xl:max-w-[1308px] xl:px-3 px-6 mx-auto sm:pt-[79px] pt-[40px]"
      >
        <div className="flex flex-row flex-wrap justify-between lg:pb-[100px] sm:pb-[70px] pb-[50px]">
          <div className="lg:w-6/12 w-full">
            <h2
              className="text-[#18191F] ff_inter sm:text-[40px] xl:text-[48px] text-[22px] font-extrabold leading-[133.333%] sm:mb-[20px] mb-3"
              data-aos="fade-right"
            >
              True Cloud Web Hosting
            </h2>
            <p
              className="lg:max-w-[573px] ff_inter sm:text-lg text-[16px] font-normal !leading-[177.778%] text-[#18191F]"
              data-aos="fade-right"
            >
              True Cloud Web Hosting All of the hosting packages we offer are
              deployed instantly on our SSD powered cloud. We don’t use
              dedicated servers that operate on single pieces of hardware. Our
              entire infrastructure is built to be reliable, secure, and
              scalable.
            </p>
          </div>
          <div className="lg:w-[43%] w-full pt-7 lg:pt-0">
            <div
              className="flex flex-row justify-between items-center flex-wrap"
              data-aos="fade-left"
            >
              <div className="sm:w-[26.5%] w-6/12 flex lg:justify-end justify-center sm:mb-[42px] mb-0">
                <img
                  src={Cpanel}
                  alt="Cpanel"
                  className="w-full sm:h-[30px] h-[20px] sm:max-w-[140.714px] max-w-[120px] "
                />
              </div>
              <div className="sm:w-[26.5%] w-6/12 flex lg:justify-end justify-center sm:mb-[42px] mb-0">
                <img
                  src={Secured}
                  alt="Secured"
                  className="w-full sm:h-[50px] h-[40px] sm:max-w-[125.424px] max-w-[120px]"
                />
              </div>
              <div className="sm:w-[26.5%] w-6/12 flex lg:justify-end justify-center sm:mb-[42px] mb-0">
                <img
                  src={LiteSpeed}
                  alt="LiteSpeed"
                  className="w-full sm:h-[53px] h-[43px] sm:max-w-[125px] max-w-[120px]"
                />
              </div>
              <div className="sm:w-[26.5%] w-6/12 flex lg:justify-end justify-center">
                <img
                  src={SoftImg}
                  alt="SoftImg"
                  className="w-full sm:h-[92px] h-[82px] sm:max-w-[172px] max-w-[120px]"
                />
              </div>
              <div className="sm:w-[26.5%] w-6/12 flex lg:justify-end justify-center">
                <img
                  src={WordPress}
                  alt="WordPress"
                  className="w-full sm:h-[56px] h-[46px] sm:max-w-[168px] max-w-[120px]"
                />
              </div>
              <div className="sm:w-[26.5%] w-6/12 flex lg:justify-end justify-center">
                <img
                  src={CloudFlare}
                  alt="CloudFlare"
                  className="w-full sm:h-[47px] h-[37px] sm:max-w-[143px] max-w-[120px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container xl:max-w-[1212px] mx-auto xl:px-3 px-6">
        <div
          className="flex flex-row justify-between flex-wrap"
          data-aos="zoom-in-up"
        >
          {Trueweb.map((a, index) => (
            <div
              className="xl:w-[22.2%] sm:w-[45%] cursor-pointer w-full mb-8 xl:mb-0 flex justify-center flex-col items-center"
              key={index}
            >
              <img
                src={a.Image}
                alt="image"
                className="w-full max-w-[100px] hover:scale-[1.05] transition-all ease-linear duration-500 "
              />
              <h3 className="mt-3 text-black text-center ff_poppins text-[20px] font-bold">
                {a.heading}
              </h3>
              <p className="mt-1 text-black text-[12px] xl:max-w-[252px] font-light text-center ff_poppins">
                {a.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WebHosting;
