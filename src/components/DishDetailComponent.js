import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, List } from "reactstrap";

function RenderDish({ selectedDish }) {
  return (
    <Card>
      <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
      <CardBody>
        <CardTitle>{selectedDish.name}</CardTitle>
        <CardText>{selectedDish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comments }) {
  const listComments = comments.map((comment) => {
    return (
      <div key={comment.id} className="container mb-4">
        <li>{comment.comment}</li>
        <li>
          -- {comment.author},
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(comment.date)))}
        </li>
      </div>
    );
  });
  return (
    <div className="container">
      <h4>Comments</h4>
      <List type="unstyled">{listComments}</List>
    </div>
  );
}

const DishDetail = (props) => {
  if (props.selectedDish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish selectedDish={props.selectedDish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.selectedDish.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
