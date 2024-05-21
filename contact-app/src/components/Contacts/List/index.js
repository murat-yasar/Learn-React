import React from 'react'

function List({ contacts }) {
  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {
          contacts.map((contact, i) => <li key={i}>{contact.fullName} {contact.phoneNumber}</li>)
        }
      </ul>
    </div>
  )
}

export default List;