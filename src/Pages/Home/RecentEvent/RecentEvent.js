import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './RecentEvent.css'
const RecentEvent = ({ event }) => {
  const { id, name, img1 } = event;
  return (
    <div className="col-md-3 col-sm-6 mt-2 ">
      <Link to={`/details/${id}`} className="cart  p-2 m-2 text-decoration-none text-dark">
        <div>
          {" "}
          <img className=" w-100 pb-2" src={img1} alt="" />
          <div className="d-flex flex-column justify-content-center align-items-center">
            {" "}
            <h6 className="text-decoration-none">{name}</h6>
           
          </div>
        </div>
      </Link>
      
    </div>
  );
};

export default RecentEvent;
