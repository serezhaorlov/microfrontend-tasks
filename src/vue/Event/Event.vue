<template>
    <tr class="persons-list__row" v-if="event">
        <td class="persons-list__cell">{{event.id}}</td>
        <td class="persons-list__cell">{{event.name}}</td>
        <td class="persons-list__cell"><button @click="toggleParticipicationModal(event.id)">&#10004;</button></td>
    </tr>
</template>

<script>
export default {
    props: {
        event: {
            type: Object,
        },
        index: {
            type: Number,
            required: true
        },
        participicators: {
            type: Array
        },
        toggleParticipicationModal: {
            type: Function
        }
    }
}
</script>

<style>
.persons-list__delete-btn{
    color: red;
}

</style>
