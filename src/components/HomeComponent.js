import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else {
    if (item != undefined) {
      return (
        <FadeTransform
          in
          transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
        >
          <Card>
            <CardImg src={baseUrl + item.image} alt={item.name}></CardImg>
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
              {item.designation ? (
                <CardSubtitle>{item.designation}</CardSubtitle>
              ) : null}
              <CardText>{item.description}</CardText>
            </CardBody>
          </Card>
        </FadeTransform>
      );
    } else {
      return <div> {item} </div>;
    }
  }
}

function Home({
  dish,
  leader,
  promotion,
  dishesLoading,
  dishesErrMess,
  promosLoading,
  promosErrMess,
  leadersLoading,
  leadersErrMess,
}) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={dish}
            isLoading={dishesLoading}
            errMess={dishesErrMess}
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={promotion}
            isLoading={promosLoading}
            errMess={promosErrMess}
          ></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={leader}
            isLoading={leadersLoading}
            errMess={leadersErrMess}
          ></RenderCard>
        </div>
      </div>
    </div>
  );
}

export default Home;
