import React from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import IconPicker from "react-icon-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Icon from "@material-ui/core/Icon";

export default class SimpleFormExample extends React.Component {
  state = {
    formData: {
      email: "",
      password: ""
    },
    submitted: false,
    icons: [
      "fas fa-camera",
      "fas fa-fish",
      "fas fa-align-center",
      "fas fa-align-justify"
    ],
    icon: ""
  };

  handleChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = () => {
    console.log("submit");
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });
  };

  render() {
    const { formData, submitted } = this.state;
    return (
      <>
        <ValidatorForm ref="form" onSubmit={this.handleSubmit} id="id">
          <h2>Simple form</h2>
          <TextValidator
            label="Email"
            onChange={this.handleChange}
            name="email"
            value={formData.email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
          <br />
          <TextValidator
            label="Password"
            onChange={this.handleChange}
            name="password"
            value={formData.password}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <br />

          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={submitted}
            form="id"
          >
            {(submitted && "Your form is submitted!") ||
              (!submitted && "Submit")}
          </Button>
          <span className={this.state.icon}></span>
          <IconPicker
            icons={["fas fa-camera", "fas fa-fish"]}
            defaultValue="fas fa-camera"
            onChange={() => console.log("scds")}
          />
          <FontAwesomeIcon icon={faCoffee} />
          <Icon>star</Icon>
          <Icon className="fa fa-plus-circle" />
        </ValidatorForm>
      </>
    );
  }
}
