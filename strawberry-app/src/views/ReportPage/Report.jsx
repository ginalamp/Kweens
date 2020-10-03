import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, InputGroup, FormControl, Form} from 'react-bootstrap';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const baseUrl = '127.0.0.1:8000/'
class Report extends Component {


  state = {
    title: '',
    description: '',
    abuse_type: 'gbv',
    lon: 0,
    lat: 0,
    address: '',

  }


  handleInputChange = (event) => {
    console.log(event);
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Handle dropdown menu
  handleChange = (event) => {
    console.log("value = ", event.target.value);
    this.setState({abuse_type: event.target.value});
  }

  // location from browser access
  getLocation = (event) => {
    navigator.geolocation.getCurrentPosition( (position) => {
      console.log("lat =", position.coords.latitude, "lon =", position.coords.longitude);
      this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      })
    });
  }


  submit = (event) => {
    console.log("submitting", this.state)
    try {
      axios.post('127.0.0.1:8000/create_report/', {
        title: this.state.title,
        description: this.state.description
      })
        .then(res => {
          console.log("res.data: ", res.data);
          if (res.data.msg === "Success") {
            console.log("woohoooo...")
          } else {
            console.log("Failed", res.data.msg)
          }
        })
    } catch (err) {
      console.log(err);
    }
  }


  render() {
    return (
      <div>
        <Container>
          <div className="card shadow p-3 mb-5 mt-5 bg-white rounded">
            <Row>
              <Col>
                <form>
                  <h3>Create Report</h3>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      value={this.state.title}
                      name="title"
                      onChange={this.handleInputChange}
                    />
                  </div>

                  <label>Type of abuse</label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <select value={this.state.value} onChange={this.handleChange}>
                        <option value="GBV">GBV</option>
                        <option value="Domestic Abuse">Domestic Abuse</option>
                        <option value="Child Abuse">Child Abuse</option>
                        <option value="Other">Other</option>
                      </select>
                    </InputGroup.Prepend>
                    <FormControl 
                      aria-describedby="basic-addon1" 
                      placeholder="Other"
                      name="abuse_type"
                      onChange={this.handleInputChange}
                    />
                  </InputGroup>

                  <div className="form-group">
                    <label>Description</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Description"
                      value={this.state.description}
                      name="description"
                      onChange={this.handleInputChange}
                      />
                  </div>

                    <label>Address</label>
                  <InputGroup className="mb-3">
                    <FormControl 
                      aria-describedby="basic-addon1" 
                      placeholder="Address"
                      onChange={this.handleInputChange}
                      name="address"
                    />
                    <InputGroup.Prepend>
                      <Button 
                        variant="outline-secondary" 
                        onClick={this.getLocation}
                        >Get Current Location</Button>
                    </InputGroup.Prepend>
                  </InputGroup>


                  <label>Who is being abused</label>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Me">Me</option>
                        <option value="Someone living with me">Someone living with me</option>
                        <option value="Someone else">Someone else</option>
                      </select>
                    </InputGroup.Prepend>
                  </InputGroup>

                  <label>Upload evidence</label>
                  <Form.File 
                    id="custom-file"
                    label="Custom file input"
                    custom
                  />

                  <Button
                    type="button"
                    className="btn-danger"
                    onClick={this.submit}
                  >
                    Submit Report
                  </Button>{" "}
                </form>
              </Col>
            </Row>
          </div>
        </ Container>
      </div>

    )
  }

}

export default Report;
