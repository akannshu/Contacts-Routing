import React, { Component } from 'react'

class ContactList extends React.Component {
  render(){
    const people = this.props.contacts
    return (
           <ol>
             {people.map(person => (
               <li>{person.name}</li>
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

          <ContactList contacts = {[

              {name: 'Nilesh'},
              {name: 'Faizal'},
              {name: 'Pankaj'}

            ]}/>
      </div>
    )
  }
}
export default App;
