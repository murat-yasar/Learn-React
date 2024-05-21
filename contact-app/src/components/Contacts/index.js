import React, { useEffect, useState } from 'react'
import List from './List'
import Form from './Form';

function Contacts() {
  const [contacts, setContacts] = useState([]);

  // Get the change if contacts changes
  useEffect(()=>{
    console.log(contacts);
  }, [contacts]);
  
  return (
    <div>
      <List />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;