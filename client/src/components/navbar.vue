<template>
  <div id="rownavbar" class="row ">
    <div class="col s12 m6 l12">
      <div id="mak" class="col s8 m6 ">
        <a style="font-size: 45px" class="brand-logo">
          <i id="material" class="material-icons" style="font-size: 30px">border_color</i>
          <b>Todo</b>
        </a>
      </div>

      <div v-if="logoutGan" id="mak" class="col s4 m6 ">
        <button id="yo" @click="logout">
          <i id="buton" class="large material-icons" style="font-size: 40px">forward</i>
        </button>
      </div>
    </div>

  </div>

</template>
<script>
export default {
  data() {
    return {
      logoutGan: false
    }
  },
  created() {
    if (localStorage.hasOwnProperty('token')) {
      this.logoutGan = true
    } else {
      this.logoutGan = false
    }
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







