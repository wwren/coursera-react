import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const minLength = (len) => (val) => !val || val.length > len;
const maxLength = (len) => (val) => !val || val.length <= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleSubmit(values) {
    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  }

  render() {
    return (
      <div>
        <Button outline color="secondary" onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"> Submit Comment</span>
        </Button>
        <Modal isOpen={this.state.isOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div>
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  model=".rating"
                  className="form-control"
                  name="rating"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Control.select>
              </div>
              <div>
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  model=".author"
                  className="form-control"
                  name="author"
                  placeholder="Your Name"
                  validators={{
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </div>
              <div>
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea
                  model=".comment"
                  className="form-control"
                  name="comment"
                  rows="6"
                />
              </div>
              <div>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </div>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CommentForm;
