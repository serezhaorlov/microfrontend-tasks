import React from 'react'
import './addUserModal.css';

function AddUserModal ({ onAddUser, closeModals }) {
    
  const [name, setName] = React.useState('');
  const [secondName, setSecondName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeSecondName = (e) => {
        setSecondName(e.target.value);
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleAddUser = (e) => {
        e.preventDefault();

        const data = {
        name,
        secondName,
        lastName
        }
        onAddUser(data)
        closeModals()
    }

    return (
        <form className="popup-users" onSubmit={(e) => { handleAddUser(e) }} >
            <input className="popup-users__input" placeholder="Enter Name" name="name" value={name || ''} onChange={ handleChangeName }></input>
            <input className="popup-users__input" placeholder="Enter Second Name" name="secondName" value={secondName || ''} onChange={ handleChangeSecondName }></input>
            <input className="popup-users__input" placeholder="Enter Last Name" name="lastName" value={lastName || ''} onChange={ handleChangeLastName }></input>
            <button className="react__add-btn" type="submit">Create User</button>
            <button className="react__add-btn" type="button" onClick={() => {closeModals()}}>Close Modal</button>
        </form> 
    )
}

export default AddUserModal;