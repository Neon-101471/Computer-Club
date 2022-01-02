import React, { useEffect, useState } from "react";
import RecentEvent from "../RecentEvent/RecentEvent";

const RecentEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("recentEvents.JSON")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="container">
      <h2 className=" ">
        RECENT EVENTS <hr />
      </h2>
     <div classNamed-flex>
     <div className="row">
        {events.map((event) => (
          <RecentEvent key={event.id} event={event}></RecentEvent>
        ))}
      </div>
     </div>
    </div>
  );
};

export default RecentEvents;
