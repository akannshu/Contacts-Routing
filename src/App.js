import React, { Component } from 'react'
import ListContacts from './ListContacts'

class App extends Component {
  state = {
    contacts: [
      {
        "id":"rahul",
        "name":"Rahul Kumar",
        "email":"rahulkumar@gmail.com",
        "avatarURL": ""
      },
      {
        "id":"tarun",
        "name":"Tarun Singh",
        "email":"tarun@gmail.com",
        "avatarURL": ""
      },
      {
        "id":"raj",
        "name":"Raj",
        "email":"raj@gmail.com",
        "avatarURL": ""
      }
    ]
  }

  removeContact = (contact) => {
    this.setState( (state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }
  render(){
    return(
      <div className="App">
        <ListContacts
          onDeleteConatact={this.removeContact}
          contacts={this.state.contacts}
          />
      </div>
    )
  }
}
export default App;
