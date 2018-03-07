function Scroll(){
  var top = document.getElementById("bg1");
  var ypos = window.pageYOffset;
  var top2 = document.getElementById("bg2");
    
if(ypos >5) {
    top.classList.add('scrolling');
  } else {
    top.classList.remove('scrolling');
  }

if(ypos >1375) {
    top2.classList.add('scrolling2');
  } else {
    top2.classList.remove('scrolling2');
  }
    
}

    




window.addEventListener('scroll', Scroll);