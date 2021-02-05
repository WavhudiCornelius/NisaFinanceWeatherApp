import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './CellPhoneNumberField.css';

const URL = 'https://restcountries.eu/rest/v2/all';


// Ran out of time to implemnt this feature of selecting the country call code
const CellPhoneNumberField = () => {

    const [countries, setCountries] = useState([]);

    // getting data from the API and storing it in the states
    useEffect(() => {
        axios.get(URL).then((response) => {
            setCountries(response.data);
        })
    }, []);

    return (
        <div className="pnumber_container">
            <select ClassName="Select-option" id="countries">
            {countries.map((country, index) => (
                <option value={country.name} key={index}>{country.name} (+{country.callingCodes})</option>
            ))}
            </select>
        </div>
    )
}

export default CellPhoneNumberField;
