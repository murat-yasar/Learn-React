import styles from './styles.module.css'

import React from 'react'
import { useFormik } from 'formik'; 

const Form = () => {
  const { handleSubmit, handleChange, values} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      language: '',
      gender: '',
      skills: []
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
    <form onSubmit={handleSubmit}>
      <table>
        <th>Personal Details</th>
        <tr>
          <td> <label htmlFor='firstName'>First Name: </label></td>
          <td><input id='firstName' name='firstName' type='text' className={styles.textField} onChange={handleChange} /></td>
        </tr>
        <tr>
          <td> <label htmlFor='lastName'>Last Name: </label></td>
          <td><input id='lastName' name='lastName' type='text' className={styles.textField} onChange={handleChange} /></td>
        </tr>
        <tr>
          <td><label htmlFor='email'>Email: </label></td>
          <td><input id='email' name='email' type='email' value={values.email} onChange={handleChange} className={styles.textField} /></td>
        </tr>
        <tr>
          <td>Language</td>
          <td>
            <select name='language' value={values.language} onChange={handleChange} >
              <option value='TR'>Türkçe</option>
              <option value='DE'>Deutsch</option>
              <option value='EN'>English</option>
            </select>
          </td>
        </tr>
        <tr>
          <td><label htmlFor='gender'>Gender: </label></td>
          <td>
            <span>male</span>
            <input name='gender' type='radio' value='male' onChange={handleChange} />
            <span>female</span>
            <input name='gender' type='radio' value='female' onChange={handleChange} />
          </td>
        </tr>

        <tr></tr>

        <th>IT Skills</th>
        <tr>
          <td><input name='skills' type='checkbox' value='HTML' onChange={handleChange} /></td>
          <td>HTML</td>
        </tr>
        <tr>
          <td><input name='skills' type='checkbox' value='CSS' onChange={handleChange} /></td>
          <td>CSS</td>
        </tr>
        <tr>
          <td><input name='skills' type='checkbox' value='JavaScript' onChange={handleChange} /></td>
          <td>JavaScript</td>
        </tr>
        <tr>
          <td><input name='skills' type='checkbox' value='React' onChange={handleChange} /></td>
          <td>React</td>
        </tr>
        <tr>
          <td><input name='skills' type='checkbox' value='NodeJS' onChange={handleChange} /> </td>
          <td>NodeJS</td>
        </tr>
        <tr>
          <td><input name='skills' type='checkbox' value='MongoDB' onChange={handleChange} /></td>
          <td>MongoDB</td>
        </tr>
        <tr>
          <td><input name='skills' type='checkbox' value='MySQL' onChange={handleChange} /></td>
          <td>MySQL</td>
        </tr>
        <tr>
          <td><input name='skills' type='checkbox' value='MariaDB' onChange={handleChange} /></td>
          <td>MariaDB</td>
        </tr>
      </table>

      <br/><br/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form