import React, { useState, useEffect } from 'react';
import newHire from './components/NewHire'
import Form from './components/Form'
import schema from './validation/formSchema'
import { reach } from 'yup'
import axios from 'axios'
import './App.css';

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialEmployees = []
const initialDisabled = true

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: '',
}

const postNewHire = newHire => {
  axios.post('https://reqres.in/api/users', newHire)
    .then(res => {
      setHires([res.data, ...employees])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
}

export default function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}
