const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    DocumentFragment.getElementaryById('buttons').appendChild(btn);
});

btn.addEventListener('click', () => {
    document.getElementById(sound).onplay();
});
function stopSounds() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime=0;

    })
};