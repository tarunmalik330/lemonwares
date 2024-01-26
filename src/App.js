
import './App.css';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import Header from './components/Header';
import NavSec from './components/NavSec';
import RealStories from './components/RealStories';
import ServeWebsite from './components/ServeWebsite';
import WebHosting from './components/WebHosting';
import WebsiteAwesome from './components/WebsiteAwesome';
import BackToTop from "./assets/images/png/BackToTop.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Loader from "./components/Loader"

function App() {
  // -------------------preloader------------------------
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    document.body.classList.add("body-bg")
    setScreenLoading(true);
    setTimeout(() => {
      document.body.classList.remove("body-bg")
      setScreenLoading(false);
    }, 3000);
  }, []);
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // -----------------------Aos-------------------------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <>
          <div className='overflow-hidden'>
            <NavSec />
            <Header />
            <WebHosting />
            <GetStarted />
            <RealStories />
            <ServeWebsite />
            <WebsiteAwesome />
            <Footer />
          </div>
          <div onClick={() => top()} className={backToTop ? "shadow-[0_5px_16px_rgba(225,_225,_225,_1)] fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center rounded-[50px] bg-[#b00000] cursor-pointer border-[2px] border-solid border-white transition-all ease-linear duration-300 right-[2%] z-[2]" : "hidden"}>
            <img src={BackToTop} alt='BackToTop' />
          </div>
        </>
      )}
    </>
  );
}

export default App;
