import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import Welcome from "../Welcome/Welcome";
import WhyJoinUs from "../WhyJoinUs/WhyJoinUs";
import Workshops from "../Workshops/Workshops";
import RecentEvents from "../RecenEvents/RecentEvents";
import ContactInfo from '../ContactInfo/ContactInfo';

const Home = () => {
    return (
        <div className="mb-5">
            <HomeBanner />
            <Welcome></Welcome>
            <Workshops></Workshops>
            <WhyJoinUs></WhyJoinUs>
            <RecentEvents></RecentEvents>
            <ContactInfo />
        </div>
    );
}
export default Home;
