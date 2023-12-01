window.addEventListener( 'keydown',function(e){
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`);
  // console.log(audio);
  key.classList.add('playing');
  audio.currentTime=0;
  audio.play();
})

const keys = Array.from(document.querySelectorAll('.keys'));
keys.forEach(key => key.addEventListener('transitionend',function(e){
  // console.log(e);
  if( e.propertyName !== 'border-left-color') return;
  e.target.classList.remove('playing');
}));