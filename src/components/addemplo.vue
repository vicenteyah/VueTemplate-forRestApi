<template>
    <nav>
    <h2>Registra tus datos</h2>
      <input v-model="addemplo.nombre" placeholder="Nombre">
      <p>Nombre: {{ nombre }}</p>
      <input v-model="addemplo.apaterno" placeholder="Apellido Paterno">
      <p>Apellido Paterno: {{ apaterno }}</p>
      <input v-model="addemplo.amaterno" placeholder="Apellido Materno">
      <p>Apellido Materno: {{ amaterno }}</p>
      <input v-model="addemplo.telefono" placeholder="Telefono">
      <p>Telefono: {{ telefono }}</p>
      <input v-model="addemplo.dirección" placeholder="Dirección">
      <p>Dirección: {{ dirección }}</p>
      <button class="btn btn-dark" @click.prevent="hacerPost">Join Now</button>
    </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      addemplo: {
        id: null,
        nombre: '',
        apaterno: '',
        amaterno: '',
        telefono: null,
        direccion: ''
      },
      url: "http://localhost:3000/datos_empleados"
    };
  },
  methods: {
    hacerPost() {
      console.log(this.addemplo);
      axios
        .post(this.url, this.addemplo)
        .then((response) => {
          console.log(response);
          alert(" usuario añadido");
          this.$router.push('/addemplo')
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>