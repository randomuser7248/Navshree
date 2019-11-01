var figure = $(".video").hover( hoverVideo, hideVideo );
// var figure = $(".video1").hover( hoverVideo, hideVideo );


function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}
// function hoverVideo1(e) {  
//   $('video', this).get(0).play(); 
// }
function hideVideo(e) {
    $('video', this).get(0).pause(); 
}

var preloader = document.getElementById('loading');
function myFunction(){
    preloader.style.display = 'none';
}

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});
let sliderImages1 = document.querySelectorAll(".slide11"),
    arrowLeft1 = document.querySelector("#arrow-left1"),
    arrowRight1 = document.querySelector("#arrow-right1"),
    currentStatus=0;

    //clear all image
function reset1() {
    for(let i = 0;i < sliderImages1.length; i++){
        sliderImages1[i].style.display = "none";
    }
}

function startSlide1(){
    reset1();
    sliderImages1[0].style.display = "block";
}
function slideRight1(){
    reset1();
    sliderImages1[currentStatus + 1].style.display = "block";
    currentStatus++;
}
function slideLeft1(){
    reset1();
    sliderImages1[currentStatus - 1].style.display = "block";
    currentStatus--;
}

arrowLeft1.addEventListener("click", function(){
    if(currentStatus === 0){
        currentStatus = sliderImages1.length;
    }
    slideLeft1();
});

arrowRight1.addEventListener("click", function(){ 
    if(currentStatus === sliderImages1.length-1){
        currentStatus = -1;
    }
    slideRight1();
});


// let playbutton=document.querySelector('.video1');

// playbutton.addEventListener("click", function(){
//   $(playbutton, this).get(0).play(); 
// });
// startSlide1();
// startSlide();


// let sliderImages1 = document.querySelectorAll(".slide1"),
//   arrowLeft1 = document.querySelector("#arrow-left1"),
//   arrowRight1 = document.querySelector("#arrow-right1"),
//   current1 = 0;

// // Clear all images
// function reset1() {
//   for (let i = 0; i < sliderImages1.length; i++) {
//     sliderImages1[i].style.display = "none";
//   }
// }

// // Init slider
// function startSlide1() {
//   reset1();
//   sliderImages1[0].style.display = "block";
// }

// // Show prev
// function slideLeft1() {
//   reset1();
//   sliderImages1[current1 - 1].style.display = "block";
//   current1--;
// }

// // Show next
// function slideRight1() {
//   reset1();
//   sliderImages1[current1 + 1].style.display = "block";
//   current1++;
// }

// // Left arrow click
// arrowLeft1.addEventListener("click", function() {
//   if (current1 === 0) {
//     current1 = sliderImages1.length;
//   }
//   slideLeft1();
// });

// // Right arrow click
// arrowRight1.addEventListener("click", function() {
//   if (current1 === sliderImages1.length - 1) {
//     current1 = -1;
//   }
//   slideRight1();
// });

// startSlide1();