<template>
<div class="box"> 
    <table class="persons-list">
            <tbody>
                <tr class="persons-list__row">
                    <td class="persons-list__cell">ID</td>
                    <td class="persons-list__cell"> Name</td>
                    <td class="persons-list__cell"> Participate</td>
                </tr>
                <Event v-for="event, index of eventsList" :event="event" :toggleParticipicationModal="toggleParticipicationModal" :index="index" :key="index"/>
            </tbody>
    </table>
    <button class="react__add-btn" @click="toggleAddEventModal">Add New Event</button>
    <form name="event" v-if="isEventModalOpen" class="modal-events" @submit.prevent="addEvent(eventName)" >
        <input type="text" class="modal-events__input" v-model="eventName"/>
        <button type="submit" class="modal-events__button">Create Event</button>
        <button type="button" class="modal-events__button" @click="toggleAddEventModal">Close Modal</button>
    </form>
    <form name="event" v-if="isParticipicationModalOpen" class="modal-events" @submit.prevent="addToParty(personIDs)">
        <div class="modal-events__box" v-for="person of persons" :key="person.id">
            <input  type="checkbox" :value="person.id" v-model="personIDs">
            <span class="modal-events__name">{{person.name}} {{person.secondName}} {{person.lastName}} </span>
        </div>
        <button type="submit" class="modal-events__button">Add to Party</button>
        <button type="button" class="modal-events__button" @click="toggleParticipicationModal">Close Modal</button>
    </form>
</div>
    

</template>

<script>
import Event from '../Event/Event.vue'

export default {
    components: {
        Event
    },
    data() {
        return {
            isEventModalOpen: false,
            isParticipicationModalOpen: false,
            eventsList: window.store.eventsList,
            eventName: '',
            personIDs: [],
            personsForParty: [],
            eventID: null,
        }
    },
    mounted(){
        window.store.subscribe(() => {
            this.eventsList = window.store.eventsList
        })
    },
    methods: {
        toggleAddEventModal(){
            this.isEventModalOpen = !this.isEventModalOpen
        },
        toggleParticipicationModal(id){
            this.isParticipicationModalOpen = !this.isParticipicationModalOpen;
            this.eventID = id;
        },
        addEvent(name){
            window.store.addEvent(name);
            this.eventsList = window.store.eventsList;
            this.isEventModalOpen = false;
        },
        addToParty(personIDs){
            personIDs.forEach(id => {
                const personsWhoWantsToParty = this.persons.find(person => person.id === id)
                this.personsForParty.push(personsWhoWantsToParty);
                return
            });
            window.store.addToParty(this.personsForParty, this.eventID)
            this.isParticipicationModalOpen = false;
        }
    },
    props: {
        persons: {
            type: Array
        }
    }
}
</script>

<style>
/* стили уже есть в пакете с реактом */
.box{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.modal-events{
    position: fixed;
    top: 0;
    left:0;
    bottom:0;
    right:0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
}
.modal-events__input{
    width: 300;
    height: 30px;
}
.modal-events__name{
    margin: 0 0 0 20px;
    color: #fff;
}
.modal-events__box{
    display: flex;
    align-items: center;
    width: 250px;
}
.modal-events__button{
    width: 150px;
    margin: 10px 0 0 0;
}
</style>