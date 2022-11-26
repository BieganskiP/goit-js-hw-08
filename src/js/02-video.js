import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
let currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime == null) {
  currentTime = 0;
} else return;
player.setCurrentTime(currentTime);
