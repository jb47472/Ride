import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Cars extends Component {
  // Setting car component's initial state
  state = {
    Car: [],
    Make: "",
    Model: ""
  };

  // When the component mounts, load all cars and save them to this.state.cars
  componentDidMount() {
    this.loadCars();
  }

  // Loads all cars  and sets them to this.state.car
  loadCars = () => {
    API.getCars()
      .then(res =>
        this.setState({ Car: res.data, Make: "", Model: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a car from the database with a given id, then reloads cars from the db
  deleteCars = id => {
    API.deleteCars(id)
      .then(res => this.loadCars())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API method to save the car data
  // Then reload cars from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.Car && this.state.Make) {
      API.saveCars({
        Cars: this.state.Cars,
        Make: this.state.Make,
        Model: this.state.Model
      })
        .then(res => this.loadCars())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What car would you like?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.Cars}
                onChange={this.handleInputChange}
                name="Cars"
                placeholder="Car (required)"
              />
              <Input
                value={this.state.Make}
                onChange={this.handleInputChange}
                name="make"
                placeholder="make (required)"
              />
              <TextArea
                value={this.state.Model}
                onChange={this.handleInputChange}
                name="model"
                placeholder="model (Optional)"
              />
              <FormBtn
                disabled={!(this.state.Car && this.state.Make)}
                onClick={this.handleFormSubmit}
              >
                Submit car
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>On My List</h1>
            </Jumbotron>
            {this.state.Car.length ? (
              <List>
                {this.state.Car.map(Car => {
                  return (
                    <ListItem key={Cars._id}>
                      <a href={"/car/" + Cars._id}>
                        <strong>
                          {Car.Make} by {Car.Model}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteCars(Cars._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>no results</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cars;
