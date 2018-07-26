<template>
  <div v-if="!isdeleted" class="row">
    <div class="col s8 ">
      <div id="lah" v-if="!editmode">
        <div class="row">
          <div class="col s6 right">
            <h6 id="yadah">{{currentDate}} </h6>
          </div>
          <div class="col s6 right">
            <h6> {{updatetodo}} </h6>
          </div>
        </div>

      </div>
      <div v-else class="col s12 m6 l6">
        <div class="row">
          <div class="col s6">
            <input id="yadah" v-model="updatetodo">
          </div>
          <div class="col s6">
            <DatePicker v-model="date" type="date" format="DD-MM-YYYY" lang="en" :not-before="new Date()"></DatePicker>
          </div>
        </div>

        <div class="row">
          <a href>
            <div class="col s4 m3 l3">
              <button id="inidah" @click="editTodo(item)" class="btn-floating btn-small waves-effect magenta waves-light">
                <i class="small material-icons">save</i>
              </button>
            </div>
          </a>
          <div class="col s4 m3 l3">
            <button id="inidah" @click="toggleedit()" class="btn-floating btn-small waves-effect magenta waves-light">
              <i class="small material-icons">clear</i>
            </button>
          </div>
        </div>
      </div>

    </div>
    <div v-if="!editmode" class="col s4">
      <td>
        <button id="inidah" @click="deleteTodo(item._id)" class="btn-floating btn-small waves-effect magenta waves-light">
          <i class="small material-icons">clear</i>
        </button>
      </td>
      <td>
        <button id="inidah" @click="toggleedit()" class="btn-floating btn-small waves-effect magenta waves-light">
          <i class="small material-icons">create</i>
        </button>
      </td>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
import DatePicker from 'vue2-datepicker'

export default {
  components: {
    DatePicker
  },
  data() {
    return {
      editmode: false,
      isdeleted: false,
      updatetodo: this.item.content,
      lalala: this.item.content,
      currentDate: '',
      date: ''
    }
  },
  props: ['item'],
  created() {
    this.getDate()
    if (localStorage.hasOwnProperty('token') === true) {
      this.$router.push('/home')
      // this.getdata()
      this.deleteTodo(id)
      this.editTodo(id)
    }
    this.$router.push('/')
  },
  methods: {
    getDate() {
      var d = new Date(this.item.date)
      // console.log(d);

      var day = d.getDate()
      // console.log(day);
      var month = d.getMonth() + 1
      var year = d.getFullYear()
      var fullYear = `${day}/ ${month}/ ${year}`
      this.currentDate = fullYear
      // console.log(this.currentDate);
    },
    toggleedit() {
      this.editmode = !this.editmode
    },
    deleteTodo(id) {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this Todo!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          swal('Poof! Your Todo has been deleted!', {
            icon: 'success'
          })
          axios
            .delete(`http://localhost:3000/content/delete/${id}`, {
              headers: {
                authorization: token
              }
            })
            .then(response => {
              this.isdeleted = true
            })
        } else {
          swal('Your Todo is safe!')
        }
      })

      let token = localStorage.getItem('token')
    },
    editTodo(item) {
      let token = localStorage.getItem('token')
      const body = {
        content: this.updatetodo,
        date: this.date
      }

      axios
        .put(`http://localhost:3000/content/edit/${item._id}`, body, {
          headers: {
            authorization: token
          }
        })
        .then(response => {
          this.$router.push('/home')
          this.editmode = false
        })
    }
  }
}
</script>






