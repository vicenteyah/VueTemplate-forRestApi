import Vue from 'vue'
import Router from 'vue-router'
import clientes from '../components/clientes.vue'
import addclients from '../components/addclients.vue'


Vue.use(Router)

const routes =[
    {
      path: '/clientes',
      name: 'clientes',
      component: clientes
    },
    {
      path: '/addclients',
      name: 'Agregar Clientes',
      component: addclients
    }
]
export const router = new Router({
    mode: 'hash',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})
