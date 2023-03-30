import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe'); 

const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});



const getCurrentTime = function (currentTime) {  
  const seconds = currentTime.seconds; // skąd funkcja wie, ze ma pobierać sekundy
  localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds)); // wysyłam do lacalStorage wartość
};


player.on('timeupdate', _.throttle("videoplayer-current-time", 1000));
// const currentTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0);

