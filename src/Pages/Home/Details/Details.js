import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from "react-bootstrap";

const Details = () => {
  const { detailsId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch("/recentEvents.JSON")
      .then((res) => res.json())
      .then((data) => {
        const matchData = data.find((event) => event.id === detailsId);
        setDetails(matchData);
        console.log(matchData);
      });
  }, [detailsId]);

  return (
    <div>
      <Container className="pt-5 mb-5">
        <p>{details?.details}</p>
        <img className="w-100 py-5" src={details?.img2} alt="" />
        <p>{details?.details1}</p>
        <img className="w-100 py-5" src={details?.img3} alt="" />
        <p>{details?.details2}</p>
      </Container>
    </div>
  );
};

export default Details;