import React, { useState } from 'react';
import { authentication } from '../../firebase/Methods';

// importing components
import Weather from '../Weather/Weather';

const Login = () => {

    // states to store cellphone number
    const [pnumber, setPnumber] = useState('');
    const [password, setPassword] = useState('');
    const [authStatus, setAuthStatus] = useState(false);

    const auth = async () => {
        const res = await authentication(pnumber, password);
        setAuthStatus(res);
    }
    
    if(authStatus) {
        return (
            <Weather />
        )
    }else {
        return (
            <div className="login-container">
                <input type="text" className="pnumber" placeholder="Phone Number" value={pnumber} onChange={(e) => setPnumber(e.target.value)} />
                <input type="text" className="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={auth}>Log In Now</button>
            </div>
        )
    }
}

export default Login
