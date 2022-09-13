import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sidebar from '../components/Sidebar.vue'
// EN ROUTES VAMOS A AÑADIR LAS RUTAS... A LAS CUALES ACCEDEREMOS A TRAVÉS DE ROUTER-LINKS
// FIJARSE QUE LA VISTA HOME ESTA ARRIBA IMPORTADA, POR LO QUE SIEMPRE SE VA A IMPORTAR DE INICIO
// EN CAMBIO LA VISTA ABOUT SOLO SE CARGARA EN MEMORIA CUANDO ACCEDAMOS A DICHA RUTA, ESTO ES CONOCIDO COMO LAZY LOAD
// POR SI LO VEIS POR AHI, YA ENTRARÍA EN NIVELES DE RENDIMIENTO Y ESO PERO BUENO, NUNCA ESTA DE MAS QUE NOS SUENE.
// RECORDAR QUE AL ESPECIFICAR EN COMPONENTS EL ASIDE (ESTO ESTA EN APP.VUE) NOS VA A PINTAR AL ENTRAR EN CADA RUTA
// EN EL ASIDE EL SIDEBAR Y EN EL DEFAULT LA VISTA CORRESPONDIENTE.
// AQUÍ TAMBIÉN HAY CICLO DE VIDA Y SE PODRÍA AÑADIR EN EL beforeRouteEnter POR EJEMPLO UNA COMPROBACIÓN DE LOGIN Y
// SI NO TIENES PERMISOS PUES TE ENVÍO A /LOGIN OTRA VEZ O LO QUE SE CONSIDERE OPORTUNO
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        aside: Sidebar
      }
    },
    {
      // ESTA RUTA SE CARGA LA VISTA CON LAZY LOAD LO QUE SIGNIFICA QUE SOLO SE CARGA EL COMPONENTE AL VISITAR LA URL
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import('../views/AboutView.vue'),
        aside: Sidebar
      }
    }
  ]
})

export default router
