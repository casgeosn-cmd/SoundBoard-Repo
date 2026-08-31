const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];


sounds.forEach((sound) => {
     // create the button 
    const btn = document.createElement('button');
     // add a class btn to the element
     btn.classList.add('btn');
     // button label text = string value in the sounds array
     btn.innerText = sound;
     
     // add button to the DOM
     document.getElementById('buttons').appendChild(btn);
});

 btn.addEventListener('click', () => {
    document.getElementById(sound).play();
});
function stopSounds() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;

    })
};