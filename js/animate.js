const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElements=document.querySelectorAll(".hidden")
hiddenElements.forEach((el)=>observer.observe(el))

const observerTwo=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show2")
        }
        else{
            entry.target.classList.remove("show2")
        }
    })
})

const hiddenElements2=document.querySelectorAll(".hidden2")
hiddenElements2.forEach((el)=>observerTwo.observe(el))