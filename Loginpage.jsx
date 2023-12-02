import React,{useState} from "react";
export const LoginPage = (props) =>{
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');

    const handleSubmit = (e) => {
       e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auth-form-container">
            <form className="loginform" onSubmit={handleSubmit}>
                <h1>Login form</h1>
                <label htmlFor="email">Email </label>
                <input value={email} type="email" placeholder="ABC23@hmail.com" id="email" name="email"/>
                <label htmlFor="password">Password </label>
                <input value={pass} type="password" placeholder="**********" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <br></br>
            <button className="link-button" onClick={() => props.onFormSwitch('register')}>Don't have an account ? Register here.</button>
        </div>
    )
};
export default LoginPage;