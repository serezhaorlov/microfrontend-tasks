import React from 'react'
import './EditUserModal.css';

function EditUserModal ({ onEditUser, closeModals, person }) {
    
  const [name, setName] = React.useState(person.name);
  const [secondName, setSecondName] = React.useState(person.secondName);
  const [lastName, setLastName] = React.useState(person.lastName);

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeSecondName = (e) => {
        setSecondName(e.target.value);
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEditUser = (e) => {
        e.preventDefault();

        const data = {
        name,
        secondName,
        lastName
        }
        onEditUser(data)
        closeModals()
    }

    return (
        <form className="popup-users" onSubmit={(e) => { handleEditUser(e) }} >
            <input className="popup-users__input" placeholder="Enter Name" name="name" value={name || ''} onChange={ handleChangeName }></input>
            <input className="popup-users__input" placeholder="Enter Second Name" name="secondName" value={secondName || ''} onChange={ handleChangeSecondName }></input>
            <input className="popup-users__input" placeholder="Enter Last Name" name="lastName" value={lastName || ''} onChange={ handleChangeLastName }></input>
            <button className="react__add-btn" type="submit">Edit User</button>
            <button className="react__add-btn" type="button" onClick={() => {closeModals()}}>Close Modal</button>
        </form> 
    )
}

export default EditUserModal;