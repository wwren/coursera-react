import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, List } from 'reactstrap';

export class DishDetail extends Component {
    renderDish(selectedDish)
    {
        return(
            <Card>
                <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name}/>
                <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    renderComments(dish)
    {
        const comments = dish.comments;
        const listComments = comments.map(comment => {
            let com = comment.comment;
            let comId = comment.id;
            return (        
                 <div key={comId} className="mb-4">
                    <li>{com}</li>
                    <li>-- {comment.author}, {comment.date}</li>
                </div>
            )
        })

        return listComments
    }

    render()
    {
        if (this.props.selectedDish != null)
            {
                return (
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.selectedDish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                                <h4>Comments</h4>
                                <List type="unstyled">
                                    {this.renderComments(this.props.selectedDish)}
                                </List>
                        </div>
                    </div>
                    
                )
            } else {
                return <div></div> ;
        }

    }
}