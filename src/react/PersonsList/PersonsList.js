import React from 'react';
import './PersonsList.css';

import Person from '../Person/Person';

function PersonsList ({ persons, handleDeleteUser, handleEditUser }) {

    return (
        <table className="persons-list">
            <tbody>
                <tr className="persons-list__row">
                    <td className="persons-list__cell">ID</td>
                    <td className="persons-list__cell"> Name</td>
                    <td className="persons-list__cell">Second Name</td>
                    <td className="persons-list__cell">Last Name</td>
                    <td className="persons-list__cell">Edit</td>
                    <td className="persons-list__cell">Delete</td>
                </tr>
                {persons.map((person, index) => {
                    return (
                        <Person person={person} key={index} personID={person.id} handleDeleteUser={handleDeleteUser} handleEditUser={handleEditUser}/>
                    )
                })}
            </tbody>
            
        </table>
    )
}

export default PersonsList;