import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function ListContacts (props) {
 return (
    <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts' />
         <Link to="/create" className="add-contact">New</Link>
         </div>

   <ol className='contact-list'>
     {props.contacts.map(contact => (
       <li key={contact.id} className='contact-list-item'>
         <div className="contact-avatar" style={{
               backgroundImage: `url(${contact.avatarURL})`
           }}>
         </div>
         <div className='contact-details'>
           <p>{contact.name}</p>
           <p>{contact.email}</p>
         </div>
         <button className='contact-remove' onClick={() => props.onDeleteContact(contact)}>Remove</button>
       </li>
     ))}
   </ol>


</div>

 )
}

ListContacts.propTypes = {
   contacts: PropTypes.array.isRequired,
   onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts
