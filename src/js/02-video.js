import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

 const iframe = document.querySelector('iframe');
        const player = new Player(iframe);


player.on('timeupdate', throttle(function (evt) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(evt))
   
}, 1000))


const savingTime = JSON.parse(localStorage.getItem("videoplayer-current-time")) 
if (savingTime) {
    const currentSeconds = savingTime.seconds

    player.setCurrentTime(currentSeconds).then(function (currentSeconds) {
    
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':

                break;

            default:
            
                break;
        }
    });
}