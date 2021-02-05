import React, { useState } from 'react';
import history from '../../History';
import { addAccount } from '../../firebase/Methods';

import './CreateAccount.css';

const CreateAccount = () => {

    // states to store the user information
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [pnumber, setPnumber] = useState('');
    const [city, setCity] = useState('');
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
        if ((name === '') || (surname === '') || (pnumber === '') || (city === '') || (email === '') || (password === '') || (pconfirm === '')) {
            alert("Please fill all form fields");
        }else if(password === pconfirm) {
            let respond = await addAccount(name, surname, pnumber, city, email, password);
            setName('');
            setSurname('');
            setPnumber('');
            setCity('');
            setEmail('');
            setPassword('');
            setPconfirm('');

            if (respond) {
                alert('Scuccessfully created Your Account, Go to LogIn');
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
            <div className="center__box">
                <div className="form__box">
                    <div className="field__box">
                        <input type="input" className="form__field" name="name" id='name' value={name} onChange={(e) => {setName(e.target.value)}} required />
                        <label htmlFor="name" className="form__label">Name</label>
                    </div>
                    <div className="field__box">
                        <input type="input" className="form__field" name="sname" id='sname' value={surname} onChange={(e) => {setSurname(e.target.value)}} required />
                        <label htmlFor="sname" className="form__label">Surname</label>
                    </div>
                    <div className="field__box">
                        <input type="input" className="form__field" name="pnumber" id='pnumber' value={pnumber} onChange={(e) => {setPnumber(e.target.value)}} required />
                        <label htmlFor="pnumber" className="form__label">Phone Number</label>
                    </div>
                    <div className="field__box">
                        <input type="input" className="form__field" name="email" id='email' value={email} onChange={(e) => {setEmail(e.target.value)}} required />
                        <label htmlFor="email" className="form__label">E-mail</label>
                    </div>
                    <div className="field__box">
                        <input type="input" className="form__field" name="city" id='city' value={city} onChange={(e) => {setCity(e.target.value)}} required />
                        <label htmlFor="city" className="form__label">City</label>
                    </div>
                    <div className="field__box">
                        <input type="password" className="form__field" name="password" id='password' value={password} onChange={(e) => {setPassword(e.target.value)}} required />
                        <label htmlFor="password" className="form__label">Password</label>
                    </div>
                    <div className="field__box">
                        <input type="password" className="form__field" name="pconfirmation" id='pconfirmation' value={pconfirm} onChange={(e) => {setPconfirm(e.target.value)}} required />
                        <label htmlFor="pconfirmation" className="form__label">Confirm Password</label>
                    </div>
                </div>
                <div className="btn__box">
                    <button className="btn-createAccount" onClick={buttonPressed}>Create Account</button>
                </div>
            </div>
           {/* </form>*/}
        </div>
    )
}

export default CreateAccount;
