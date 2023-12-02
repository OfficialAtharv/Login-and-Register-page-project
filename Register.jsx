import React,{useState} from "react";
 export const Register = (props) =>{
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');
    const[name,setName]=useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
         console.log(email);
     }
    return(
      <div className="auth-form-container">
      <form className="registerform"  onSubmit={handleSubmit}>
                <h1>Registration form</h1>
                <label htmlFor="name">Full Name </label>
                <input type="text" value={name} name="name" id="name" placeholder="Full Name"/>
                <label htmlFor="password">Password </label>
                <input value={pass} type="password" placeholder="**********" id="password" name="password"/>
                <button type="submit">Log In</button>
      </form>
            <button  onClick={() => props.onFormSwitch('login')}>Already have an account ? Login Here.</button>
      </div>
    )
};
export default Register;