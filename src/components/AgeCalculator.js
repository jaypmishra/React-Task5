import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function AgeCalculator() {
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [age, setAge] = useState(null);

    function calculateAge() {
        const birthDate = new Date(dateOfBirth);
        const currentDate = new Date();
        const ageDiff = currentDate - birthDate;
        const calculatedAge = Math.floor(ageDiff / (365.25 * 24 * 60 * 60 * 1000));
        setAge(calculatedAge);
    }

    return (
        <div>
            <center><h1><b>Age Calculator</b></h1></center>
            <center><p style={{ color: 'black', fontWeight: 'bold' }}>Enter your date of birth</p></center>

            <center>
                <input class="b-form-datepicker form-control"
                    style={{ width: 200 }}
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)} /></center>
            <br />

            <center><button onClick={calculateAge} class="btn btn-primary"
                style={{
                    color: 'white',
                    marginTop: '10px',
                }}>Calculate Age</button></center>

            {age !== null && (
                <center><p><b>
                    You are {age} years old
                </b></p></center>
            )}
        </div>
    );
}

export default AgeCalculator;