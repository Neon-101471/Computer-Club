import React from "react";
import RecentEvents from "../RecenEvents/RecentEvents";
import Welcome from "../Welcome/Welcome";
import WhyJoinUs from "../WhyJoinUs/WhyJoinUs";
import Workshops from "../Workshops/Workshops";

const Home = () => {
  return (
    <div className="my-5">
      <Welcome></Welcome>
      <Workshops></Workshops>
      <WhyJoinUs></WhyJoinUs>
      <RecentEvents></RecentEvents>
    </div>
  );
};

export default Home;
