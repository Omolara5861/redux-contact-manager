import React, { Component } from "react";// import * as uuid from 'uuid';
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

export default class AddContact extends Component<any> {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {
            name: '',
            email: '',
            phone: ''
        },
};
    onChange = (e: any) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = async (dispatchEvent: any, e: any) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check for errors
    if (name === "") {
        this.setState({ errors: { name: "Name is required" } });
        return;
    }
    if (email === "") {
        this.setState({ errors: { email: "Email is required" } });
        return;
    }
    if (phone === "") {
        this.setState({ errors: { phone: "Phone is required" } });
        return;
    }

    const newContact = {
      // id: uuid.v4(),
        name,
        email,
        phone,
    };

    const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newContact
    );
    dispatchEvent({ type: "ADD_CONTACT", payload: res.data });

    // Clear the form
    this.setState({
        name: "",
        email: "",
        phone: "",
        errors: {},
    });

    // Redirect to Homepage
    this.props.history.push("/");
};

render() {
    const { name, email, phone, errors } = this.state;
    return (
        <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
            <form onSubmit={this.onSubmit.bind(this, dispatchEvent)}>
            <TextInputGroup
                label="Name"
                name="name"
                placeholder="Enter Name..."
                value={name}
                onChange={this.onChange}
                error={errors.name}
            ></TextInputGroup>

            <TextInputGroup
                label="Email"
                name="email"
                placeholder="Enter Email..."
                value={email}
                type="email"
                onChange={this.onChange}
                error={errors.email}
            ></TextInputGroup>

            <TextInputGroup
                label="Phone"
                name="phone"
                placeholder="Enter Phone..."
                value={phone}
                onChange={this.onChange}
                error={errors.phone}
            ></TextInputGroup>

            <input
                type="submit"
                value="Add Contact"
                className="btn btn-light btn-block"
            />
            </form>
        </div>
        </div>
    );
}
}
