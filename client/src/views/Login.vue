    <template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="row">
        <div class="col s12 m6 l6">
          <form class="loginform">
            <div class="form-group">
              <label for="exampleInputEmail1">
                <b>Email</b>
              </label>
              <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">
                <b>Password</b>
              </label>
              <input name="password" type="password" v-model="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="row">
              <div class="col s12 m3 l3">
                <button id="inidah" type="button" @click="login" class="btn btn-danger btn-block">Login</button> &nbsp;
              </div>

              <div class="col s12 m9 l9">
                <a @click="loginFb()" class="fb btn">
                  <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                </a>
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

import { getFbAPI } from '@/helpers/fbApi.js'
import { firebase, providerFB } from '@/helpers/firebase.js'

export default {
  name: 'signup',
  components: {
    Navbar
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  created: function() {
    if (localStorage.hasOwnProperty('token') === true) {
      this.$router.push('/home')
    }
  },
  methods: {
    login() {
      let account = {
        email: this.email,
        password: this.password
      }
      axios
        .post('http://localhost:3000/signin', account)
        .then(response => {
          // console.log(response.data.customers.userName.split(/[0-9]/).join(''));

          localStorage.setItem('token', response.data.token)
          this.$router.push('/home')
          swal({
            text: 'Login Success',
            icon: 'success'
          })
        })
        .catch(err => {
          swal({
            text: 'Wrong Email/Password!',
            icon: 'error'
          })
        })
    },
    // ====================== tambahan yang ini coy ===========================

    loginFb() {
      firebase
        .auth()
        .signInWithPopup(providerFB)
        .then(result => {
          // console.log(result.user.providerData[0].displayName);

          // var token = result.credential.accessToken

          // console.log(token)
          // localStorage.setItem('token', token)
          swal({
            text: 'Login Success',
            icon: 'success'
          })

          let account = {
            fullName: result.user.providerData[0].displayName,
            userName: result.user.providerData[0].displayName,
            phone: result.user.providerData[0].phoneNumber,
            email: result.user.providerData[0].email,
            password: result.user.providerData[0].displayName
          }

          axios
            .post('http://localhost:3000/loginWithFb', account)
            .then(response => {
              // console.log(response.data.token);
              // this.$router.push('/login')
              console.log('masuk lah gan', response.data.token)

              localStorage.setItem('token', response.data.token)
              this.$router.push('/home')
            })
            .catch(err => {})

          // var user = result.user
          // console.log(result)

          // console.log(result.user.providerData[0].displayName)
        })
        .catch(function(error) {
          var errorCode = error.code
          var errorMessage = error.message
          var email = error.email
          var credential = error.credential
        })
    }
    // ====================== tambahan yang ini coy ===========================
  }
}
</script>






    
