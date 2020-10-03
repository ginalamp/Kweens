import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
// import { DropdownButton, Dropdown } from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'
import history from '../../history';

const baseUrl = '127.0.0.1:8000/'
class Report extends Component {


  state = {
    title: '',
    description: '',
    abuse_type: ''
  }


  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit = (event) => {
    alert("SUCCESS: Your report has been submitted.")
    history.push({
      pathname: '/',
      state: {
      }
    })
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
                  <div className="form-group">
                    <label>Type of abuse</label>
                    <br></br>
                    <DropdownButton
                      as={ButtonGroup}
                      key={'Secondary'}
                      id={`dropdown-variants-Secondary`}
                      variant='secondary'
                      title='Choose'
                      onChange={this.handleInputChange}
                    >
                      <Dropdown.Item>Gender-based Violence</Dropdown.Item>
                      <Dropdown.Item>Child Abuse</Dropdown.Item>
                      <Dropdown.Item active>
                        Domestic Violence
                    </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Description"
                      value={this.state.descirption}
                      name="description"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  {/* <div className="form-group">
										<label>Group name</label>
										<input
											type="text"
											className="form-control"
											placeholder="Group Name"
											value={this.state.group_name}
											name="group_name"
											onChange={this.handleInputChange}
										/>
										{this.state.errors.group_name ? (
											<div style={errorstyle}>
												{this.state.errors.group_name}
											</div>
										) : null}
									</div>
									<div className="form-group">
										<label>Group description</label>
										<input
											type="text"
											className="form-control"
											placeholder="Description"
											value={this.state.description}
											name="description"
											onChange={this.handleInputChange}
										/>
									</div>

									<Button
										type="button"
										className="btn-success"
										onClick={this.submit}
									>
										Submit
                  </Button>{" "}
                    <Button
                      type="button"
                      className="btn-warning"
                      onClick={this.redirectToGroupPage}
                      >
                      Cancel
                  </Button>{" "}
                */}
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
