import React from 'react';

// components
import CreateAccount from './components/CreateAccount/CreateAccount';
// styles
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <div className="app-container__sub">
                <CreateAccount />
            </div>
        </div>
    )
}

export default App;