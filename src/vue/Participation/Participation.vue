<template>
  	<table class="persons-list">
                <tr class="persons-list__row">
                    <td class="persons-list__cell">ID</td>
                    <td class="persons-list__cell">Name</td>
					<td class="persons-list__cell">Event</td>
                </tr>
			    <Person v-for="(singleEvent, index) of eventsList" :persons="singleEvent.participicators" :eventName="singleEvent.name" :index="index" :key="index"/>
  	</table>
</template>

<script>

import Person from '../Person/Person.vue'
export default {
	components: {
        Person
    },
	props: {
		eventsList: {
			type: Array,
			required: true
		}
    },
	methods: {
	}
}
</script>

<style scoped>

</style>