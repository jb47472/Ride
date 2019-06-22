import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid";
import { Input, FormBtn } from "../Form";

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
                    <Col size="md-12">
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
                            <br></br>
                            <Input
                                value={this.state.Make}
                                onChange={this.handleInputChange}
                                name="model"
                                placeholder="Model (required)"
                            />
                            <br></br>
                            <Input
                                value={this.state.Make}
                                onChange={this.handleInputChange}
                                name="model"
                                placeholder="Model (required)"
                            />
                            <br></br>
                            <FormBtn
                                disabled={!(this.state.Car && this.state.Make)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit car
                            </FormBtn>
                        </form>
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default Cars;
