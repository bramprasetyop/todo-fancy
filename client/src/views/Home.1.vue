    <template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="row">

        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <textarea  id="listnya" v-model="todo" class="materialize-textarea"></textarea>
                <label for="textarea1">Add new Todo</label>

                <button id="inidah" type="button" @click="postTodo" class="btn btn-danger btn-block">Add</button>
              </div>
            </div>
          </form>
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
import axios from 'axios'
import Navbar from '../components/navbar'
import List from './list.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    List
  },
  data() {
    return {
      todo: '',
      result: [],
      editmode: false
    }
  },
  created: function() {
    if (localStorage.hasOwnProperty('token') === true) {
      this.getdata()
      this.$router.push('/home')
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    postTodo() {
      let addTodo = {
        content: this.todo
      }
      // console.log(addTodo)

      axios
        .post('http://localhost:3000/content', addTodo, {
          headers: { token: localStorage.getItem('token') }
        })
        .then(response => {
          this.result.push(response.data.todo)
          this.result.reverse()
          swal({
            text: 'Add New Todo Success!',
            icon: 'success'
          })
          this.todo = ''
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
    }
  }
}
</script>

<style>
.textArea {
  border-radius: 5px;
  border: none;
}

#brand {
  color: azure;
}
#listnya {
  color: azure;
}
#inidah{
  background-color: rgb(172, 24, 24);
}

</style>




    
