import React, {Component} from 'react'

function ListContacts (props) {
  <ol className='contact-list'>
    {props.map(person => (
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
}

class ListContacts extends Component{
  render() {
  }
}

export default ListContacts
