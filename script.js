const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", function(){
    container.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
});


// setInterval(()=>{
//     container.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
// },1000);
