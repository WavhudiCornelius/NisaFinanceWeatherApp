import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// components
import CreateAccount from './components/CreateAccount/CreateAccount';
import Login from './components/Login/Login';
import history from './History';


// styles
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <div className="app-container__sub">
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={CreateAccount} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default App;