import React, { useState } from 'react';
import { authentication } from '../../firebase/Methods';

// importing components
import Weather from '../Weather/Weather';

// styles
import './Login.css';

// logo
import Logo from '../../assets/logo.png';

const Login = () => {

    // states to store cellphone number
    const [pnumber, setPnumber] = useState('');
    const [password, setPassword] = useState('');
    const [authStatus, setAuthStatus] = useState(false);
    const [cityName, setCityName] = useState('');

    const auth = async () => {
        const response = await authentication(pnumber, password);
        setAuthStatus(response.res);
        setCityName(response.city);
    }
    
    if(authStatus) {
        return (
            <Weather query={cityName} />
        )
    }else {
        return (
            <div className="login-container">
                <div className="appLogo">
                    <img src={Logo} alt="Weather Logo"/>
                </div>
                <div className="form__box">
                    <div className="field__box">
                        <input type="input" className="form__field" name="pnumber" id='pnumber' value={pnumber} onChange={(e) => {setPnumber(e.target.value)}} required />
                        <label htmlFor="pnumber" className="form__label">Phone Number</label>
                    </div>
                    <div className="field__box">
                        <input type="password" className="form__field" name="password" id='password' value={password} onChange={(e) => {setPassword(e.target.value)}} required />
                        <label htmlFor="password" className="form__label">Password</label>
                    </div>
                </div>
                <div className="btn__box">
                    <button className="btn-createAccount" onClick={auth}>Log In Now</button>
                </div>
            </div>
        )
    }
}

export default Login
