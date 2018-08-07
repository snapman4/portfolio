window.onscroll = function() {headTop()};

let header = document.getElementById("nameHead");
let sticky = header.offsetTop;

function headTop() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

}



TweenMax.to(".name", 2, {marginLeft: 5});
TweenMax.to(".position", 4, {marginLeft:5});


TweenMax.to("#python", 6, {opacity:1});
TweenMax.to("#js", 6, {opacity:1});
TweenMax.to("#cH", 6, {opacity:1});

