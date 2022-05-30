import {ref} from '@vue/reactivity'

const GetPatient = (id) => {
    const Patient = ref(null)
    const err = ref(null)

    const load = async () => {
        try {
            let data = await fetch("http://127.0.0.1:8000/api/patient/" + id )
            if(!data.ok){
                throw Error("that Patients dose not exist") 
            } 
            Patient.value = await data.json()
        }
        catch(error) {
            err.value = error.message
        }
    }

    return {Patient, err, load}
}
export default GetPatient