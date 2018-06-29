    <template>

  <div class="container">

    <Navbar/>
    <div class="row">

      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea1" v-model="todo" class="materialize-textarea"></textarea>
              <label for="textarea1">Add new Todo</label>

              <button type="button" @click="postTodo" class="btn btn-danger btn-block">Add</button>
            </div>
          </div>
        </form>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>
              <h5>Todo List</h5>
            </th>
          </tr>
        </thead>

        <tbody>

          <tr>

            <List v-for="(item) in result" :key="item._id" :item="item" />

          </tr>
        </tbody>
      </table>

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
    this.getdata()
  },
  methods: {
    postTodo() {
      let addTodo = {
        content: this.todo
      }
      // console.log(addTodo)

      axios
        .post('http://localhost:3000/content', addTodo, {
          headers: { authorization: localStorage.getItem('token') }
        })
        .then(response => {
          this.result.push(response.data.todo)
          this.result.reverse()

          // this.$router.push('/home')

          this.todo = ''
        })
        .catch(err => {
          console.log(err)
        })
    },
    getdata() {
      // console.log('kepanggil')
      axios
        .get('http://localhost:3000/content/all')
        .then(response => {
          // console.log(response.data.todos);

          this.result = response.data.todos.reverse()

          // this.$(router).push("/home");
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
</style>




    
