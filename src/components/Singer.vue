<template>
<div  v-if="sinatra" >
  <Frank />
</div>
 
 <div class="singers" v-if="!sinatra">
   
    <div class="header-top">
          <input type="text" placeholder="search a song or an artist" >

        </div>
    <div class="singer" v-on:click="sinatra = true">
              <img src="./img/sinatra.png">
            </div>
             <div class="singer">
              <img src="./img/Nat-King-Cole.png">
            </div>
             <div class="singer">
              <img src="./img/Louis-Armstrong.png">
            </div>
             <div class="singer">
              <img src="./img/davis.png">
            </div>
              <div class="singer">
              <img src="./img/Grenade1.png">
            </div>
             <div class="singer">
              <img src="./img/john.png">
            </div>
 </div>


</template>

<script>
import Frank from './Frank'
export default {
  components:{
    Frank
  },
  data(){
    return{
      sinatra:false
    }
  }

}
</script>

<style>

</style>