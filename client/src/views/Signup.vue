    <template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="row">
        <div class="col s12 m6 l6">
          <form class="loginform">
            <div class="form-group">
              <label for="fullname">
                <b>Fullname</b>
              </label>
              <input type="text" v-model="fullname" class="form-control" id="fullname" aria-describedby="fullname">
            </div>
            <div class="form-group">
              <label for="username">
                <b>Username</b>
              </label>
              <input type="text" v-model="username" class="form-control" id="username" aria-describedby="username">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">
                <b>Email</b>
              </label>
              <input type="email" v-model="emailsignup" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">
                <b>Password</b>
              </label>
              <input type="password" v-model="passwordsignup" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="form-group">
              <label for="phone">
                <b>Phone</b>
              </label>
              <input type="text" v-model="phone" class="form-control" id="phone" aria-describedby="phone">
            </div>
            <div id="iyaiya" class="row">
              <div id="iyaiyaa" class="col s4 m3 l3">
                <button id="inida" type="button" @click="signup" class="btn btn-danger btn-block">Signup</button>
              </div>

              <div id="iyaiyaa" class="col s4 m5 l2">

                <h6 style="text-align:center"> OR</h6>

              </div>

              <div id="iyaiyaa" class="col s4 m3 l3">

                <button id="inidah" type="button" class="btn btn-danger btn-block">
                  <router-link to="/login">Login</router-link>

                </button>

              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import Navbar from '../components/navbar'
// import router from '../router.js'

export default {
  name: 'register',
  components: {
    Navbar
  },
  data() {
    return {
      // emaillogin: '',
      // passwordlogin: '',
      fullname: '',
      username: '',
      phone: '',
      emailsignup: '',
      passwordsignup: ''
    }
  },
  methods: {
    kelogin() {
      this.$router.push('/login')
    },
    signup() {
      let account = {
        fullName: this.fullname,
        userName: this.username,
        phone: this.phone,
        email: this.emailsignup,
        password: this.passwordsignup
      }

      axios
        .post('http://localhost:3000/signup', account)
        .then(response => {
          // console.log(response.data.token);
          this.$router.push('/login')
          swal({
            text: 'Signup Success!',
            icon: 'success'
          })
        })
        .catch(err => {
          swal({
            text: 'Signup Failed!!',
            icon: 'error'
          })
        })
    }
  }
}
</script>






    
