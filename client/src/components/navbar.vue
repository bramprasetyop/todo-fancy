<template>
  <nav>
    <div class="nav-wrapper">
      <a style="font-size: 45px" href="#!" class="brand-logo">
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
      localStorage.clear()
      this.$router.push('/')
      this.$router.push('/login')
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
</style>






