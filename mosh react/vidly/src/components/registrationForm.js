import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import Input from "./common/input";

class RegistrationForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email()
      .required()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    name: Joi.required()
  };

  doSubmit = () => {
    this.validate();
    // call to the server
    console.log("submitetd");
  };

  render() {
    return (
      <div>
        <h1>Registration</h1>
        <form>
          {this.renderInput("username", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name", "text")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
