<template>
  	<table class="persons-list">
        <tr class="persons-list__row">
            <td class="persons-list__cell">ID</td>
            <td class="persons-list__cell">Name</td>
			<td class="persons-list__cell">Event</td>
            <td class="persons-list__cell">Delete</td>
        </tr>
		<Person v-for="(singleEvent, index) of eventsList" :persons="singleEvent.participicators" 
		:eventName="singleEvent.name" :eventId="singleEvent.id" :key="index" @delete-person="deletePerson"
		/>
  	</table>
</template>

<script>
import Person from '../Person/Person.vue'

export default {
	components: {
        Person
    },
	mounted(){
		window.store.subscribe(() => {
			this.eventsList = window.store.eventsList
		})
	},
	data() {
		return {
			eventsList: window.store.eventsList
		}
	},
	methods: {
		deletePerson(eventId, personId) {
			window.store.deleteParticipant(eventId, personId)
		}
	}
	

}
</script>

<style>

</style>