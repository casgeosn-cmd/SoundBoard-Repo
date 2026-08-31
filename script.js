const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];


sounds.forEach((sound) => {
     // create the button 
    const btn = document.createElement('button');
     // add a class btn to the element
     btn.classList.add('btn');
     // button label text = string value in the sounds array
     btn.innerText = sound;

     // add event listener to this button
     btn.addEventListener('click', () => {
     document.getElementById(sound).play();
     });
     // add button to the DOM
     document.getElementById('buttons').appendChild(btn);
});

// stop the sounds from overlapping
function stopSounds() {
    sounds.forEach((sound) => {
     const snd = document.getElementById(sound);
      snd.pause();
      snd.currentTime = 0;

    })
};