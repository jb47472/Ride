import React, { Component } from 'react';
import './style.css';



//creating validating method for the email users input
//a little bit of code that can describe text patterns using wildcards and other special characters.

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    //validating form errrors that are being left empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    ///validate the form thats filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",

            // errors holds the strings of errors that might pop up

            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        };
    }

    // e stands for = event that will happen (es6 magic)
    handlesubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
      ----User Info submitted---
      User Name: ${this.state.firstName}
      User Last Name: ${this.state.lastName}
      Email: ${this.state.email}
      Password: ${this.state.password}
      `)
        } else {
            console.error('form invalid - display error');
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        //running console log making sure that it works

        // console.log("Name: ", name);
        // console.log("Value", value);



        //created a switch statement that will evaluate the expressions 
        //that were set in the initial "state" & matching the value to a case. 
        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 3 ? 'minimum of 4 characters required'
                    : "";
                break;

            case 'lastName':
                formErrors.lastName = value.length < 4
                    ? 'minimum of 4 characters required'
                    : "";
                break;

            case 'email':
                formErrors.email =
                    emailRegex.test(value)
                        ? ''
                        : 'invalid email adress';
                break;
            case 'password':
                formErrors.password = value.length < 4
                    ? 'minimum of 4 characters required'
                    : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () =>
            console.log(this.state));

    };

    render() {
        ////updating the form-error property & destructuring 
        const { formErrors } = this.state;


        return (
            <div className="Wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    <form onSubmit={this.handlesubmit} noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                className={formErrors.firstName.lenght > 0 ? "error" : null}
                                placeholder="first name"
                                name="firstName"
                                noValidate
                                onChange={this.handleChange}
                            />

                            {formErrors.firstName.lenght > 0 && (
                                <span className="errorMessage">{formErrors.firstName}></span>
                            )}

                        </div>

                        <div className="lastName">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                className={formErrors.lastName.lenght > 0 ? "error" : null}
                                placeholder="last name"
                                name="lastName"
                                noValidate
                                onChange={this.handleChange}
                            />

                            {formErrors.firstName.lenght > 0 && (
                                <span className="errorMessage">{formErrors.lastName}></span>
                            )}

                        </div>

                        <div className="email">
                            <label htmlFor="email">Email:</label>
                            <input
                                className={formErrors.email.lenght > 0 ? "error" : null}
                                placeholder="email"
                                // eslint-disable-next-line
                                type="email"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                            />

                            {formErrors.firstName.lenght > 0 && (
                                <span className="errorMessage">{formErrors.email}></span>
                            )}

                        </div>

                        <div className="password">
                            <label htmlFor="password">Password:</label>
                            <input
                                className={formErrors.password.lenght > 0 ? "error" : null}
                                placeholder="password"
                                // eslint-disable-next-line
                                type="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                            />

                            {formErrors.firstName.lenght > 0 && (
                                <span className="errorMessage">{formErrors.password}></span>
                            )}

                        </div>

                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            {/* <small>Already have an Account</small> */}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;