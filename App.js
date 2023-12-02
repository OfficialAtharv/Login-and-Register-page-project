//import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import { LoginPage } from "./Loginpage";
import { Register } from "./Register";

function App() {
  const [currerntForm,setCurrentForm]=useState('login');
  const toggleForm = (formName) => {
  setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currerntForm =="login" ? <LoginPage onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
