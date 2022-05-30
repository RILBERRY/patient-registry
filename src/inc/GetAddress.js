import {ref} from '@vue/reactivity'

const GetAddress = (id) => {
    const address = ref(null)
    const err = ref(null)

    const load = async () => {
        try {
            let data = await fetch("http://127.0.0.1:8000/api/address/" + id )
            if(!data.ok){
                throw Error("that address dose not exist") 
            } 
            address.value = await data.json()
        }
        catch(error) {
            err.value = error.message
        }
    }

    return {address, err, load}
}
export default GetAddress