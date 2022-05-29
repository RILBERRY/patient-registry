<template>
  <div class="BodyCont">
      <!-- <div class="SubHeading"> -->
          <h2>Add New Address Details</h2>
    <!-- </div> -->
    <div class="DetailCont">
        <form class="FormCont" @submit.prevent="handelSubmit">
            <div class="err" v-if="isErr">
                <p v-if="floorInpErr">{{floorInpErr}}</p>
                <p v-if="houseNameInpErr">{{houseNameInpErr}}</p>
                <p v-if="postCodeInpErr">{{postCodeInpErr}}</p>
                <p v-if="streetInpErr">{{streetInpErr}}</p>
            </div>
            <div class="Succ" v-if="msg">
                <p>{{msg}}</p>
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
            <div class="GroupCont justCenter">
                <button class="Btn greenBtn" >Save</button>
                <div class="Btn redBtn"  @click="resetForm">Clear form</div>
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
            floor: '',
            houseName: '',
            postCode: '',
            street: '',
            floorInpErr: '',
            houseNameInpErr: '',
            postCodeInpErr: '',
            streetInpErr: '',
            isErr: false,
            msg: '',
        }
    },
    methods: {
        handelSubmit(){
            this.floorInpErr = this.floor == '' ? " - Floor Field is required" : ''
            this.houseNameInpErr = this.houseName == '' ? "- House Name Field is required" : ''
            this.postCodeInpErr = this.postCode == '' ? "- Post code Field is required" : ''
            this.streetInpErr = this.street == '' ? "- Street Field is required" : ''
            if(this.floorInpErr || this.houseNameInpErr || this.postCodeInpErr || this.streetInpErr){
                this.isErr = true
            }else{
                this.isErr = false
                this.newQuery = {
                    floor: this.floor,
                    houseName: this.houseName,
                    street: this.street,
                    postCode: this.postCode
                }
                axios.post("http://127.0.0.1:8000/api/address",this.newQuery).then((res)=>{
                   this.msg = res.data.msg
                   this.resetForm()
                   this.activate()
                })
            }
        },
        resetForm(){
                this.floor = '',
                this.houseName = '',
                this.postCode = '',
                this.street = ''
        },
        activate() {
            setTimeout(() => this.msg = '', 2000);
        }
    }
}
</script>

<style >
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
.Succ{
    width: 200px;
    margin:auto;
    padding: 10px;
    background-color:rgb(21, 158, 21);
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
}
</style>