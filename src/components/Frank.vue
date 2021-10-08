<template>
<div class="cover">
    <img src="./Franck-sinatra/cover1.png">

</div>
   <div class="playlist">
        <div class="charts">
          <h3>Playlist : Frank Sinatra</h3>
        <button v-for="song in songs" :key="song.src"  @click="play(song)" :class="(song.src == current.src) ? 'song playing' : 'song'">
         <img :src="song.img">
         {{ song.title }} - {{ song.artist }}
        </button>
        </div>
      </div>  
 <div class="player">
     <div>
         <img :src="current.img" id="img-song" class="">
            <h2 class="song-title">{{ current.title }}    -   {{ current.artist }}  </h2>

                        <a class="controls">
          <button class="prev" @click="prev"><i class="fas fa-step-backward"></i></button>
          <button class="play" v-if="!isPlaying" @click="play"><i class="fas fa-play-circle"></i></button>
          <button class="pause" v-else @click="pause"><i class="fas fa-pause-circle"></i></button>
          <button class="next" @click="next"><i class="fas fa-step-forward"></i></button>
        </a>

     </div>
   
   
   
        
      </div>
    
    
</template>

<script>
export default {
    data(){
         return{
              current: {},
      index: 0,
      isPlaying: false,

           songs: [
        {
          title: 'Fly Me To The Moon',
          artist: 'Frank Sinatra',
          src: require('./Franck-sinatra/Frank Sinatra - Fly Me To The Moon.mp3'),
          img:require('./Franck-sinatra/flymetothemoon.png')
        },
        {
          title: 'Thats Life',
          artist: 'Frank Sinatra',
          src: require('./Franck-sinatra/Frank Sinatra - Thats Life.mp3'),
          img:require('./Franck-sinatra/flymetothemoon.png')

        },
        {
          title: 'Killing me softly',
          artist: 'Frank Sinatra',
          src: require('./Franck-sinatra/Frank Sinatra-Killing me softly.mp3'),
          img:require('./Franck-sinatra/flymetothemoon.png')

        },
        {
          title: 'I Love You Baby',
          artist: 'Frank Sinatra',
          src: require('./Franck-sinatra/Frankie Valli - Frank Sinatra I Love You Baby.mp3'),
          img:require('./Franck-sinatra/flymetothemoon.png')

        }
        ,
        {
          title: 'I Love You Baby',
          artist: 'Frank Sinatra',
          src: require('./Franck-sinatra/Frankie Valli - Frank Sinatra I Love You Baby.mp3'),
          img:require('./Franck-sinatra/flymetothemoon.png')

        },
        {
          title: 'I Love You Baby',
          artist: 'Frank Sinatra',
          src: require('./Franck-sinatra/Frankie Valli - Frank Sinatra I Love You Baby.mp3'),
          img:require('./Franck-sinatra/flymetothemoon.png')

        },
        {
          title: 'I Love You Baby',
          artist: 'Frank Sinatra',
          src: require('./Franck-sinatra/Frankie Valli - Frank Sinatra I Love You Baby.mp3'),
          img:require('./Franck-sinatra/flymetothemoon.png')

        }
      ],
      player: new Audio()
    }
  },

    methods: {
    singer()
   {
   this.$router.push('./components/singer.vue'); 
   },
 previous(){
		document.getElementById('albums').scrollLeft -= 270;
},

 suivant()
{
		document.getElementById('albums').scrollLeft += 270;
},

rotate(){
},


    play (song) {
     document.getElementById('img-song').classList.add('active');
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.player.addEventListener('ended', function () {
        this.index++;
        if (this.index > this.songs.length - 1) {
          this.index = 0;
        }
        this.current = this.songs[this.index];
        this.play(this.current);
      }.bind(this));
      this.isPlaying = true;
    },
    pause () {
     document.getElementById('img-song').classList.remove('active');

      this.player.pause();
      this.isPlaying = false;
    },
    next () {
     document.getElementById('img-song').classList.add('active');

      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    },
    prev () {
     document.getElementById('img-song').classList.add('active');

      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current);
    }
  },
  created () {

    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  }

         
    

}
</script>

<style scoped>
*{
    margin: 0%;
}
.cover{
    position: absolute;
    width: 100%;
    height: 40vh;
    margin: 0px;
    top: 0px;
    left: 0px;
}
.cover img{
    position: relative;
    width:40vh;
    height:40vh;
}
.player{
    position: absolute;
    width: 100%;
     top: 90vh;
    left: 0px;
    height: 10vh;
    background: rgb(26, 26, 26);
  
    justify-content: center;
    text-align: center;
    border-radius: 0px;
    margin: auto;
 
}
.player div{
    position: relative;
    margin: auto;
    height: 100%;
    margin-left: 0px;
    display: flex;
    width: 50%;
    }

.player img{
  position: relative;
  margin: auto;
  width: 50px;
  height: 50px;
 border-radius: 50%;
 left: 10px;
 top: 0px;
 display: block;
}
.active{
  animation: rotate infinite 4s;
}
.innactive{
  animation: none;
}
@keyframes rotate{
  0%{
    transform: rotate(0deg);
  }

  50%{
        transform: rotate(180deg);
  }

  100%{
        transform: rotate(360deg);
  }
}
.song-title {
  position: relative;
    color: rgb(241, 238, 238);
  font-size: 17px;
  left: 30px;
  min-width: 350px;
  margin: auto;
  text-align: left;
  font-weight:normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
.song-title span {
  font-size: 16px;
  left: 30px;
  position: relative;
}

.controls {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0vh;
  left: 30%;

}
button {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}
.play, .pause {
  font-size: 30px;
  
  border-radius: 50%;
    color: rgb(241, 238, 238);
}
.next, .prev {
  font-size: 16px;
  margin: 0px 15px;
    color: rgb(241, 238, 238);
}
.prev{
  position: relative;
  right: 50px;
}
.next{
  position: relative;
  left: 50px;
}
.playlist{
    position: absolute;
    width: 100%;
    left: 0px;
    top: 42vh;
    padding-left: 5%;
    overflow-y: scroll;
    background: #E4E4E4;
   
}

.playlist .song {
  display: block;
  top: 0px;
    width: 80%;
  padding-left: 3%;
  box-shadow: 0px 5px 5px rgba(0,0,0,0.1);
  text-align: left;
  border-radius: 10px;
  line-height: 70px;
  background: white;
    color: rgb(87, 87, 87);

  margin-top: 10px;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  cursor: pointer;
}
.playlist .song img{
  position: relative;
  width: 30px;
  height: 30px;
  top: 10px;
  margin-right: 30px;
}
.playlist .song:hover {
    color: rgb(87, 87, 87);
  background: whitesmoke;
}
.playlist .song.playing {
  /*background-image: linear-gradient(to right, #CC2E5D, #FF5858);*/
    color: rgb(87, 87, 87);
  background: rgb(255, 255, 255);
}
</style>