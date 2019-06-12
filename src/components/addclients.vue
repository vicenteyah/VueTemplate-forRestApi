<template>
  <div>
    <nav>
      <h2>Agregar Cliente</h2>
       <input v-model="cliente.nombre" placeholder="Nombre">
      <p>Nombre:</p>
      <input v-model="cliente.apaterno" placeholder="Apellido Paterno">
      <p>Apellido Paterno:</p>
      <input v-model="cliente.amaterno" placeholder="Apellido Materno">
      <p>Apellido Materno: </p>
      <input v-model="cliente.telefono" placeholder="telefono">
      <p>Telefono: </p>
      <input v-model="cliente.direccion" placeholder="Direccion">
      <p>Direccion: </p>
      <button class="btn btn-dark" @click.prevent="hacerPost">Agregar</button>

      <!--- Metodo update-->
      <h2>Actualizar cliente</h2>
      <input v-model="cliente.id" placeholder="id">
      <p>ID del usuario:</p>
      <input v-model="cliente.nombre" placeholder="nombre">
      <p>Nombre del usuario:</p>
      <input v-model="cliente.apaterno" placeholder="Apellido Paterno">
      <p>Apellido Paterno:</p>
      <input v-model="cliente.amaterno" placeholder="Apellido Materno">
      <p>Apellido Materno: </p>
      <input v-model="cliente.telefono" placeholder="Telefono">
      <p>Telefono: </p>
      <input v-model="cliente.direccion" placeholder="Direccion">
      <p>Direccion: </p>
      <button class="btn btn-dark" @click.prevent="hacerPut">Actualizar</button>
      <!--Eliminar cliente-->

      <h2>Eliminar cliente</h2>
      <input v-model="cliente.id" placeholder="id">
      <p>ID del cliente: </p>
      <button class="btn btn-dark" @click.prevent="hacerDelete">eliminar</button>
    </nav>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      cliente: {
        id: null,
        nombre: '',
        apaterno: '',
        amaterno: '',
        telefono: null,
        direccion: ''
      },
      url: "http://192.168.0.20:3000/clientes"
    };
  },
  methods: {
    hacerPost() {
      console.log(this.cliente);
      axios
        .post(this.url, this.cliente)
        .then((response) => { //usea arrow functions (funciones flecha)
        console.log(response);
        alert("Usuario agregado")
        this.$router.push('/clientes');
          console.log(this.$router)
        })
        .catch((error) => { //
          console.log(error);
        });
    },
    hacerPut() {
      console.log(this.user);
      axios
        .put(this.url + "/" + this.cliente.id, this.cliente)
        .then(function(response) {
          console.log(response);
          alert("Usuario actualizado");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    hacerDelete() {
      console.log(this.cliente);
      axios.delete(this.url + "/" + this.cliente.id, this.cliente)
        .then(function(response) {
          console.log(response);
          alert("usuario eliminado");
        })
        .catch(function(error) {
          console.log(error);
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
