<template>
<tbody>
	<tr class="persons-list__row" v-for="(person, index) of persons" :key="index">
		<td class="persons-list__cell">{{person.id}}
		<td class="persons-list__cell">{{person.name}} {{person.lastName}}</td>
		<td class="persons-list__cell">{{eventName}}</td>
	</tr>
</tbody>

</template>

<script>


export default {
	components: {
        
    },
	props: {
		persons: {
			type: Array,
			required: true
		},
		eventName: {
			type: String,
			required: true
		}
    },
	methods: {
	}
}
</script>

<style scoped>
</style>