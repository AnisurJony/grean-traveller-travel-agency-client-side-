import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLoging = () => {
        signInUsingGoogle()

        history.push(redirect_uri);

    }
    return (
        <div className='my-5'>
            <h2 className='text-warning'>Please Login</h2>
            <form className='mt-3'>
                <input type='email' placeholder='Email'></input>
                <br />
                <br />
                <input type='password' placeholder='Password'></input>
                <br />
                <br />

            </form>
            ---------- or -----------
            <br />
            <button onClick={handleGoogleLoging} className="btn btn-info">Google Sign In</button>
        </div>
    );
};

export default Login;