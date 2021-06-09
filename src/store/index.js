export function createStore() {

  const subscribers = [];

  let persons = [
    {
      name: 'John',
      lastName: 'Jons',
      secondName: 'Marshall',
      id: 1
    },
    {
      name: 'Mary',
      lastName: 'Strongberry',
      secondName: 'Elisabeth',
      id: 2
    },
    {
      name: 'Michael',
      lastName: 'Campbell',
      secondName: 'Devi',
      id: 3
    },
    {
      name: 'David',
      lastName: 'Lens',
      secondName: 'Gordon',
      id: 4
    },
  ];

  let eventsList = [
    { 
      id: 1,
      name: 'New Year',
      participicators: [
        {
          name: 'John',
          lastName: 'Jons',
          secondName: 'Marshall',
          id: 1
        },
        {
          name: 'Mary',
          lastName: 'Strongberry',
          secondName: 'Elisabeth',
          id: 2
        },
      ]
    },
    { 
      id: 2,
      name: 'Christmas',
      participicators: []
    },
    { 
      id: 3,
      name: 'Independence day',
      participicators: []
    },
    { 
      id: 4,
      name: 'Ellie Birthday',
      participicators: []
    } 
  ]

  return {
    get persons() {
      return persons
    },
    get eventsList() {
      return eventsList
    },

    deleteUser(id) {
      const newUsers =  persons.filter(person => person.id !== id);
      persons = newUsers;
      return persons;
    },

    addUser({name, lastName, secondName}) {
      const newUser = {
        id: Math.ceil(Math.random()*100) ,
        name,
        lastName,
        secondName,
      }
      persons = [...persons, newUser];
    },

    editUser (id, {name, secondName, lastName}) {
      persons.map(person => {
        if (person.id === id) {
          person.name = name;
          person.secondName = secondName;
          person.lastName = lastName;
        } else {
          return person;
        }
      });

    },

    addEvent(name) {
      const event = {
        id: Math.ceil(Math.random()*100),
        name,
        participicators: []
      }
      eventsList = [...eventsList, event];
    },

    addToParty(persons, eventID){
      eventsList.map(event => {
        if (event.id === eventID) {
          persons.forEach(person => event.participicators.push(person));
        } else {
          return event;
        }
      });
    },

    subscribe(fn) {
      subscribers.push(fn)
    },
  }
}
