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
          <th>Nombre</th>
          <th>Apellido Paterno</th>
          <th>Apellido Materno</th>
          <th>Telefono</th>
          <th>Direccion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="clientes in clientes" :key="clientes.id">
          <td>{{ clientes.id }}</td>
          <td>{{ clientes.nombre }}</td>
          <td>{{ clientes.apaterno }}</td>
          <td>{{ clientes.amaterno }}</td>
          <td>{{ clientes.telefono }}</td>
          <td>{{ clientes.direccion }}</td>

        </tr>
      </tbody>
    </table>
    <router-link tag="a" to="/addclients" class="scroll-suave">Agregar, actualizar y eliminar clientes</router-link>
</nav>


</template>


<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      id : '',
      clientes : [],
      url: "http://192.168.0.20:3000/clientes/"
    };
  },
  created() {
  this.consumirAPI();
  },
  methods: {
    consumirAPI () {
      axios.get(this.url + this.id).then(response => {
        console.log("passs")
        this.clientes = response.data;
        console.log("yes");
      }).catch(error => {
        console.log(error)
      });
    }

  }
};
</script>

<style scoped>
h2 {
  color: #f44336;
  font-size: 40 px;
}
div {
  align-items: center;
}
</style>
