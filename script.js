
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);



function clck() {
  document.getElementById("btn1").style.padding = "1.7%";
  setTimeout(function (){
    document.getElementById("btn1").style.padding = "2%"
  }, 150);
}

function clck2() {
  document.getElementById("btn2").style.padding = "1.7%";
  setTimeout(function (){
    document.getElementById("btn2").style.padding = "2%"
  }, 150);
  setTimeout(function (){
    window.open('/rules.html', '_blank')  }, 150);

}