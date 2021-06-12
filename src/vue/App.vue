<template>
  <div class="vue">
    <router-view></router-view>
  </div>
</template>

<script>
import EventsList from "./EventsList/EventsList.vue"
import Participation from "./Participation/Participation.vue"

export default {
  components: {
    EventsList,
    Participation
  },
  mounted() {
    window.store.subscribe(() => {
      this.eventsList = window.store.eventsList
    }),
    window.store.subscribe(() => {
      this.persons = window.store.persons
    })
  },
  data() {
    return {
      persons: window.store.persons,
      eventsList: window.store.eventsList,
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
