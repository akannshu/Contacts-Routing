import React, { Component } from 'react'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'

class App extends Component {
  state = {
    screen: 'list',
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
          {this.state.screen === 'list' && (
           <ListContacts
             onDeleteContact={this.removeContact}
             contacts={this.state.contacts}
             onNavigate={() => {
             this.setState({ screen: 'create' })
           }}
           />
         )}
         {this.state.screen === 'create' && (
           <CreateContact/>
         )}
      </div>
    )
  }
}
export default App;
