import React, { useState } from  'react';


const UserForm = (props) => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const createUser = (e) => {

        e.preventdefault();

        const newUser = { fName, lName, email, password, confirmPass};
        setFName = ("");
        setLName = ("");
        setEmail = ("");
        setPassword = ("");
        setConfirmPass = ("");
    };
    return (
        <div>
            <form className='form' onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={fName} onChange={(e) => setFName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lName} onChange={(e) => setLName(e.target.value)} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                </div>
            </form>

            <div className='box'>
                <p>
                <label>First Name: {fName}</label>
                </p>
                <p>
                <label>Last Name: {lName}</label>
                </p>
                <p>
                <label>Email: {email}</label>
                </p>
                <p>
                <label>Password: {password}</label>
                </p>
                <p>
                <label>Password Confirmation: {confirmPass}</label>
                </p>
            </div>
        </div>
    );
};

export default UserForm;