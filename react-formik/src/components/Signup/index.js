import styles from './styles.module.css'

import React from 'react'
import { useFormik } from 'formik'; 
import validations from './validation';

const Signup = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: validations,
  });

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <th>Password Confirmation</th>

        <tr>
          <td><label htmlFor='email'>Email: </label></td>
          <td>
            <input 
              id='email' 
              name='email' 
              type='email' 
              value={values.email} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              className={styles.textField} 
            />
          </td>
          {errors.email && touched.email && <div className={styles.error}>{errors.email}</div>}
        </tr>
        
        <tr>
          <td> <label htmlFor='password'>Password: </label></td>
          <td>
            <input 
              id='password' 
              name='password' 
              type='password' 
              value={values.password} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              className={styles.textField} 
            />
          </td>
          {errors.password && touched.password && <div className={styles.error}>{errors.password}</div>}
        </tr>

        <tr>
          <td> <label htmlFor='passwordConfirm'>Confirm Password: </label></td>
          <td>
            <input 
              id='passwordConfirm' 
              name='passwordConfirm' 
              type='password' 
              value={values.passwordConfirm} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              className={styles.textField} 
            />
          </td>
          {errors.passwordConfirm && touched.passwordConfirm && <div className={styles.error}>{errors.passwordConfirm}</div>}
        </tr>
        
      </table>

      <br/><br/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Signup