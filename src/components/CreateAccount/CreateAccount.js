import React, { useState } from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faUser } from '@fortawesome/free-solid-svg-icons'

import './CreateAccount.css';

const CreateAccount = () => {
    return (
        <div className="createAccount-container">
            <form className="createAccount-form">
            <input type="text" className="name" placeholder="name"/>
            <input type="text" className="surname" placeholder="surname"/>
            <input type="text" className="email" placeholder="Email Address (optional)"/>
            <input type="text" className="surname" placeholder="password"/>
            <input type="text" className="surname" placeholder="confirm password"/>
                {/*<div className="input-div one focus">
                    <div className="i">
                        <FontAwesomeIcon icon={faUser} size="2x"/>
                    </div>
                    <div className="div">
                        <h5>Name</h5>
                        <input className="input" type="text" />
                    </div>
                </div>*/}
            </form>
        </div>
    )
}

export default CreateAccount
