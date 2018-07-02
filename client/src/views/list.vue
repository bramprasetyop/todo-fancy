<template>
  <div v-if="!isdeleted" class="row">
    <div class="col s8">
      <td id="lah" v-if="!editmode">
        <h6 id="yadah" >{{updatetodo}}</h6>
      </td>
      <td v-else class="col s6">
        <input id="yadah" v-model="updatetodo">
        <div class="row">
          <div class="col s3">
            <button id="inidah" @click="editTodo(item)" class="btn-floating btn-small waves-effect magenta waves-light">
              <i class="small material-icons">save</i>
            </button>
          </div>
          <div class="col s3">
            <button id="inidah" @click="toggleedit()" class="btn-floating btn-small waves-effect magenta waves-light">
              <i class="small material-icons">clear</i>
            </button>
          </div>
        </div>
      </td>

    </div>
    <div class="col s4">
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

export default {
  data() {
    return {
      editmode: false,
      isdeleted: false,
      updatetodo: this.item.content,
      lalala: this.item.content
    }
  },
  props: ['item'],
  created() {
    if (localStorage.hasOwnProperty('token') === true) {
      this.$router.push('/home')
      // this.getdata()
      this.deleteTodo(id)
      this.editTodo(id)
    }
    this.$router.push('/')
  },
  methods: {
    toggleedit() {
      this.editmode = !this.editmode
    },
    deleteTodo(id) {
      swal({
        title: 'Are you sure?',
        text:
          'Once deleted, you will not be able to recover this Todo!',
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
        content: this.updatetodo
      }

      axios
        .put(`http://localhost:3000/content/edit/${item._id}`, body, {
          headers: {
            authorization: token
          }
        })
        .then(response => {
          this.editmode = false
          // location.reload()

          // console.log('========', response)
          // this.$router.push('/home')
        })

      // // let body = item.content

      // const self = this

      // async function asyncFun() {
      //   const { value: text } = await swal({
      //     input: 'textarea',
      //     inputPlaceholder: 'Edit your todo here',
      //     showCancelButton: true,
      //     content: item.content
      //   })

      //   axios
      //     .put(`http://localhost:3000/content/edit/${item._id}`, body, {
      //       headers: {
      //         authorization: token
      //       }
      //     })
      //     .then(response => {
      //       self.getdata()

      //       // console.log('========', response.data.content)
      //       // this.$router.push('/home')
      //     })
      // }

      // asyncFun()
    }
  }
}


</script>

<style>
#inidah{
  background-color: rgb(172, 24, 24);
}

#yadah{
  color: azure;
}


</style>

