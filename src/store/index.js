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
        {
          name: 'Michael',
          lastName: 'Campbell',
          secondName: 'Devi',
          id: 3
        },
      ]
    },
    { 
      id: 2,
      name: 'Christmas',
      participicators: [
        {
          name: 'Michael',
          lastName: 'Campbell',
          secondName: 'Devi',
          id: 3
        },]
    },
    { 
      id: 3,
      name: 'Independence day',
      participicators: [
        {
          name: 'Michael',
          lastName: 'Campbell',
          secondName: 'Devi',
          id: 3
        },]
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

    addUser({name, lastName, secondName}) {
      const newUser = {
        id: Math.ceil(Math.random()*100) ,
        name,
        lastName,
        secondName,
      }
      persons = [...persons, newUser];
      subscribers.forEach(fn => fn());
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
        subscribers.forEach(fn => fn());
      });

    },

    deleteUser(id) {
      const newUsers = persons.filter(person => person.id !== id);
      persons = newUsers;
      subscribers.forEach(fn => fn());
      return persons;
    },

    addEvent(name) {
      const event = {
        id: Math.ceil(Math.random()*100),
        name,
        participicators: []
      }
      eventsList = [...eventsList, event];
      subscribers.forEach(fn => fn());
      
    },

    editEventName(id, name){
      eventsList.map(event => {
        if (event.id === id) {
          event.name = name;
        } else {
          return event;
        }
        subscribers.forEach(fn => fn());
      });
    },

    deleteEvent(id) {
      const newEvents = eventsList.filter(event => event.id !== id);
      eventsList = newEvents;
      subscribers.forEach(fn => fn());
      return eventsList;
    },

    addToParty(persons, eventID){
      eventsList.map(event => {
        if (event.id === eventID) {
          persons.forEach(person => event.participicators.push(person));
        } else {
          return event;
        }
        subscribers.forEach(fn => fn());
      });
    },

    deleteParticipant(eventId, personId) {
      const currentEvent = eventsList.filter((event) => {
        return event.id === eventId
      })
      const currentPersons = currentEvent.map(event => event.participicators.filter(person => person.id !== personId)).flat()
      const newEvent = {
        id: currentEvent[0].id,
        name: currentEvent[0].name,
        participicators: currentPersons
      }
      const newList = eventsList.map(event => event.id === newEvent.id ? newEvent : event);
      eventsList = newList
      subscribers.forEach(fn => fn());
      return
    },
    
    subscribe(fn) {
      subscribers.push(fn)
    },
  }
}
