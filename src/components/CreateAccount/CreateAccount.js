import React, { useState } from 'react';
import history from '../../History';
import { addAccount } from '../../firebase/Methods';
//import { Button } from 'react-bootstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faUser } from '@fortawesome/free-solid-svg-icons'

import './CreateAccount.css';

const CreateAccount = () => {

    // states to store the user information
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [pnumber, setPnumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pconfirm, setPconfirm] = useState('');

    // redirects user to login screen
    const pushLoginScreen = () => {
        history.push('/login');
        window.location.reload(false);
    }

    // creates the user account and stores the user information on a database
    // There is room for improvement in this alert and error handling
    const buttonPressed = async () => {
        if ((name === '') || (surname === '') || (pnumber === '') || (email === '') || (password === '') || (pconfirm === '')) {
            alert("Please fill all form fields");
        }else if(password === pconfirm) {
            let respond = await addAccount(name, surname, pnumber, email, password);
            console.log(name,surname,email,pnumber,password,pconfirm);
            setName('');
            setSurname('');
            setPnumber('');
            setEmail('');
            setPassword('');
            setPconfirm('');

            if (respond) {
                alert('Scuccessfully created Your Account, check your emails for login details');
                pushLoginScreen();
            }else {
                alert('There was an error in creating your account');
            }
        }else {
            alert("Passwords don't match");
            setPassword('');
            setPconfirm('');
        }
    }

    return (
        <div className="createAccount-container">
            {/*<form className="createAccount-form" type="submit">*/}
            <input type="text" className="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" className="surname" placeholder="surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
            <input type="text" className="pnumber" placeholder="Phone Number" value={pnumber} onChange={(e) => setPnumber(e.target.value)}/>
            <input type="text" className="email" placeholder="Email Address (optional)" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" className="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" className="pconfirm" placeholder="confirm password" value={pconfirm} onChange={(e) => setPconfirm(e.target.value)}/>
            <button onClick={buttonPressed}>Create Account</button>
                {/*<div className="input-div one focus">
                    <div className="i">
                        <FontAwesomeIcon icon={faUser} size="2x"/>
                    </div>
                    <div className="div">
                        <h5>Name</h5>
                        <input className="input" type="text" />
                    </div>
                </div>*/}
           {/* </form>*/}
        </div>
    )
}

export default CreateAccount;
