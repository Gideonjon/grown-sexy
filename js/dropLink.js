const openLink=document.querySelector(".drop-link")
const showLink=document.querySelector(".link-drop")

openLink.addEventListener("click",()=>{
    showLink.classList.toggle("active")
})