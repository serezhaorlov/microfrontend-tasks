import React from 'react';

function Person ({ person, personID, handleDeleteUser, handleEditUser }) {

    return (
        <tr className="persons-list__row">
            <td className="persons-list__cell">{personID}</td>
            <td className="persons-list__cell">{person.name}</td>
            <td className="persons-list__cell">{person.secondName}</td>
            <td className="persons-list__cell">{person.lastName}</td>
            <td className="persons-list__cell"><button onClick={ () => { handleEditUser(person) }}>Edit</button></td>
            <td className="persons-list__cell"><button className="persons-list__delete-btn" onClick={ () => {handleDeleteUser(personID)} }>Х</button></td>
        </tr>
    )
}

export default Person;