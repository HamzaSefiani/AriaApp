<template>
   <div class="header-top">
          <input type="text" placeholder="search a song or an artist" >

        </div>
      <div class="artists">
          <h3>Billboard Topchart</h3>
          <div @click="previous" class="control-prev-btn">
		 <i class="fas fa-chevron-left"></i>
	</div>
	<div @click="suivant" class="control-next-btn">
		<i class="fas fa-chevron-right"></i>
	</div>
          <div id="albums" >
            <div class="album">
              <img src="./img/flymetothemoon.png">
            </div>
             <div class="album">
              <img src="./img/Louis-Armstrong.png">
            </div>
             <div class="album">
              <img src="./img/Nat-King-Cole.png">
            </div>
             <div class="album">
              <img src="./img/Grenade1.png">
            </div>
             <div class="album">
              <img src="./img/davis.png">
            </div>
          
 
        </div>
        </div>
</template>

<script>
export default {
    name:'app',

    methods:{
        previous(){
		document.getElementById('albums').scrollLeft -= 270;
},

 suivant()
{
		document.getElementById('albums').scrollLeft += 270;
},
    }

}


</script>

<style>

</style>