import React from "react";
import './RecentEvent.css';
import { Link } from "react-router-dom";
const RecentEvent = ({ event }) => {
  const { id, name, img1 } = event;

  return (
    <div className="col-md-3 col-sm-6 mt-2 ">
      <Link to={`/details/${id}`} className="cart p-2 m-2 text-decoration-none text-dark">
        <div>
          <img className="pb-2 img-fluid" src={img1} alt="" />
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h6 className="text-decoration-none mt-2">{name}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecentEvent;
