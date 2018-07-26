    <template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="row">

        <div class="row">
          <div class="col s12 center">
            <div id="bah" class="row">
              <div id="bah" class="col s4 left">
                <h6 style="color:white">Welcome {{customers}} !</h6>
              </div>

              <!-- ============= tambahan weather disini ========== -->
              <div id="bah" class="col s8 right">
                <h6 id="timing">{{weatherAgain.main.temp}} &#8451;</h6>
                <img v-bind:src="'http://openweathermap.org/img/w/' + weatherAgain.weather[0].icon + '.png'">
                <h6 id="timing"> Zone : {{weather.zone}}</h6>
                <h6 id="timing"> Local Time : {{weather.localtime}}</h6>

                <!-- ============= tambahan weather disini ========== -->

              </div>
              
              <div  class="row">

                <div id="yakeles" class="input-field col s6 m6 l6 center">
                  <textarea id="listnya" v-model="todo" class="materialize-textarea"></textarea>
                  <label for="textarea1">Add new Todo</label>

                  <button id="inidah" type="button" @click="postTodo" class="btn btn-danger btn-block">Add</button>
                </div>

                <div  id="nihgan" class="col s6 m6 l6 right">
                  <div  class="col s3 m3 l3">
                    <label for="textarea1">Due date</label>
                    <DatePicker type="date" format="DD-MM-YYYY" v-model ="date" lang="en" :not-before="new Date()"></DatePicker>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

        <table class="table table-striped">
          <thead>
            <tr>
              <th>
                <h5 id="brand">Todo List</h5>
              </th>
            </tr>
          </thead>

          <tbody>

            <tr id="lah">

              <List id="listnya" v-for="(item) in result" :key="item._id" :item="item" />

            </tr>
          </tbody>
        </table>

      </div>
    </div>

  </div>

</template>

<script>
import DatePicker from 'vue2-datepicker'
import axios from 'axios'
import Navbar from '../components/navbar'
import List from './list.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    List,
    DatePicker
  },
  data() {
    return {
      todo: '',
      result: [],
      editmode: false,
      weather: '',
      weatherAgain: '',
      customers: '',
      date: '',
      currentDate:''
    }
  },
  created: function() {
    if (localStorage.hasOwnProperty('token') === true) {
      this.getdata()
      this.$router.push('/home')
      this.getWeather()
      this.getWeatherAgain()
      this.getdataOne()
    } else {
      this.$router.push('/')
    }
  },
  methods: {

    postTodo() {
      let addTodo = {
        content: this.todo,
        date:this.date
      }
      // console.log(addTodo)

      axios
        .post('http://localhost:3000/content', addTodo, {
          headers: { token: localStorage.getItem('token') }
        })
        .then(response => {
          this.result.push(response.data.todo)
          this.result.reverse()

          // console.log('masuk sini');

          swal({
            text: 'Add New Todo Success!',
            icon: 'success'
          })
          this.todo = ''
          this.date=''
        })
        .catch(err => {
          swal({
            text: 'Cannot post empty Todo',
            icon: 'error'
          })
        })
    },
    getdata() {
      axios
        .get('http://localhost:3000/content/show', {
          headers: { token: localStorage.getItem('token') }
        })
        .then(response => {
          // console.log(response.data.dataTodos);

          this.result = response.data.dataTodos
        })
        .catch(err => {
          console.log(err)
        })
    },
    getdataOne() {
      axios
        .get('http://localhost:3000/customers/one', {
          headers: { token: localStorage.getItem('token') }
        })
        .then(response => {
          // console.log(response)

          this.customers = response.data.customers.fullName
            .split(/[0-9]/)
            .join('')
            .toUpperCase()

          // this.result = response.data.dataTodos
        })
        .catch(err => {
          console.log(err)
        })
    },

    //  ============= tambahan weather disini ==========

    getWeather() {
      axios
        .get(
          'http://api.worldweatheronline.com/premium/v1/tz.ashx?key=407b727e36594b6286834502181007&q=jakarta&format=json'
        )
        .then(response => {
          // console.log(response.data.dataTodos);
          // console.log(response.data.data.time_zone[0].zone);

          this.weather = response.data.data.time_zone[0]
        })
        .catch(err => {
          console.log(err)
        })
    },
    getWeatherAgain() {
      axios
        .get(
          'http://api.openweathermap.org/data/2.5/forecast?id=1642907&units=metric&APPID=6671e05679c0882dab719d2d8b238ea6'
        )
        .then(response => {
          // console.log(response.data.list[0].weather[0].icon)
          // console.log(response.data.data.time_zone[0].zone);

          this.weatherAgain = response.data.list[0]
        })
        .catch(err => {
          console.log(err)
        })
    }

    //  ============= tambahan weather disini ==========
  }
}
</script>

<style>
#bah{
  /* border: 2px solid white; */
}


</style>







    
