<template>
  <v-container>
      <h1>This is a header</h1>
      <h2>This is a subheader</h2>
      <v-button v-on:click="count++">
        This button has been clicked {{count}} times
      </v-button>
      <br/>
      <v-btn v-on:click="count++" class='vuetify-button'>
        This button has been clicked {{count}} times
      </v-btn>
      <br/>
      <label>{{buttonCount}}</label>
      <v-btn v-on:click="resetCount">
        Reset
      </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'TestComponent1',
  data: function () {
    return {
      count: 0
    }
  },
  computed: {
    buttonCount() {
      return this.count > 5 ? 'Too many clicks' : 'Keep Clicking'
    }
  },
  methods: {
    resetCount: function (){
      this.count = 0
    }
  }
}
</script>

<style>
h1 {
  color: blue;
}
h2 {
  text-align: center;
}
.vuetify-button{
  background-color: wheat !important;
}
</style>