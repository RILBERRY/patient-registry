<template>
<div class="PageTop">
  <div class="TopCont">
    <h1 class="heading">Patient Registry</h1>
    <nav>
      <router-link to="/patients">PATIENT DETAILS</router-link> 
      <router-link to="/address">ADDRESS DETAILS</router-link>
      <router-link to="/islands">ISLAND DETAILS</router-link>
    </nav>
  </div>
</div>
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-color:#e1e1e1;
}
.PageTop {
  position: fixed;
  top: 0;
  width: 100%;
  height: 140px;
  background-color:#4EA8A8;
 
}
.TopCont{
  position: relative;
  top: 50px;
  max-width: 90%;
  margin:auto;
  display: flex;
  justify-content:space-between;
}
.heading{
  position: relative;
  font-size:30px;
  color:#fff;
}
nav{
  width:500px;
  display: flex;
  justify-content:space-evenly;
  align-items:end;

}
nav a{
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
}
nav a:hover{
  background-color:#2c3e50;
}
router-link{
  text-decoration: none;
}
@media only screen and (max-width: 400px) {
    .BodyCont{
        width: 100%;
    }
}
</style>

