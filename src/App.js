import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'

class App extends Component {
  state = {
    contacts: [
      {
        "id":"rahul",
        "name":"Rahul Kumar",
        "email":"rahulkumar@gmail.com",
        "avatarURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSj7RO2xlW4cbbzv040jhNXGvVTWMsuX9rA7olAhtssprn-ZvH"
      },
      {
        "id":"tarun",
        "name":"Tarun Singh",
        "email":"tarun@gmail.com",
        "avatarURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNoIDoiiWmpvgjTsyR9xaM0STzScDmbnsf7CLXDhdNI_iXrUjbLg"
      },
      {
        "id":"raj",
        "name":"Raj",
        "email":"raj@gmail.com",
        "avatarURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcResRpiw7G34DQ_mshmcBlMpdFYQfT3USqhLBHaVhsvj0js9q1qiw"
      }
    ]
  }

  removeContact = (contact) => {
    this.setState( (state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }

  createContact(contact) {
    console.log('not completed');
  }
  render(){
    return(
      <div className="App">
         <Route exact path='/' render={() => (
           <ListContacts
             onDeleteContact={this.removeContact}
             contacts={this.state.contacts}
           />
         )} />
       <Route path='/create' render={({history}) => (
           <CreateContact
             onCreateContact={(contact) => {
               this.createContact(contact)
               history.push('/')
             }}
             />
         )} />
      </div>
    )
  }
}
export default App;
