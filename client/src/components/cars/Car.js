import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  LeftHalf,
  Title,
  Paragraph,
  CarCard,
  RightHalf,
  ImgCar,
} from "../styles/DashBoard";
import { Button } from "../../styled_component/styledComponents";

const Car = (props) => {
  return (
    <>
      <CarCard key={props.car.id}>
        <LeftHalf>
          <ImgCar src={`${props.car.file}`} />
        </LeftHalf>
        <RightHalf>
          <Link to={{ pathname: `/car_profile/${props.car.id}` }}>
            <Title style={{ display: "flex", justifyContent: "center" }}>
              {props.car.year} {props.car.make} {props.car.model}
            </Title>
          </Link>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to={{ pathname: `/car_profile/${props.car.id}` }}>
              <Button>Profile</Button>
            </Link>
          </div>
        </RightHalf>
      </CarCard>
    </>
  );
};

export default Car;
