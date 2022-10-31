
document.addEventListener("keyup", function(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;
    if(!key) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");


    // the first solution to remove class playing
    // setTimeout(() => {
    //     key.classList.remove("playing");
    // },70)
});


// the second solution to remove class playing
function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));