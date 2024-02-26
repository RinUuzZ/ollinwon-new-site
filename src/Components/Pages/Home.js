import React from 'react';
import './Home.css';
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";

const Home = () => {
  const videoUrl = 'https://player.vimeo.com/external/342867287.sd.mp4?s=0cb8b28bf29ac7fd7e4d2b10f30343aeaa742aeb&profile_id=164&oauth2_token_id=57447761';

  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={videoUrl} autoPlay muted loop></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span className="smallText">
            transforming Ideas Into Reality
          </span>

          <h1 className="homeTittle">
            Ollinwon focus to have satisfied customers by providing the best service that we can...
          </h1>

        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <a href="https://www.facebook.com/profile.php?id=61551080944269&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className='icon'>
              <FiFacebook style={{ cursor: 'pointer' }} />
            </a>
            <a href="https://www.instagram.com/ollinwon?igsh=MXZ0a2NiNHNkYjRxZw==" target="_blank" rel="noopener noreferrer" className='icon'>
              <BsInstagram style={{ cursor: 'pointer' }} />
            </a>
            <a href="https://wa.me/message/PK6UNO6XDCFUG1" target="_blank" rel="noopener noreferrer" className='icon'>
              <FaWhatsapp style={{ cursor: 'pointer' }} />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Home;
