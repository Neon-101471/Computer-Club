import React from "react";
import ReactPlayer from "react-player";
import WhyJoinUs from "../../WhyJoinUs/WhyJoinUs";

const About = () => {
    return (
        <div className="container mt-5">
            <h1>
                About RCC<hr />
            </h1>
            <div className=" mt-5 mb-5">
                <ReactPlayer
                    width="100%"
                    height="450px"
                    controls
                    url="https://youtu.be/7N2jks0AQb4"
                ></ReactPlayer>
                <div>
                    <p className=" mt-5" style={{ "text-align": "justify" }}>RMSTU Computer Club (RCC) is the oldest club of Rangamati Science & Technology university founded by Rana Chakma (Former Chairman, CSE Dept.) and students of Computer Science and Engineering Department, in 2001. This club consists of a youthful team of passionate and hardworking tech enthusiast students. They strive to learn more about the advanced technologies of the 21st century. The club regularly offers programming contest, workshops on web development, graphics designing, problem solving, and many other technological fields. To get the students engaging they organize contests on competitive programming, graphics designing, and even gaming, etc. Seminars and webinars are also held with the participation of reputed personals in the Technology sector of Bangladesh. We also organised national level competitions revolving around graphics, app design, and gaming. a national competition is the flagship event of the endeavor RMSTU Week. The main objective of the club is to keep the students updated in this era of technology and also develop their individual networking skills by promoting the club motto Upgrade yourself. Seminars and webinars are also held with the participation of reputed personals in the Technology sector of Bangladesh. We also organised national level competitions revolving around graphics, app design, and gaming. a national competition is the flagship event of the endeavor RMSTU Week. The main objective of the club is to keep the students updated in this era of technology and also develop their individual networking skills by promoting the club motto Upgrade yourself.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div>
                        <h6 className="text-info">RMSTU Computer Club</h6>
                        <h2>The Community</h2>
                        <p>In continuation, RCC is now one of the biggest and most successful clubs in Rangamati Science & Technology University, Bangladesh by its different activities over the years ever since the club was started with 60 active members from all different discipline within RMSTU.</p>
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
                        <h5 className="text-info">Events and Activities</h5>
                        <h2>Our Success</h2>
                        <p>They strive to learn more about the advanced technologies of the 21st century. The club regularly offers programming contest, workshops on web development, graphics designing, problem solving, and many other technological fields. To get the students engaging they organize contests on competitive programming, graphics designing, and even gaming, etc. Seminars and webinars are also held with the participation of reputed personals in the Technology sector of Bangladesh. We also organised national level competitions revolving around graphics, app design, and gaming. a national competition is the flagship event of the endeavor RMSTU Week. The main objective of the club is to keep the students updated in this era of technology and also develop their individual networking skills by promoting the club motto Upgrade yourself. Seminars and webinars are also held with the participation of reputed personals in the Technology sector of Bangladesh. We also organised national level competitions revolving around graphics, app design, and gaming. a national competition is the flagship event of the endeavor RMSTU Week.</p>
                    </div>
                </div>
            </div>
            <WhyJoinUs></WhyJoinUs>
            <div class="row mt-5 mb-5">
                <div class="col-sm ">
                    <div class="d-flex flex-column justify-content-center align-items-center">
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
                        <h3 class="mb-5">Like Us On LinkedIn</h3>
                        <img
                            class="w-25 m-auto "
                            src="https://cliply.co/wp-content/uploads/2021/02/372102050_LINKEDIN_ICON_TRANSPARENT_1080.gif"
                            alt=""
                        />
                    </div>
                </div>
                <div class="col-sm">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <h3 class="mb-5"> Like Us On Youtube</h3>
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
