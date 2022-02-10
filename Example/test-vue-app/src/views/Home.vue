<template>
  <v-container>
    <vuex-component/>
    <test-component-1/>
    <test-component-1/>
    <test-component-1/>
    <hello-world />
  </v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import TestComponent1 from '../components/TestComponent1'
  import VuexComponent from '../components/VuexComponent'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
      TestComponent1,
      VuexComponent
    },
  }
</script>
