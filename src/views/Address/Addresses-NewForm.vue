<template>
  <div class="BodyCont">
      <!-- <div class="SubHeading"> -->
          <h2>Add New Address Details</h2>
    <!-- </div> -->
    <div class="DetailCont">
        <div class="FormCont">
            <h4 class="GroupHeading">Address</h4>
            <div class="GroupCont">
                <div class="InputCont SubA">
                    <label>Floor/Aprt. No</label>
                    <input type="text" placeholder="3st floor B or 3B">
                 </div>
                <div class="InputCont SubB">
                    <label>House Name</label>
                    <input type="text"  placeholder="Eg:M.dhonfaruge">
                </div>
            </div>
           <div class="GroupCont">
                <div class="InputCont SubA">
                    <label>PostCode</label>
                    <input type="text"  placeholder="Eg:20121">
                 </div>
                <div class="InputCont SubB">
                    <label>Street</label>
                    <input type="text"  placeholder="Street">
                </div>
            </div>
            <div class="GroupCont justCenter">
                <button class="Btn greenBtn">Save</button>
                <button class="Btn redBtn">Clear form</button>
            </div>
       </div>
    </div>
  </div>
</template>


<script>
export default {

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

</style>