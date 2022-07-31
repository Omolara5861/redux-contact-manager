import React, { Component } from "react";
import PropTypes from 'prop-types'
import axios from 'axios';
import { Link } from "react-router-dom";

export interface IContact {
  id: number,
  name: string,
  email: string,
  phone: string
}

export default class Contact extends Component<IContact> {
  static propTypes: { 
    name: PropTypes.Validator<string>; 
    email: PropTypes.Validator<string>; 
    phone: PropTypes.Validator<string>; 
  };

  state = {
    showContactInfo: false
  }

  // Firstway to change the state of the component
  // onShowClicked = () => {
  //   this.setState({showContactInfo: !this.state.showContactInfo})
  // }

  onDeleteClicked = async (id: number, dispatchEvent: any) => {   
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatchEvent({ type: 'DELETE_CONTACT', payload: id });
  }

  render() {
    const {id, name, email, phone} = this.props;
    return (
      <div className="card card-body mb-3">
      <h4>{name}
      <i onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})} className="fas fa-sort-down" style={{cursor: 'pointer'}}
      title={this.state.showContactInfo ? 'close-details' : 'view-details'}>
      </i>
      <i className="fas fa-times"
          style={{float: 'right', color: 'red', cursor: 'pointer'}}
          onClick={this.onDeleteClicked.bind(this, id, dispatchEvent)}
          title="delete"></i>

          <Link to={`contact/edit/${id}`}>
          <i className="fas fa-pencil-alt"
          style={{float: 'right', color: 'black',
           cursor: 'pointer', marginRight: '1rem'}}
           title="edit">
           </i>
          </Link>
      </h4>
      {this.state.showContactInfo ?<ul className="list-group">
        <li className="list-group-item">Email: {email}</li>
        <li className="list-group-item">Phone: {phone}</li>
      </ul> : null}
    </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired}
