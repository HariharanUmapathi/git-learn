import React from 'react';
import "./Login.css";
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            msgType: "ERROR",
            emailError: "Invalid Email",
            passwordError: "Invalid Password"
        }
        this.ValidateEmail = (e) => {
            let emailPattern = "([a-z][a-z0-9.]+)@([a-z]+)[.]([a-z]{2,4})";
            if (!RegExp(emailPattern).test(e.target.value)) {
                this.setState({ emailError: "OK" });
            }
            if (e.target.value.length === 0) {
                this.setState({ emailError: "ERROR", msgType: "ERROR" })
            }
        }
        this.ValidatePassword = (e) => {
            let passwordPattern = "";
            if (!RegExp(passwordPattern).test(e.target.value)) {

            }
            if (e.target.value.length < 8) {
                this.setState({ passwordError: "Password Must Be Atleast 8 Characters Length" });
            }

        }
        this.LoginHandler = (e) => {
            e.preventDefault();
            console.log(e.target.parentNode[0]);
            let email = document.querySelector("#email");
            let password = document.querySelector("#password");
            console.log({ "email": email.value, "password": password.value });
        }
    }
    render() {
        return (<div className='row'>
            <form id='login-form' className='form-group' noValidate="novalidate">
                Get Access into Our World
                <div id="msg" className={this.state.msgType}> Email:{this.state.emailError} Password:{this.state.passwordError}</div>
                <div><input onChange={this.ValidateEmail} className='form-control' id='email' type='email' placeholder='Enter Your Mail' /></div>
                <div><input onChange={this.ValidatePassword} className='form-control' id='password' type='password' placeholder='Enter Your Password' /></div>
                <input className='btn btn-info' onClick={this.LoginHandler} type='button' value='Login' />
            </form>
        </div>);
    }
}




export default Login;