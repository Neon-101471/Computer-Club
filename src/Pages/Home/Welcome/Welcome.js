import React from "react";
import ReactPlayer from "react-player";

const Welcome = () => {
  return (
    <div>
      <div className="mt-5 container mb-5">
        <h4>
          WELCOME TO <hr />{" "}
        </h4>
        <h1>BRAC University Computer Club</h1>
        <div className="row ">
          <div className="col-md-5 mt-3 p-2">
            <ReactPlayer
              width="100%"
              height="300px"
          
              controls
              url="https://youtu.be/7N2jks0AQb4"
            ></ReactPlayer>
          </div>
          <div className="col-md-7  mt-3">
          <h5>
            BRAC University Computer Club (BUCC) is the oldest club of BRAC
            university founded by Mr. Annajiat Alim Rasel in 2001. This club
            consists of a youthful team of passionate and hardworking Tech
            Enthusiast students. They strive to learn more about the advanced
            technologies of the 21st century. The club regularly offers
            workshops on web development, graphics designing, problem solving,
            and many other technological fields. To get the students engaging
            they organize contests on competitive programming, graphics
            designing, and even gaming, etc. Seminars and webinars are also held
            with the participation of reputed personals in the Technology sector
            of Bangladesh.
          </h5>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Welcome;
