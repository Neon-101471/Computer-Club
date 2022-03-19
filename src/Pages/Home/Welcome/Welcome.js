import React from "react";
import ReactPlayer from "react-player";

const Welcome = () => {
  return (
    <div>
      <div className="mt-5 container mb-5">
        <h4>
          WELCOME TO <hr />{" "}
        </h4>
        <h1>RMSTU Computer Club</h1>
        <div className="row ">
          <div className="col-md-5 mt-3 p-2">
            <ReactPlayer
              width="100%"
              height="310px"
              controls
              url="https://youtu.be/K4TOrB7at0Y"
            ></ReactPlayer>
          </div>
          <div className="col-md-7  mt-3 d-flex justify-content-center align-items-center">
            <h5 style={{ textAlign: 'justify' }}>
              RMSTU Computer Club (RCC) is the oldest club of Rangamati Science & Technology university founded by Rana Chakma (Former Chairman, CSE Dept.) and students of Computer Science and Engineering Department, in 2001. This club consists of a youthful team of passionate and hardworking tech enthusiast students. They strive to learn more about the advanced technologies of the 21st century. The club regularly offers programming contest, workshops on web development, graphics designing, problem solving, and many other technological fields. To get the students engaging they organize contests on competitive programming, graphics
              designing, and even gaming, etc. Seminars and webinars are also held with the participation of reputed personals in the Technology sector of Bangladesh.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;