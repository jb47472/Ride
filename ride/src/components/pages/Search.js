import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import DeleteBtn from "../DeleteBtn";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";

class Cars extends Component {

    state = {
        Car: [],
        Make: "",
        Model: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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
                                name="make"
                                placeholder="Make (required)"
                            />
                            <Input
                                value={this.state.Make}
                                onChange={this.handleInputChange}
                                name="model"
                                placeholder="Model (required)"
                            />
                            <TextArea
                                value={this.state.Model}
                                onChange={this.handleInputChange}
                                name="year"
                                placeholder="Year (Optional)"
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
