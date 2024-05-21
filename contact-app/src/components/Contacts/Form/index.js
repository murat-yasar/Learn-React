import React, { useEffect, useState } from 'react'

// Set initial form values
const initFormVals = {fullName: "", phoneNumber: ""};

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initFormVals);

  // Reset form-fields after changing contacts
  useEffect(() => {
    setForm(initFormVals);
  }, [contacts]);

  // onChangeInput
  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // Do not proceed, unless the both field fulfilled
    if (form.fullName === '' || form.phoneNumber === '') return false;

    // Add new contact to the contacts
    addContact([...contacts, form]);

    // Reset form-fields after submit // Taken to the beginning of the function as useEffect
    // setForm(initFormVals); 
  }

  return (
    <div>
      <h2>New Contact</h2>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name='fullName' 
          value={form.fullName}
          placeholder='Full Name' 
          onChange={onChangeForm}
        />
        <br />
        <input 
          type="text" 
          name='phoneNumber' 
          value={form.phoneNumber}
          placeholder='Phone Number' 
          onChange={onChangeForm}
        />
        <br />
        <br />
        <button>Add to Contacts</button>
      </form>
    </div>
  )
}

export default Form;