<template>
  <v-container>
      <label>{{getCount}}</label>
      <br/>
      <v-btn v-on:click="increment" class='vuetify-button'>
        Increment
      </v-btn>
      <v-btn v-on:click="decrement" class='vuetify-button'>
        Decrement
      </v-btn>
      <v-btn v-on:click="resetCount">
        Reset
      </v-btn>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'VuexComponent',
  computed: {
    ...mapGetters(['getCount']),
  },
  methods: {
    ...mapActions(['increment','decrement','set']),
    resetCount: function (){
        this.set(0);
    }
  }
}
</script>

<style>
</style>