import React, { Component } from 'react'
import ListContacts from './ListContacts'

class ContactList extends React.Component {
  render(){
    const people = this.props.contacts
    return (
           <ol>
             {people.map(person => (
               <li key={contact.id} className='contact-list-item'>
                 <div className="contact-avatar" style={{
                       backgroundImage: `url(${contact.avatarURL})`
                   }}>
                 </div>
                 <div className='contact-details'>
                   <p>{contact.name}</p>
                   <p>{contact.email}</p>
                 </div>
                 <button className='contact-remove'>Remove</button>
               </li>
             ))}
           </ol>
         )
  }
}

class App extends Component {
  render(){
    return(
      <div className="App">
        <ContactList contacts = {[

            {name: 'Rahul'},
            {name: 'Tarun'},
            {name: 'Raj'}

          ]}/>
      </div>
    )
  }
}
export default App;
