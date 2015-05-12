window.mobilecheck = function() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

var height = document.getElementById('bye').offsetHeight;

var isReady = function(){
  if(document.getElementById('bye').offsetHeight < height){
    skrollr.get().refresh();
  }
  else {
    setTimeout(function () {
      isReady()
    }, 500);
  }
}

if(!window.mobilecheck()) isReady();

$(document).ready(function() {  
  if(!window.mobilecheck()){
    skrollr.init({forceHeight: false});
  }
});

$(window).load(function(){
  if(!window.mobilecheck()){
    height = height + 10;
  }
})
