import styles from './styles.module.css'

import React from 'react'
import { Formik } from 'formik'; 

const Form = () => {
  return (
    <div className='form'>
      <h2>Sign Up</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {( { handleChange, handleSubmit } )=>(
          <form onSubmit={handleSubmit}>
            <label htmlFor='firstName'>First Name</label>
            <input name='firstName' type='text' onChange={handleChange} />

            <br/><br/>

            <label htmlFor='lastName'>Last Name</label>
            <input name='lastName' type='text' onChange={handleChange} />

            <br/><br/>

            <label htmlFor='email'>Email</label>
            <input name='email' type="email" onChange={handleChange} />

            <br/><br/>
            <button type='submit'>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Form