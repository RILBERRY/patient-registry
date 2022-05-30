<template>
  <div class="BodyCont">
    <!-- <div class="SubHeading"> -->
      <h2>Islands Details</h2>
      <div class="BtnCont">
          <Router-link class="AddBtn" to="/islands/new">+ Add New Patient</Router-link>
      </div>
    <!-- </div> -->
    <div class="DetailCont">
        <div class="TableCont">
            <div class="row TableHeading">
                <div class="w-1 ">ID</div>
                <div class="w-3">ISLAND NAME</div>
                <div class="w-3">ATOLL</div>
                <div class="w-3">COUNTRY</div>
                <div class="w-2">ACTION</div>
            </div>
            <div class="DataCont">
                <div class="err-str" v-if="ServerErr">
                    <p v-if="ServerErr">{{ServerErr}}</p>
                </div>
                <div class="row DataRow" v-for="_IslandInfo in IslandInfo" :key="_IslandInfo.id" >
                    <div class="w-1 ">{{_IslandInfo.id}}</div>
                    <div class="w-3">{{_IslandInfo.islandName}}</div>
                    <div class="w-3">{{_IslandInfo.atoll}}</div>
                    <div class="w-3">{{_IslandInfo.country}}</div>
                    <div class="w-2 ActionCont">
                        <button class="SmallBtn edit">Edit</button>
                        <button class="SmallBtn delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>


<script>

export default {
data(){
    return {
        IslandInfo: [],
        ServerErr: ''
    }
},
mounted(){
    fetch('http://127.0.0.1:8000/api/island')
        .then(res => res.json())
        .then(data => this.IslandInfo = data)
        .catch(err => this.ServerErr = "Database Connection Faild! ")
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
    /* position: fixed; */
    background: #fff;
    /* height: 80vh; */
    border-radius: 10px;
}
.SubHeading{
    position: fixed;
    width: 90%;
    /* background-color: #764949; */
    background-color: #e1e1e1;
}
.SubHeading h2{
    padding: 10px;
    position: relative;
    z-index: 1;
}
.BtnCont{
    width: 100%;
    text-align: right;
    position: relative;
    top: -20px;
    z-index: 0;
}
.AddBtn{
    padding: 5px 20px;
    background-color: rgb(11, 109, 254);
    color: #fff;
    border-radius: 10px;
}
.AddBtn:hover{
    cursor: pointer;
}
.TableCont{
    width: 100%;
    padding: 10px
}
.TableHeading{
    border-bottom: 1px solid;
    font-weight:bold;
}
.row{
    width: 100%;
    padding: 3px;
    margin: 3px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color:green; */
}
.DataCont{
    width: 100%;
    height: 70vh;
    overflow: scroll;
}
.DataRow{
    border-radius: 10px;
    background-color: #e1e1e1;
    
}
.w-1{
    width: 100px;
}
.w-2{
    width: 30%;
}
.w-3{
    text-align:left;
    width: 40%;
}
.w-4{
    text-align:left;
    width: 60%;
}
.ActionCont{
    display:flex;
    justify-content: space-between;
}
.SmallBtn{
    width: 49%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid;
    color: #fff;
}
.edit{
    background-color: rgb(61, 179, 34);
}
.delete{
    background-color:rgb(177, 51, 51);
}
/* .row:hover{
    background-color: rgb(11, 109, 254);
    color: #fff;
} */


</style>