import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {

    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleClick = async () => {
        try {
            if (!user) {
                const res = await axios.post(BASE_URL + '/login', {
                    emailId,
                    password
                }, { withCredentials: true });
                dispatch(addUser(res.data));
            }
            navigate('/');
        }
        catch (err) {
            console.error(err);
            setError(err.response.data);
        }
    }

    const handleSignup = async () => {
        try {
            const res = await axios.post(BASE_URL + '/signup', {
                firstName, lastName, emailId, password
            }, { withCredentials: true });
            dispatch(addUser(res.data.data));
            navigate('/profile');
        }

        catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className='flex justify-center my-10'>
            <div className="card card-border bg-base-300 w-96">
                <div className="card-body">
                    <h2 className="card-title justify-center">{isLoginForm ? "Login" : "Sign up"}</h2>
                    {!isLoginForm && <>
                        <fieldset className="fieldset">
                            <label className="fieldset-legend">FirstName: </label>
                            <input type="text" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="fieldset-legend">LastName: </label>
                            <input type="text" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </fieldset>
                    </>
                    }
                    <fieldset className="fieldset">
                        <label className="fieldset-legend">Email Id: </label>
                        <input type="text" className="input" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="fieldset-legend">Password: </label>
                        <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </fieldset>
                    <p className='text-red-300'>
                        {error}
                    </p>
                    <div className="card-actions justify-center p-2">
                        <button className="btn btn-primary" onClick={isLoginForm ? handleClick : handleSignup} >{isLoginForm ? "Login" : "Sign up"}</button>
                    </div>
                    <p className='m-auto my-5 cursor-pointer' onClick={() => setIsLoginForm(prev => !prev)}>
                        {isLoginForm ? "New User?? Sign Up here" : "Existing User?? Login here"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login