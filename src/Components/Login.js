import React from 'react';
import "./Login.css";

function ValidateEmail()
{
console.log("Valid");
}
function ValidatePassword(){
console.log("Valid");
}
class Login extends React.Component {
    constructor() {
        super();
    
    
    }
    render() {
        return (<div className='row'>
            <form className='form-group' novalidate>
                <div><input onChange={ValidateEmail} className='form-control' id='email' type='email'    placeholder='Enter Your Mail'     /></div>
                <div><input onChange={ValidatePassword} className='form-control' id='password' type='password' placeholder='Enter Your Password' /></div>
                <input className='btn btn-info' onClick={LoginHandler} type='button' value='Login'/>
            </form>
        </div>);
    }
}


function LoginHandler(e)
{
    e.preventDefault();
    let email=document.querySelector("#email");
    let password=document.querySelector("#password");
    console.log({"email":email.value,"password":password.value});
    };

export default Login;