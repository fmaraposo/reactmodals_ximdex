import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import myData from '../../myData.json';
import './ModalForm.css';

class ModalForm extends React.Component {
  state = {
    title: '',
    text: '',
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    myData.push(this.state);
    this.props.hideModal();
  };

  closeForm = (event) => {
    this.props.hideModal();
    event.preventDefault();
  };
  render() {
    return (
      <div className="modalForm">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="title"
              placeholder="Enter a new Title"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter some text"
              name="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </Form.Group>
          <div className="FormBtnsContainer">
            <Button
              variant="primary"
              type="submit"
              onClick={this.handleFormSubmit}
              className="FormBtn"
            >
              Submit
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={this.closeForm}
              className="FormBtn"
            >
              Close
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default ModalForm;
