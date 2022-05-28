<template>
  <div class="BodyCont">
    <h2>Add New Islands Details</h2>
    <div class="DetailCont">
        <form class="FormCont" @submit.prevent="handelSubmit">
            <div class="err" v-if="AtollInpErr || IslandInpErr || CountryInpErr">
                <p v-if="AtollInpErr">{{AtollInpErr}}</p>
                <p v-if="IslandInpErr">{{IslandInpErr}}</p>
                <p v-if="CountryInpErr">{{CountryInpErr}}</p>
            </div>
            <h4 class="GroupHeading">Island</h4>
           <div class="GroupCont">
                <div class="InputCont SubA">
                    <label>Atoll</label>
                    <input type="text"  placeholder="Atoll" v-model="atoll">
                 </div>
                <div class="InputCont SubB">
                    <label>Island Name</label>
                    <input type="text" placeholder="Island Name" v-model="islandName">
                </div>
            </div>
           <div class="GroupCont">
               <div class="InputCont SubFull">
                    <label>Country</label>
                    <select name="" v-model="country">
                        <option value="Maldives">Maldives</option>
                    </select>
                </div>
            </div>
            <div class="GroupCont justCenter">
                <button class="Btn greenBtn">Save</button>
                <div class="Btn redBtn" @click="resetForm">Clear form</div>
            </div>
       </form>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
    data () {
        return {
            atoll: '',
            islandName: '',
            country: 'Maldives',
            AtollInpErr: '',
            IslandInpErr: '',
            CountryInpErr: '',
        }
    },
    methods: {
        handelSubmit(){
            this.AtollInpErr = this.atoll == '' ? " - Atoll Field is required" : ''
            this.IslandInpErr = this.islandName == '' ? "- Island Field is required" : ''
            this.CountryInpErr = this.country == '' ? "- Country Field is required" : ''
            this.newQuery = {
                atoll: this.atoll,
                islandName: this.islandName,
                country: this.country
            }
            console.log(this.newQuery);
           
       
        },
        resetForm(){
            this.atoll = '',
            this.islandName = '',
            this.country = 'Maldives'
        }
    }
}
</script>

<style>
.BodyCont{
    /* position: fixed; */
    width: 90%;
    margin:auto;
    margin-top: 160px;
}
.DetailCont{
    background: #fff;
    border-radius: 10px;
}
.SubHeading h2{
    padding: 10px;
    position: relative;
    z-index: 1;
}
.FormCont{
    padding-top:20px;
    width: 340px;
    margin: auto;
    height: 70vh;
}
.DataRow{
    border-radius: 10px;
    background-color: #e1e1e1;
}
.greenBtn{
    background-color: rgb(61, 179, 34);
}
.redBtn{
    background-color:rgb(177, 51, 51);
}
.InputCont{
    width: 100%;
}
.InputCont label, .InputCont input, .InputCont select{
    width: 100%;
    display: inline-block;
    text-align: left;
    padding: 2px 5px;
}
.GroupHeading{
    display: block;
    text-align: left;
}
.GroupCont{
    width: 100%;
    display: flex;
    justify-content: right;
}
.SubA{
    width: 35%;
    margin-right: 10px;
}
.SubB{
    width: 60%;
}
.SubFull{
    width: 98%;
}
.InputCont input, .InputCont select{
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgb(174, 174, 174);
}
.Btn{
    margin:10px;
    padding:10px;
    width: 45%;
    border: none;
    border-radius: 5px;
    color: #fff;
}
.err{
    width:300px;
    margin:auto;
    background-color:rgb(179, 61, 61);
    padding:10px;
    border-radius: 10px;
    color:#fff;
    font-weight: bold;
}
</style>