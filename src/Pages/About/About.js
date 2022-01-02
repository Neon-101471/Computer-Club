import React from "react";
import ReactPlayer from "react-player";
import WhyJoinUs from "../Home/WhyJoinUs/WhyJoinUs";
const media = [
  {
    name: "Like Us On Facebook",
    img: "https://png.pngtree.com/png-clipart/20180515/ourmid/pngtree-facebook-logo-facebook-icon-png-image_3566127.png",
  },
  {
    name: "Like Us On LinkedIn",
    img: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    name: "Like Us On Youtube",
    img: "https://www.pngitem.com/pimgs/m/525-5259172_youtube-youtube-icon-png-circle-transparent-png.png",
  },
];
const About = () => {
  return (
    <div className="container mt-5">
      <h1>
        About <hr />{" "}
      </h1>
      <div className=" mt-5 mb-5">
        {" "}
        <ReactPlayer
          width="100%"
          height="450px"
          controls
          url="https://youtu.be/7N2jks0AQb4"
        ></ReactPlayer>
        <div>
          <p className=" mt-5" style={{ "text-align": "justify" }}>
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
            of Bangladesh. The club has also started a new edition of their
            activity called ‘BUCC Week’ a week-long event to get the students
            participating in almost all sectors of technology. We also organised
            national level competitions revolving around graphics, app design,
            and gaming. ‘R@D!X’, a national competition is the flagship event of
            the endeavor ‘BUCC Week’. The main objective of the club is to keep
            the students updated in this era of technology and also develop
            their individual networking skills by promoting the club motto
            ‘Upgrade yourself’.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div>
            {" "}
            <h6>Computer Club</h6>
            <h2>The Community</h2>
            <p>
              In continuation, ACC is now one of the biggest and most successful
              clubs in American International University-Bangladesh by its
              different activities over the years ever since the club was
              started with 60 active members from all different discipline
              within AIUB.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="w-100"
            src="https://i1.wp.com/aiubcc.org/wp-content/uploads/2020/12/Group-592.png?w=828&ssl=1"
            alt=""
          />
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-md-6">
          <img
            className="w-100"
            src="https://i1.wp.com/aiubcc.org/wp-content/uploads/2021/04/about-page.jpg?w=530&ssl=1"
            alt=""
          />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div style={{ "text-align": "justify" }}>
            <h5>Events and Activities</h5>
            <h2>Our Success</h2>
            <p>
              Since ACC’s inception, AIUB Computer Club (ACC) has devoted to
              serve AIUB’s students with full of its resources and its
              interests. They have successfully completed many events, however,
              among them Computer Science Festival,featuring programming
              contest, gaming contest, idea or concept presentation, application
              showcasing for mobile, web, and desktop, and networking contest,
              brought its biggest success and appreciation. ACC has related with
              various organizations, for example : Mozilla Bangladesh, Microsoft
              Student Partner, BASIS Student Forum. with them ACC organized so
              many events . ACC has been active since it started, and it will be
              organizing such events like these, which are actually related with
              modern technology and current job market. Being an ACC member, on
              the other hand, means privileged with more than just adequate
              facilities: gaming, participating in dissimilar workshops, for
              instance, Firefox OS application development, and Android
              development, and contests at the first place, touring in several
              places etc.
            </p>
          </div>
        </div>
      </div>
      <WhyJoinUs></WhyJoinUs>
      {/* {
    name: "Like Us On Facebook",
    img: "https://png.pngtree.com/png-clipart/20180515/ourmid/pngtree-facebook-logo-facebook-icon-png-image_3566127.png",
  },
  {
    name: "Like Us On LinkedIn",
    img: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    name: "Like Us On Youtube",
    img: "https://www.pngitem.com/pimgs/m/525-5259172_youtube-youtube-icon-png-circle-transparent-png.png",
  }, */}
      <div class="row mt-5 mb-5">
        <div class="col-sm ">
          <div class="d-flex flex-column justify-content-center align-items-center">
            {" "}
            <h3 class="mb-5">Like Us On Facebook</h3>
            <img
              class="w-25 m-auto "
              src="https://cliply.co/wp-content/uploads/2019/07/371907490_FACEBOOK_ICON_400px.gif"
              alt=""
            />
          </div>
        </div>
        <div class="col-sm">
          <div class="d-flex flex-column justify-content-center align-items-center">
            {" "}
            <h3  class="mb-5">Like Us On LinkedIn</h3>
            <img
              class="w-25 m-auto "
              src="https://cliply.co/wp-content/uploads/2021/02/372102050_LINKEDIN_ICON_TRANSPARENT_1080.gif"
              alt=""
            />
          </div>
        </div>
        <div class="col-sm">
          <div class="d-flex flex-column justify-content-center align-items-center">
            {" "}
            <h3  class="mb-5"> Like Us On Youtube</h3>
            <img
              class="w-25 m-auto "
              src="https://cliply.co/wp-content/uploads/2019/07/371907120_YOUTUBE_ICON_400px.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
