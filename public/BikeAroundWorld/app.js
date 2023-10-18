console.log("connected");

let button;
button = document.getElementById("bikebutton");
console.log(button);

let bikerImage;
bikerImage = document.getElementById("biker");

let bikerContainer = document.querySelector("bikeContainer");


let globeImages = document.getElementsByClassName("globeImages");


button.addEventListener("click", function(){
    //console.log("buttonclicked")
    if (bikerImage.style.display === "none"){
        bikerImage.style.display = "block";}
        else{
            bikerImage.style.display = "none";
        }
    }
)

window.addEventListener('scroll',() => {
   const refHeight = window.innerHeight / 3;
    
   const degValue = window.scrollY / refHeight * -180;

    bikerContainer.style.transform = 'rotate(${degValue}deg)';
})
// window.addEventListener("scroll",fucntion(){
//      for(i=0; i < globeImages.length; i= i++){
//     gallery.appendChild(globeImages[i])
// }}
// )

// window.addEventListener('scroll', ()=> {
//     console.log(window.scrollY, document.body.scrollHeight, window.innerWidth, window.innerHeight, window.scrollY *(window.innerWidth/window.innerHeight));
//     // let boxElt = document.getElementById("biker");
//     biker.style.left =window.scrollY*(window.innerWidth/(document.body.clientHeight-window.innerHeight)) +'px';
//   })
//   window.addEventListener('load', () => {
//     console.log("page load");
//     let biker = document.getElementById('box');
//     biker.addEventListener('mouseenter', ()=> {
//       biker.style.bottom = "30px";
//     })
//     biker.addEventListener('mouseleave', ()=> {
//       biker.style.bottom = "0px";
//     })
//   })
  