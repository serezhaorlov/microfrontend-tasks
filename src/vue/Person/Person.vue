<template>
<tbody>
	<tr class="persons-list__row" v-for="(person, index) of persons" :key="index">
		<td class="persons-list__cell">{{person.id}}</td>
		<td class="persons-list__cell">{{person.name}} {{person.lastName}}</td>
		<td class="persons-list__cell">{{eventName}}</td>
        <td class="persons-list__cell"><button type="button" class="persons-list__delete-btn" @click="() => {deletePerson(eventId, person.id)}">X</button></td>
	</tr>
</tbody>

</template>

<script>


export default {
	data() {
		return {
		}
	},
	methods:{
		deletePerson(eventId, personId) {
			this.$emit('delete-person', eventId, personId)
		}
	},
	props: {
		persons: {
			type: Array,
			required: true
		},
		eventName: {
			type: String,
			required: true
		},
		eventId: {
			type: Number,
		}
    },
}
</script>

<style scoped>
</style>