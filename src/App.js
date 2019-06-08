import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'

class App extends Component {
  state = {
    screen: '',
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
         <Route path='/' render={() => (
           <ListContacts
             onDeleteContact={this.removeContact}
             contacts={this.state.contacts}
             onNavigate={() => {
             this.setState({ screen: 'create' })
           }}
           />
         )} />
       <Route path='/create' component={CreateContact} />
      </div>
    )
  }
}
export default App;
