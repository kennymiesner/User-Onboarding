import React, { useState, useEffect } from 'react';
import NewHire from './components/NewHire'
import Form from './components/Form'
import schema from './validation/formSchema'
import { reach } from 'yup'
import axios from 'axios'
import './App.css';

//////////////// INITIAL STATES ////////////////

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialUsers = []
const initialDisabled = true

export default function App() {

  //////////////// STATES ////////////////

  const [users, setUsers] = useState(initialUsers)          // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  //////////////// HELPERS ////////////////

  const postNewHire = newHire => {
    axios.post('https://reqres.in/api/users', newHire)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  //////////////// EVENT HANDLERS ////////////////

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newHire = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: ['terms'].filter(term => formValues[term]),
    }
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
    postNewHire(newHire)
  }

  //////////////// SIDE EFFECTS ////////////////

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>User Onboarding App</h1></header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <NewHire key={user.id} details={user} />
          )
        })
      }
    </div>
  )
}
