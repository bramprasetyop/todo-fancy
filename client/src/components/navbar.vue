<template>
  <nav id="inidia" >
    <div class="nav">
      <a style="font-size: 45px"  class="brand-logo">
        <i id="material" class="material-icons" style="font-size: 30px">border_color</i>
        <b>Todo</b>
      </a>
      <ul class="right hide-on-med-and-down">
        <li>
          <a @click="logout">
            <i class="large material-icons" style="font-size: 40px">forward</i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      if (localStorage.hasOwnProperty('token') === true) {
        swal({
          text: 'Logout Success',
          icon: 'success'
        })
        localStorage.clear()
        this.$router.push('/')
      }
    }
  }
}
</script>
<style>
h2 {
  margin-left: 20px;
  color: azure;
}

#material {
  margin-left: 20px;
}

#inidia{
  background-color: rgb(8, 8, 8);
}
</style>






