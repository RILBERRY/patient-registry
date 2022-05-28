<template>
  <div class="BodyCont">
      <!-- <div class="SubHeading"> -->
          <h2>Add New Patients Details</h2>
    <!-- </div> -->
    <div class="DetailCont">
        <form class="FormCont" @submit.prevent="handelSubmit" >
            <div class="err" v-if="isErr">
                <p v-if="patientNameInpErr">{{patientNameInpErr}}</p>
                <p v-if="BoDInpErr">{{BoDInpErr}}</p>
                <p v-if="nationalIDInpErr">{{nationalIDInpErr}}</p>
                <p v-if="floorInpErr">{{floorInpErr}}</p>
                <p v-if="houseNameInpErr">{{houseNameInpErr}}</p>
                <p v-if="postCodeInpErr">{{postCodeInpErr}}</p>
                <p v-if="streetInpErr">{{streetInpErr}}</p>
                <p v-if="AtollInpErr">{{AtollInpErr}}</p>
                <p v-if="IslandInpErr">{{IslandInpErr}}</p>
                <p v-if="CountryInpErr">{{CountryInpErr}}</p>
            </div>
           <h4 class="GroupHeading">Patient</h4>
           <div class="InputCont">
               <label>Patinet Name</label>
               <input type="text" placeholder="Full Name" v-model="patientName">
           </div>
           <div class="InputCont">
               <label>Date of Birth</label>
               <input type="date" v-model="DOB" >
           </div>
           <div class="InputCont">
               <label>National ID</label>
               <input type="text"  placeholder="AXXXXXX" v-model="nationalID" >
           </div>
           <h4 class="GroupHeading">Address</h4>
           <div class="GroupCont">
                <div class="InputCont SubA">
                    <label>Floor/Aprt. No</label>
                    <input type="text" placeholder="3st floor B or 3B" v-model="floor">
                 </div>
                <div class="InputCont SubB">
                    <label>House Name</label>
                    <input type="text"  placeholder="Eg:M.dhonfaruge" v-model="houseName">
                </div>
            </div>
           <div class="GroupCont">
                <div class="InputCont SubA">
                    <label>PostCode</label>
                    <input type="text"  placeholder="Eg:20121" v-model="postCode">
                 </div>
                <div class="InputCont SubB">
                    <label>Street</label>
                    <input type="text"  placeholder="Street" v-model="street">
                </div>
            </div>
            <h4 class="GroupHeading">Island</h4>
           <div class="GroupCont">
                <div class="InputCont SubA">
                    <label>Atoll</label>
                    <input type="text"  placeholder="Atoll" v-model="atoll">
                 </div>
                <div class="InputCont SubB">
                    <label>Island Name</label>
                    <input type="text"  placeholder="Island Name" v-model="islandName">
                </div>
            </div>
           <div class="GroupCont">
               <div class="InputCont SubFull">
                    <label>Country</label>
                    <input type="text"  placeholder="Country" v-model="country">
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
            patientName: '',
            DOB: '',
            nationalID: '',
            patientNameInpErr: '',
            BoDInpErr: '',
            nationalIDInpErr: '',

            floor: '',
            houseName: '',
            postCode: '',
            street: '',
            floorInpErr: '',
            houseNameInpErr: '',
            postCodeInpErr: '',
            streetInpErr: '',

            atoll: '',
            islandName: '',
            country: 'Maldives',
            AtollInpErr: '',
            IslandInpErr: '',
            CountryInpErr: '',

            isErr: false,
        }
    },
    
    methods: {
        handelSubmit(){
            this.patientNameInpErr = this.patientName == '' ? "- Patient Name Field is required" : ''
            this.DOBInpErr = this.DOB == '' ? "- Date of birth Field is required" : ''
            this.nationalIDInpErr = this.nationalID == '' ? "- National id Field is required" : ''
            this.floorInpErr = this.floor == '' ? "- Floor Field is required" : ''
            this.houseNameInpErr = this.houseName == '' ? "- House Name Field is required" : ''
            this.postCodeInpErr = this.postCode == '' ? "- Post code Field is required" : ''
            this.streetInpErr = this.street == '' ? "- Street Field is required" : ''
            this.AtollInpErr = this.atoll == '' ? " - Atoll Field is required" : ''
            this.IslandInpErr = this.islandName == '' ? "- Island Field is required" : ''
            this.CountryInpErr = this.country == '' ? "- Country Field is required" : ''

            if(this.patientNameInpErr || this.DOBInpErr || this.nationalIDInpErr 
            || this.floorInpErr || this.houseNameInpErr || this.postCodeInpErr || this.streetInpErr
            || this.AtollInpErr || this.IslandInpErr || this.CountryInpErr){
                this.isErr = true
            }else{
                this.isErr = false
                this.newQuery = {
                    fullName: this.patientName,
                    DOB: this.DOB,
                    nationalID:this.nationalID,
                    floor: this.floor,
                    houseName: this.houseName,
                    postCode: this.postCode,
                    street:  this.street,
                    atoll: this.atoll,
                    islandName: this.islandName,
                    country: this.country
                }
                console.log(this.newQuery);
                axios.post("http://127.0.0.1:8000/api/patient",this.newQuery)
                .then((result)=>{
                    console.log(result)
                })
            }
        },
        resetForm(){
            this.patientName = '',
            this.DOB = '',
            this.nationalID = '',
            this.floor = '',
            this.houseName = '',
            this.postCode = '',
            this.street = ''
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
.SubHeading{
    position: fixed;
    width: 90%;
    background-color: #e1e1e1;
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
    overflow: scroll;
    /* display: flex; */
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
.InputCont label, .InputCont input{
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
.InputCont input{
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
.justCenter{
    justify-content: space-between;
}

@media only screen and (max-width: 400px) {
    .BodyCont{
        width: 100%;
    }
}
</style>