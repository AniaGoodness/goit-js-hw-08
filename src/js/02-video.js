import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe'); 

const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
});



const getCurrentTime = function (currentTime) {  
  const seconds = currentTime.seconds; 
  localStorage.setItem("videoplayerCurrentTime", JSON.stringify(seconds)); 
};


player.on('timeupdate', throttle(getCurrentTime, 1000));


player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayerCurrentTime")) || 0);

