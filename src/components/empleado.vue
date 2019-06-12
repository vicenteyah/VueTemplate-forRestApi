<template>
    <nav>
    <form @submit.prevent="consumirAPI">
      <div class="form-group">
        <label>Busqueda por Id del Empleado</label>
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
          <th>Dirección</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="empleado in  datos_empleados" :key="empleado.id">
          <td>{{ empleado.id }}</td>
          <td>{{ empleado.nombre }}</td>
          <td>{{ empleado.apaterno }}</td>
          <td>{{ empleado.amaterno }}</td>
          <td>{{ empleado.telefono }}</td>
          <td>{{ empleado.direccion }}</td>
        </tr>
      </tbody>
    </table>

</nav>
  

     
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      id : '',
      datos_empleados: [],
      url: "http://192.168.0.20:3000/datos_empleados/"
    };
  },
  created() {
  this.consumirAPI();
  },
  methods: {
    consumirAPI () {
      axios.get(this.url + this.id).then(response => {
        console.log("passs")
        this.datos_empleados = response.data;
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