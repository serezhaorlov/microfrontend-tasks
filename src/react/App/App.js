import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PersonsList from '../PersonsList/PersonsList';
import AddUserModal from '../addUserModal/addUserModal';
import EditUserModal from '../EditUserModal/EditUserModal';

const App = () => {
  
  const [persons, setPersons] = React.useState(window.store.persons);
  const [isAddUserModalOpened, setIsAddUserModalOpened] = React.useState(false);
  const [isEditUserModalOpened, setIsEditUserModalOpened] = React.useState(false);
  const [person, setPerson] = React.useState(null)
  
  const deleteUser = (id) => {
    setPersons(window.store.deleteUser(id))
  }
  
  const toggleUserModal = () => {
    setIsAddUserModalOpened(!isAddUserModalOpened);
  }

  const toggleEditUserModal = (person) => {
    setPerson(person)
    setIsEditUserModalOpened(!isEditUserModalOpened);
  }

  const closeModals = () => {
    setIsAddUserModalOpened(false);
    setIsEditUserModalOpened(false);
  }

  const onAddUser = (data) => {
    window.store.addUser(data)
    setPersons(window.store.persons)
  }

  const onEditUser = (data) => {
    const id = person.id
    console.log(id)
    window.store.editUser(id, data)
    setPersons(window.store.persons)
  }

  React.useEffect(() => {
    window.store.subscribe(() => {
      setPersons(window.store.persons)
    })
  }, [persons]);


  return (
    <Router>
      <Switch computedMatch>
        <>
        <section className="react"> 
          <div className="react__buttons">
            <Link className="react__to-vue-btn" to='/'>React</Link>
            <Link className="react__to-vue-btn" to='/vue'>Vue</Link>
            <Link className="react__to-vue-btn" to='/participation'>Participation</Link>
          </div>
          <Route exact path='/'>
            <PersonsList persons={persons} handleDeleteUser={ deleteUser } handleEditUser={ toggleEditUserModal }></PersonsList>
            <button className="react__add-btn" onClick={ toggleUserModal }>Add New Colleague</button>
            { 
              isAddUserModalOpened ? <AddUserModal className="addUserModal" onAddUser={onAddUser} closeModals={closeModals}/>
              : ''
            }
            { 
              isEditUserModalOpened ? <EditUserModal className="editUserModal" person={person} onEditUser={onEditUser} closeModals={closeModals}/>
              : ''
            }
          </Route>
        </section>
        </>
      </Switch>      
    </Router>
  );
};

export default App;
