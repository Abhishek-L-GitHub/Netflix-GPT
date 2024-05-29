import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true); // State to toggle between Sign In and Sign Up forms
    const [errorMessage, setErrorMessage] = useState(null); // State to store error messages
    const navigate = useNavigate(); // Hook to navigate between routes

    // Refs for input fields
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    // Function to handle button click for Sign In/Sign Up
    const handleButtonClick = async () => {
        // Validate input data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return; // If there's an error message, stop further execution

        try {
            if (isSignInForm) {
                // Sign In logic
                const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
                console.log(userCredential.user);
            } else {
                // Sign Up logic
                const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
                console.log(userCredential.user);
            }
            navigate("/browse"); // Navigate to the browse page upon successful authentication
        } catch (error) {
            // Handle authentication errors
            setErrorMessage(`${error.code} - ${error.message}`);
        }
    };

    // Function to toggle between Sign In and Sign Up forms
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg'
                    alt="logo"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input ref={name} type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700' />
                )}
                <input ref={email} type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700' />
                <input ref={password} type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700' />

                {errorMessage && (
                    <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                )}

                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign IN Now"}
                </p>
            </form>
        </div>
    );
};

export default Login;
