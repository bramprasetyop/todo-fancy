<template>
  <div class="home">
    <Navbar/>
    <!-- <img src="../assets/logo.png"> -->
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '../components/navbar'


export default {
  name: 'home',
  components: {
    HelloWorld,Navbar
  }
}
</script>
