import Vue from 'vue'
import Router from 'vue-router'
import clientes from '../components/clientes.vue'
import addclients from '../components/addclients.vue'
import pizza from '../components/pizza'
import empleado from '../components/empleado'
import addemplo from '../components/addemplo'

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
    },
    {
      path: '/pizza',
      name: 'pizza',
      component: pizza
    },
    {
      path: '/empleado',
      name: 'empleado',
      component: empleado
    },
    {
      path: '/addemplo',
      name: 'addemplo',
      component: addemplo
    }
]
export const router = new Router({
    mode: 'hash',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})
