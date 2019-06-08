import React, { Component } from 'react';
import ImageInput from './ImageInput'
import { Link } from 'react-router-dom'

class CreateContact extends Component {
  render() {
    return (
      <div>
        <Link to='/' className="close-create-contact">Close</Link>
        <form className="create-contact-form">
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
