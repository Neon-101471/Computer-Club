import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const Workshop = ({ workshop }) => {
  const { name, description, img } = workshop;
  return (
    <>
      <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }} className="d-flex">
          {/* <img style={{ width: "auto", height: "20px" }} src={img} alt="" /> */}
          <CardMedia
                component="img"
                style={{ width: 'auto', height: '30px', margin: '0 auto',marginTop:"20px" }}
                image={img}
                alt="green iguana"
            />

          <CardContent>
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="gray">
              {description}
            </Typography>
          </CardContent>

          {/* <div class="d-flex">
            <div>
              <img style={{ width: "20px", height: "20px" }} src={img} alt="" />
            </div>
            <div><h6>{name}</h6></div>
          </div> */}
        </Card>
      </Grid>
      {/* <div class="container">
        <div class="col-md-4">
          <div>
            {" "}
            <img style={{ width: "auto", height: "20px" }} src={img} alt="" />
          </div>
          <div>
            <h1>{name}</h1>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Workshop;
