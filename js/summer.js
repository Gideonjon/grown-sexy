const map=document.querySelector(".map");
let switchText=document.querySelector(".switch-text")
const checkBox=document.getElementById("checkbox")
checkBox.addEventListener("change",()=>{

    map.classList.toggle("active") ? switchText.textContent="map" : switchText.textContent="show map" 
})