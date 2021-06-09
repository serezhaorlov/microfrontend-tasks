<template>
  <div class="vue">
      <router-view :participation="participation" :eventsList="eventsList" :persons="persons"></router-view>
  </div>
</template>

<script>
import EventsList from "./EventsList/EventsList.vue"

export default {
  components: {
    EventsList
  },
  mounted() {
    window.store.subscribe(() => {
            this.eventsList = window.store.eventsList
        })
    window.store.subscribe(() => {
      this.participation = window.store.participation
    })
  },
  data() {
    return {
      participation: window.store.participation,
      persons: window.store.persons,
      eventsList: window.store.eventsList,

    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .vue{
    display: flex;
    
  }

  

  .vue__to-react-btn{
      width: 150px;
      height: 30px;
      padding: 0;
      outline: none;
      border: 2px solid lightskyblue;
      color: lightskyblue;
      border-radius: 20px;
      margin: 100px 0 0;
  }

  .vue__to-react-btn:hover{
      opacity: .8;
      transform: scale(1.1);
      transition: all 0.3s ease-out;
  }

  .vue__to-events-btn{
      width: 150px;
      height: 30px;
      padding: 0;
      outline: none;
      border: 2px solid crimson;
      color: crimson;
      border-radius: 20px;
      margin: 10px 0 0;
  }

  .vue__to-events-btn:hover{
      opacity: .8;
      transform: scale(1.1);
      transition: all 0.3s ease-out;
  }
</style>
