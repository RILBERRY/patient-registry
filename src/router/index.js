import { createRouter, createWebHistory } from 'vue-router'
import PatientView from '../views/Patient/Patients-index.vue'
import PatientNew from '../views/Patient/Patients-NewForm.vue'
import AddressView from '../views/Address/Addresses-index.vue'
import AddressNew from '../views/Address/Addresses-NewForm.vue'
import IslandView from '../views/Island/Islands-index.vue'
import IslandNew from '../views/Island/Islands-NewForm.vue'


const routes = [
  {
    path: '/',
    redirect: '/patients',
  },
  {
    path: '/patients',
    name: 'PatientView',
    component: PatientView
  },
  {
    path: '/patients/new',
    name: 'PatientNew',
    component: PatientNew
  },
  {
    path: '/address',
    name: 'AddressView',
    component: AddressView
  },
  {
    path: '/address/new',
    name: 'AddressNew',
    component: AddressNew
  },
  {
    path: '/islands',
    name: 'IslandView',
    component: IslandView
  },
  {
    path: '/islands/new',
    name: 'IslandNew',
    component: IslandNew
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
