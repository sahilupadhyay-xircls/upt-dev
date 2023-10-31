import React from "react";
import MediaEmbed from "./MediaEmbed";
import VideoThumbnail from "./img/video_thumbnail.png";
import { valuesData, missionPtsData, WWBelieveData } from "./data";
import './visionCss.css'
import Navbar from "../../utilities/navbar/Navbar";
import SubNavbar from "../../utilities/navbar/SubNavbar";

const VisionPage = () => {



  const Values = (props) => {
    const { id, imgSrc, title, subTitle } = props;
    return (
      <div className="mt-2  col-lg-4 col-md-6" key={id}>
        <img className="values-img pt-5 pb-3" src={imgSrc} alt={title + ' img'}
          style={{ width: '55px' }} />
        <h2 className="mt-1 text-black text-start d-block fs-2">{title}</h2>
        <h4 style={{ lineHeight: '24px' }} className="text-dark text-start lh24 fs18">{subTitle}</h4>
      </div>
    );
  };

  const MissionPts = ({ id, content }) => {
    return (
      <div className="col-lg-12 mt-2" key={id}>
        <div className="d-flex">
          <div style={{ top: '6px', width: '30px' }} className="position-relative">
            <svg width="28" height="28" viewBox="0 -0.7 4.551 4.551" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.215 2.853c.056-.053.087-.08.115-.11C2.234 1.798 3.229.945 4.224.096c.038-.032.077-.073.12-.084.054-.015.141-.022.165.007.032.039.038.124.018.177a.469.469 0 0 1-.133.161c-.309.274-.627.541-.931.822A188.554 188.554 0 0 0 1.57 2.953c-.274.26-.381.271-.633-.007a33.014 33.014 0 0 1-.822-.996.722.722 0 0 1-.057-.095C.021 1.794 0 1.727.067 1.678c.077-.054.131.003.177.06.046.059.085.123.134.178.152.172.666.757.831.939Z" fill="#000" /></svg>
          </div>
          <div className="mt-1 ms-2" >
            <h3>{content}</h3>
          </div>
        </div>
      </div>
    );
  };

  const WWBelieve = ({ id, title, desc, desc2, desc3, imgSrc }) => {
    return (
      <div className="col-sm-12 col-12 text-start mt-5 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row gy-2">
            <div className="col-sm-2 col-12 d-flex text-center justify-content-center align-items-center">
              <img style={{ width: '90px' }} className=" mt-3" src={imgSrc} />
            </div>
            <div className="col-sm-10 col-12">
              <h1 className="mb-3 ">{title}</h1>
              <h5 className=" mb-0">{desc}</h5>
              {desc2 ? <h5 className="mt-1  mb-0 ">{desc2}</h5> : null}
              {desc3 ? <h5 className="mt-1  mb-0">{desc3}</h5> : null}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar position={'notFixed'} />
      <SubNavbar title="vision & mission" />
      {/* Our Vision & Mission */}
      <div className="d-flex flex-column justify-content-center mt200">
        <h1 className="display-1 text-center main-heading fw-bolder pb-3"
        >Our Vision & Mission</h1>
        <div className="justify-content-center row ">
          <div className="col-lg-9 col-md-10 col-10">
            <h3 className=" text-center text-black sub-title py-0 ">
              To build a world where businesses, globally, can instantly connect to fulfill their mutually compatible marketing goals - with no third-party involvement or personal data violations.
            </h3>
          </div>
        </div>
      </div>


      <div className="justify-content-center container-lg" style={{ paddingTop: '6rem' }}>
        <div className="row text-start fs-3 mx-4 text-secondary-emphasis">
          <h4 className="col-12 col-lg mission-1">A global, verified network of companies, businesses, marketers & content publishers.</h4>
          <h4 className="col-12 col-lg mission-2">A transparent marketing platform that they can trust.</h4>
          <h4 className="col-12 col-lg mission-3">Affordable, yet hyper-precise.</h4>
        </div>
      </div>
      <div className=" d-flex  justify-content-center align-items-center gap-1 px-1 mt-5">
        <h2 style={{ maxWidth: '70%', lineHeight: '1.7rem' }} className="btn main-btn-blue rounded-pill fs-5 py-2 px-4 m-0 vision-download-btn">DOWNLOAD OUR VISION AND MISSION DOCUMENT</h2>
      </div>


      {/* What We Believe */}
      <div className="justify-content-center row mt170 ">
        <div className="col-lg-9 col-md-10 col-10">
          <h1 className=" text-center display-3 fw-bolder pt-5 ">What We Believe</h1>
          <div className="row gy-5 mt-2">
            {WWBelieveData.map((data) => (
              <div className="col-sm-12 col-12 text-start mt-5 d-flex justify-content-center align-items-center">
                <div className="container">
                  <div className="row gy-2">
                    <div className="col-sm-2 col-12 d-flex text-center justify-content-center align-items-center">
                      <img style={{ width: '90px' }} className=" mt-3" src={data.imgSrc} />
                    </div>
                    <div className="col-sm-10 col-12">
                      <h1 className="mb-3 ">{data.title}</h1>
                      <h5 className=" mb-0">{data.desc}</h5>
                      {data.desc2 ? <h5 className="mt-1  mb-0 ">{data.desc2}</h5> : null}
                      {data.desc3 ? <h5 className="mt-1  mb-0">{data.desc3}</h5> : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Our Mission In Action */}
      <div className="justify-content-center mt170 row ">
        <div className="col-lg-8 col-md-8 col-10">
          <div className="pt-2 row align-items-center gy-4 text-center">
            <div className="col-lg-12 mb-5">
              <h2 className="display-3 text-center fw-bold pb-0">
                Our Mission in Action
              </h2>
            </div>
            <div className="col-lg-12 mt-0">
              <div className="mission-action-container text-start">
                <div className="pb-3 ">
                  <h1 className="">To empower them to market on their own terms, we will always ensure that companies:</h1>
                </div>
                {missionPtsData.map((item) => (
                  <MissionPts key={item.id}
                    content={item.content} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Our Culture */}
      <div className="justify-content-center mt170 row bg-black py-5">
        <div className="col-lg-9 col-10">
          <div className="pt-2 row align-items-center gy-4 text-white text-start culture-row">
            <div className="col-lg-6">
              <h1 className="display-2">Our Culture</h1>
            </div>
            <div className="col-lg-6">
              <h1 className="pb-0 mt-3">Attract. Never Promote.</h1>
              <h4 className="culture-desc">XIRCLS overturns the traditional mindset of persuasion & aggression - an outward flow of energy and therefore wasteful - to create a culture of value creation that is sustainable and benefits everyone involved.</h4>
            </div>
            <div className="col-lg-6">
              <h1 className=" pb-0 mt-3">Inspire Trust</h1>
              <h4 className="culture-desc">Through the principle of service, we aim to create a global community of individuals who consistently work to become pillars of support. We are the people you turn to when the road ahead seems unclear. Knowing fully well that when you reach out to us, you will receive what is best for you.</h4>
            </div>
            <div className="col-lg-6">
              <h1 className=" pb-0 mt-3">Always Be of Service.</h1>
              <h4 className="culture-desc">To constantly deliver value, we assume a consciously directed state of inner reflection that can be summed up with the question: “How can I be of service to someone today?”<br />
                Service is not just a concept at XIRCLS. It is the greater aim that we, and the people who join us on our journey, live by. It gives purpose to our interactions with everyone around us, from clients and coworkers to friends & family to a stranger on the street.</h4>
            </div>
          </div>
        </div>
      </div>


      {/* video container */}
      <div className="justify-content-center mt170 row align-items-center pb-4" style={{ backgroundColor: 'rgb(229, 231, 235)' }}>
        <div className="col-lg-9 col-10">
          {/* align-items-center */}
          <div className="pt-5 row gx-5 h-100 align-items-center justify-content-center">
            <div className="col-lg-12">
              <h1 className="display-3 fw-bolder mb-5">
                Why Culture Is Important To Us.
              </h1>
            </div>
            <div className="d-flex col-xl-6 col-md-9 col-lg-10 col-12 mt-3 align-items-start justify-content-center">
              <MediaEmbed
                mediaUrl="https://api.xircls.com/static/images/website-slide/videos/xircls_in_three_words7.mp4"
                thumbnailUrl={VideoThumbnail}
              />
            </div>
            <div className="col-xl-6 col-md-9 col-lg-10 col-12 mt-3 h-100 ">
              <div className="container video text-start h-100">
                <div className="row gy-3 h-100 ">
                  <ol className=" ">
                    <div className="col-12 mb-3">
                      <li className="text-dark fs-4">
                        We believe it is crucial to our long-term success that the values we’ve defined for ourselves and our team bind us to a common purpose greater than our individual selves and keep us on path with our mission.
                      </li>
                    </div>
                    <div className="col-12 mb-3">
                      <li className="text-dark fs-4">
                        To counter a naively self-celebratory culture that idolizes the grifter hero who goes for all he can get, regardless of its side-effects.
                      </li>
                    </div>
                    <div className="col-12 mb-3">
                      <li className="text-dark fs-4">
                        To build a global team of employees, interns and partners who are aligned with our values & goals.
                      </li>
                    </div>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Our Core Values */}
      <div className="justify-content-center row mt170 ">
        <div className="col-xl-9 col-lg-10 col-10">
          <h1 className=" text-center display-3 fw-bolder  mb-5  ">Our Core Values</h1>
          <div className="  m-auto justify-content-between mt-3 row text-start">
            {valuesData.map((item) => (
              <Values key={item.id}
                title={item.title}
                subTitle={item.subTitle}
                imgSrc={item.imgSrc} />
            ))}
          </div>
        </div>
      </div>
    </div >
  );
};


export default VisionPage;
