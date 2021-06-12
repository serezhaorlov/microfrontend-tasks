<template>
    <tr class="persons-list__row">
        <td class="persons-list__cell">{{event.id}}</td>
        <td class="persons-list__cell">{{event.name}}</td>
        <td class="persons-list__cell"><button @click="toggleParticipicationModal">&#10004;</button></td>
        <td class="persons-list__cell"><button @click="toggleEditEventModal">Edit</button></td>
        <td class="persons-list__cell"><button @click="deleteEvent" class="persons-list__delete-btn">X</button></td>
    </tr>
</template>

<script>
export default {
    methods:{
        deleteEvent(){
            this.$emit('delete-event', this.event.id)
        },
        toggleEditEventModal(){
            this.$emit('toggle-edit-event-modal', this.event.id)
        },
        toggleParticipicationModal(){
            this.$emit('toggle-participication-modal', this.event.id)
        }
    },
    props: {
        event: {
            type: Object,
        },
        participicators: {
            type: Array
        },
    }
}
</script>

<style>
.persons-list__delete-btn{
    color: red;
}

</style>
