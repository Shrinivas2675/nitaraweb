import { Button, Container } from "@mui/material";
import HomeFooter from "../components/Home/HomeFooter";
import GetInTouch from "../components/Home/GetItTouch/GetInTouch";
import Collaboration from "../components/Home/Collaboration";
import MeetTheTeam from "../components/Home/MeetTheTeam/MeetTheTeam";
import OurSolution from "../components/Home/OutSolution/OurSolution";
import AboutUs from "../components/Home/AboutUs/AboutUs";
import StakeHolderDetail from "../components/Home/StakeHolderDetail";
import Gallery from "../components/Gallery/Gallery";
import { Element, scroller } from "react-scroll";
import { useEffect } from "react";
import { HOME_SCROLL_TO } from "../utils/constant";
import RightScrollCircle from "../components/Home/RightScrollCircle";

const Home = (props) => {
  const { scrollTo, setScrollTo } = props;
  useEffect(() => {
    if (scrollTo) {
      scrollToElement();
    }
  }, [scrollTo]);

  const scrollToElement = () => {
    scroller.scrollTo(scrollTo, {
      duration: 1500,
      smooth: true,
      offset: [HOME_SCROLL_TO.home, HOME_SCROLL_TO.nitara].includes(scrollTo)
        ? -100
        : 0,
    });
  };

  return (
    <>
      {/* 1st Content */}
      <Element name={HOME_SCROLL_TO.home}></Element>
      <Container className="mt-40">
        <h1 className="home-main-title mt-9">
          INDIA'S FIRST <br />
        </h1>
        <div className="home-scroll-circle">
          <RightScrollCircle
            active={scrollTo}
            handleClick={setScrollTo}
            name={HOME_SCROLL_TO.home}
          />
          <RightScrollCircle
            active={scrollTo}
            handleClick={setScrollTo}
            name={HOME_SCROLL_TO.nitara}
          />
          <RightScrollCircle
            active={scrollTo}
            handleClick={setScrollTo}
            name={HOME_SCROLL_TO.aboutUs}
          />
          <RightScrollCircle
            active={scrollTo}
            handleClick={setScrollTo}
            name={HOME_SCROLL_TO.gallery}
          />
          <RightScrollCircle
            active={scrollTo}
            handleClick={setScrollTo}
            name={HOME_SCROLL_TO.contactUs}
          />
        </div>
        <h1 className="home-main-title mt-4">PRECISION DAIRY PLATFORM</h1>
        <div className="flex justify-center">
          <hr className="home-main-title-bottom-line mt-5" />
        </div>
        <Element name={HOME_SCROLL_TO.nitara}>
          <h4 className="home-sub-title mt-6">
            NITARA is the one-stop artificial intelligence-powered solution for
            all businesses in the dairy ecosystem and dairy animal management.
          </h4>
        </Element>
        <br />
       
        <br />
        <img
          src="https://static.wixstatic.com/media/c6a68f_a2123a9ce17f440387cf72480be59fb7~mv2.png/v1/fill/w_1215,h_141,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11111.png"
          alt="11111.png"
          className="home-img1"
        />
      </Container>
      <div>
        <video
          className="home-video1"
          role="presentation"
          preload="auto"
          src="https://video.wixstatic.com/video/c6a68f_c9f21f8b81d3403fae4fbd90ad3a975e/1080p/mp4/file.mp4"
          muted={true}
          autoPlay
          loop={true}
        ></video>
      </div>
      <StakeHolderDetail />
      <OurSolution />
      <Element name={HOME_SCROLL_TO.aboutUs}>
        <AboutUs />
      </Element>
      <MeetTheTeam />
      <Collaboration />
      <Element name={HOME_SCROLL_TO.gallery}>
        <Gallery />
      </Element>
      <Element name={HOME_SCROLL_TO.contactUs}>
        <GetInTouch />
      </Element>
      <HomeFooter />
    </>
  );
};

export default Home;
