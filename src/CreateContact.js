import React, { Component } from 'react';
import ImageInput from './ImageInput'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'

class CreateContact extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash:true })
    console.log(values);
  }
  render() {
    return (
      <div>
        <Link to='/' className="close-create-contact">Close</Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name = "avatarURL"
            maxHeight={64}
            />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name"></input>
            <input type="email" name="email" placeholder="Email"></input>
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateContact
