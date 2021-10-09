Skip to content
Why GitHub? 
Team
Enterprise
Explore 
Marketplace
Pricing 
Search
Sign in
Sign up
TylerPottsDev
/
vuejs-music-app
Public
2413
Code
Issues
Pull requests
15
Actions
Projects
Wiki
Security
Insights
vuejs-music-app/src/App.vue
@TylerPottsDev
TylerPottsDev first commit
Latest commit 4053572 on 7 Jan 2020
 History
 1 contributor
199 lines (185 sloc)  3.82 KB
  
<template>

<head>
   <link 
        rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
        crossorigin="anonymous">
</head>
  <div id="app">
    <div class="left">
      <div class="logo">
        <img src="./assets/logo/logo.png">
      </div>
      <div class="menu">
        <button v-on:click="showsingers = false">Home</button>
        <button v-on:click="showsingers = true" @click="pause">popular artists</button>
        <button href="#">Playlists</button>
      </div>
    <div class="song-list">
      <h3>Song List</h3>
      <button href="#">Jazz</button>
      <button href="#">Contry Music</button>
      <button href="#">Arabic Music</button>
      <button href="#">See more</button>
    </div>

    </div>
    <div class="right">
       <div class="ad-container">
    <Adsense
      data-ad-client="ca-pub-1234567891234567"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      :data-full-width-responsive="true"
    >
    </Adsense>
  </div>
      <div v-if="showsingers" class="singers">
       <Singer />

      </div>
      <header v-if="!showsingers">
       <Header />
    </header>
    <main v-if="!showsingers">
 <div class="player">
          <img :src="current.img" id="img-song" class="">
          <h2 class="song-title">{{ current.title }} <br>
         <span>{{ current.artist }}</span></h2>
      <div>
        <div class="line-time"></div>
      </div>
        <div class="controls">
          <button class="prev" @click="prev"><i class="fas fa-step-backward"></i></button>
          <button class="play" v-if="!isPlaying" @click="play"><i class="fas fa-play-circle"></i></button>
          <button class="pause" v-else @click="pause"><i class="fas fa-pause-circle"></i></button>
          <button class="next" @click="next"><i class="fas fa-step-forward"></i></button>
        </div>
      </div>
      <div class="playlist">
        <div class="charts">
          <h3>Most Popular</h3>
        <button v-for="song in songs" :key="song.src"  @click="play(song)" :class="(song.src == current.src) ? 'song playing' : 'song'">
         <img :src="song.img">
         {{ song.title }} - {{ song.artist }}
        </button>
        </div>
      </div>   
       </main>
    </div>
  </div>
</template>
<script>
import Header from  './components/Header.vue'
import Singer from './components/Singer'
import Player from './components/Player.vue'
export default {
  name: 'app',
  components:{
    Header,
    Singer,
    Player

  },
 
  data () {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      showsingers:false,
      
      images:[
        {
          src:require('./assets/BrunoMars/Grenade1.png')
        },
        {
          src:require('./assets/allofme.jpg')
        },
        {
          src:require('./assets/allofme.jpg')
        },
        {
          src:require('./assets/allofme.jpg')
        }
      ],
      songs: [
        {
          title: 'Grenade',
          artist: 'Bruno Mars',
          src: require('./assets/BrunoMars/Bruno Mars - Grenade.mp3'),
          img:require('./assets/BrunoMars/Grenade1.png')
        },
        {
          title: 'What A Wonderful World',
          artist: 'Louis Armstrong',
          src: require('./assets/louis/Louis Armstrong - What A Wonderful World_128k.mp3'),
          img:require('./assets/louis/Louis-Armstrong.png')

        },
        {
          title: 'When I Fall In Love',
          artist: 'Nat King Cole',
          src: require('./assets/NatKingCole/Nat King Cole - When I Fall In Love_128k.mp3'),
          img:require('./assets/NatKingCole/Nat-King-Cole.png')

        },
        {
          title: 'All Of Me',
          artist: 'John Legend',
          src: require('./assets/allofme/John Legend - All of Me.mp3'),
                    img:require('./assets/allofme.jpg')

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

<style >
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html{
    overflow-x: hidden;

}
body {
  width: 100%;
	font-family: sans-serif;
background: aliceblue;
}
#app{
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
}
.left{
  position: relative;
  width: 15%;
  height: 100vh;
  background: rgb(255, 255, 255);
}
.logo{
  position: relative;
  width: 100%;
  display: flex;
  height:   140px;
  top: 0px;
  justify-content: center;
  text-align: center
}
.logo img{
  position: relative;
  width: 120px;
  height: 120px;
  display: block;
}
.menu, .song-list{
  position: relative;
  width: 70%;
  left: 25%;
  height: auto;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
}
.menu button, .song-list button{
  position: relative;
  color: rgb(87, 87, 87);
  margin-top: 10px;
  font-size: 14px;
  width: 100%;
  text-align: left;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 4px;
  padding-left: 6px;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.menu button:hover{
  transform: scale(1.1);
}
.menu button:focus{
  background: whitesmoke;
}
.song-list h3{
  font-size: 15px;
  font-weight: normal;
}
.right{
  position: relative;
  width: 85%;
/*background: #e7ebea;*/
background: #e4e4e4;
  height: 100vh;
}
header {
  position: relative;
  height: 40vh;
  padding-top: 2vh;
  justify-content: center;

}
 .control-prev-btn {
	 position: absolute;
	 top: 20px;
	 right: 40px;
   float: right;
	 text-align: center;
	 user-select: none;
	 color: #444;
   z-index: 2;
	 cursor: pointer;
}
 .control-next-btn {
	 position: absolute;
	 top: 20px;
	 right: 20px;
	 text-align: center;
   z-index: 2;
	 user-select: none;
	 color: #444;
	 cursor: pointer;
}
.header-top{
  position: relative;
  width: 100%;
  line-height: 9vh;
  top: 0px;
}
.header-top input{
  position: relative;
  width: 40%;
  line-height: 40px;
  border: 1px solid rgb(226, 226, 226);
  left: 30px;
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: black;
  font-size: 12px;
  padding-left: 10px;
}
.artists{
  position: relative;
  width: 100%;
    text-align: left;
  padding-top: 2vh;
  top: 0vh;
  height: 33vh;
  border-radius: 10px;
  margin-bottom: 2vh;
}
.artists h3 {
  position: relative;
  color: #1a1a1a;
  font-size:  17px;
  font-style: normal;
  text-align: left;
  left: 30px;
}
#albums{
  position: relative;
  display: flex;
overflow-x: auto;
  top: 0px;
  padding: 10px 0px;
  width: 100%;
  left: 0px;

  margin: 0px;
}
.album{
  position: relative;
  min-width:  200px;
  height: 180px;
    border-radius: 10px;
left: 10px;
justify-content: left;
align-items: left;
margin-left: 15px;
  	 transition: 1s linear ease-in-out;
	 scroll-behavior: smooth;

    box-shadow: 0px 5px 5px rgba(0,0,0,0.1);

}

.album img{
  position: relative;
  width: 100%;
  border-radius: 10px;
  height: 100%;
  pointer-events: all;
  cursor: pointer;
  	 transition: 1s linear ease-in-out;

}
.singers{
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  top: 0px;
  padding: 10px 0px;
  width: 100%;
  justify-content: center;
  left: 0px;
  padding: 20px;
  margin: 0px;
}
.singer{
  position: relative;
  min-width:  25%;
  height: 180px;
    border-radius: 10px;
left: 0px;
justify-content: left;
align-items: left;
margin-left: 20px;
margin-top: 40px;
  	 transition: 1s linear ease-in-out;
	 scroll-behavior: smooth;

    box-shadow: 0px 5px 5px rgba(0,0,0,0.1);

}
.singer img{
  position: relative;
  width: 100%;
  border-radius: 10px;
  height: 100%;
  pointer-events: all;
  cursor: pointer;
  	 transition: 1s linear ease-in-out;

}

.album img:hover, .singer img:hover{
  transform: scale(1.1);
}
.img-artist{
  position: absolute;
  height: 40vh;
  width: 40vh;
  float: right;
  right: 50px;
  top: 0px;
}
.img-artist img{
  position: relative;
  width: 100%;
  height: 300px;
    align-items: right;

}
::-webkit-scrollbar{
  display: none;
}
main {
  position: relative;
  width: 100%;
  /*background: rgb(82, 65, 180);*/
  margin: 0 auto;
  height: 55vh;
  top: 5vh;
  padding: 25px;
  display: flex;
  flex-direction: row-reverse;
}



.player{
  position: relative;
  width: 40%;
  background: rgb(255, 255, 255);
  height: 50vh;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
  box-shadow: 0px 5px 5px rgba(124, 124, 124, 0.1);
}
.player-profile{
  position: relative;
  width: auto;
  height: auto;
  justify-content: center;
  text-align: center;
  display: inline-flex;
  background: chocolate;}

.white-cercle{
  position: relative;
  width: 50px;
  height: 50px;
  display: block;
  text-align: center;
  background: salmon;
  border-radius: 50%;
}
.player img{
  position: relative;
  margin: auto;
  width: 100px;
  height: 100px;
 border-radius: 50%;
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
    color: rgb(87, 87, 87);
  font-size: 20px;
  top: 0vh;
  font-weight:normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
}
.song-title span {
  font-size: 16px;
}
.line-time{
  position: relative;
  width: 80%;
top: 3vh;
left: 10%;
  height: 1px;
    background: rgb(87, 87, 87);
  border-radius: 1px;
}
.controls {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 3vh;
  padding: 30px 15px;
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
    color: rgb(87, 87, 87);
}
.next, .prev {
  font-size: 16px;
  margin: 0px 15px;
    color: rgb(87, 87, 87);
}
.prev{
  position: relative;
  right: 50px;
}
.next{
  position: relative;
  left: 50px;
}
.charts {
  position: relative;
  width: 100%;
    text-align: left;
  padding-top: 2vh;
  height: 50vh;
  border-radius: 10px;
}
.playlist{
  position: relative;
  display: flex;
    margin-right: 30px;
width: 80%;
height: 47vh;
top: 3vh;
}

.playlist h3 {
  color: #131313;
  font-size:  17px;
  font-style: normal;
  text-align: left;
  margin-bottom: 30px;
}
.playlist .song {
  display: block;
  top: 30px;
  width: 100%;
  padding-left: 3%;
  box-shadow: 0px 5px 5px rgba(0,0,0,0.1);
  text-align: left;
  border-radius: 10px;
  line-height: 50px;
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
  transform: scale(1.1);
    color: rgb(87, 87, 87);
  background: rgb(255, 255, 255);
}
.playlist .song.playing {
  /*background-image: linear-gradient(to right, #CC2E5D, #FF5858);*/
    color: rgb(87, 87, 87);
  background: rgb(255, 255, 255);
}
</style>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
