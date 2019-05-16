<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Seleccione una Opción</h2>
    <nav class="menu-principal">
      <router-link tag="a" to="/clientes" class="scroll-suave">Clientes</router-link>
      <router-link tag="a" to="/addclients" class="scroll-suave">Agregar-Clientes</router-link>
      <a href="https://www.facebook.com/angeljesus.canpech" class="scroll-suave">Contacta al huasteco</a>
    </nav>


  <router-view/>
  </div>


</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Pizzeria Huastecos®'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
