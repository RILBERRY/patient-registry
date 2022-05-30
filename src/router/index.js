import { createRouter, createWebHistory } from 'vue-router'
import PatientView from '../views/Patient/Patients-index.vue'
import patientInfo from '../views/Patient/Patients-index.vue'
import PatientNew from '../views/Patient/Patients-NewForm.vue'
import PatientEdit from '../views/Patient/Patients-EditForm.vue'
import AddressView from '../views/Address/Addresses-index.vue'
import AddressNew from '../views/Address/Addresses-NewForm.vue'
import AddressEdit from '../views/Address/Addresses-EditForm.vue'
import IslandView from '../views/Island/Islands-index.vue'
import IslandNew from '../views/Island/Islands-NewForm.vue'


const routes = [
  {
    path: '/',
    redirect: '/patients',
  },
  {
    path: '/patientinfo',
    name: 'patientinfo',
    component: patientInfo, 
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
  {
    path: '/address/edit/:id',
    name: 'AddressEdit',
    component: AddressEdit,
    props: true
  },
  {
    path: '/pateint/edit/:id',
    name: 'PateintEdit',
    component: PatientEdit,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
