<template>
    <nav>
    <form @submit.prevent="consumirAPI">
      <div class="form-group">
        <label>¿Qué estas bucando?</label>
        <div class="input-group">
          <input v-model="id" class="form-control">
          <button class="btn btn-dark" @click="consumirAPI">OK</button>
        </div>
      </div>
    </form>

    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Catálogo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pizza in  tipos_pizza" :key="pizza.id">
          <td>{{ pizza.id }}</td>
          <td>{{ pizza.nombre }}</td>
        </tr>
      </tbody>
    </table>
</nav>
</template>
<script>
import axios from "axios";
export default {
  name: "app",
 data () {
   return {
     id: '',
     tipos_pizza : [],
     url : "http://192.168.0.20:3000/tipos_pizza/"
   }
 },
created() {
  this.consumirAPI();
},
methods: {
    consumirAPI () {
      axios.get(this.url + this.id).then(response => {
        console.log("passs")
        this.tipos_pizza = response.data;
        console.log("yes");
      }).catch(error => {
        console.log(error)
      });
    }
    
}
};
</script>
<style>
table{
  border :blue;
}
th{
  border : 5px blue;
}
</style>