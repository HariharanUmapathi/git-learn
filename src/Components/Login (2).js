import './Login.css';
function Login(option) {
    if (option.page==='register') {
        return (
            
            <form id='register-form' onSubmit={SubmitHandler} className='p-4'>
                <h1 className='heading'>Register</h1>
                <input type='text' name='name' placeholder='Enter Your Name' />
                <input type='email' name='' placeholder='Enter your Email' />
                <input type='password' name='password' placeholder='Enter Your password'/>
                <input type='password' name='re-password' placeholder='Re-Enter your Password' />
                <input type='submit' className='btn btn-danger'/>
            </form>
        );
    }
    else 
    return (
        <form id='login-form' onSubmit={SubmitHandler}>
            <h1 className='heading'>Login</h1>
            <input type='text' name='username' placeholder='Enter Your User Name' />
            <input type='password' name='password' placeholder='Enter Your Password' />
            <input type='submit' className='btn btn-danger'/>
        </form>
    );
}
function SubmitHandler(event) {
    event.preventDefault();
    alert("Form Submitted");
}

export default Login;