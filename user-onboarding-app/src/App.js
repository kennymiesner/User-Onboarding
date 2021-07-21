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

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
