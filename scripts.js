const projectBox = document.querySelectorAll(".project");
const closeBox = document.querySelectorAll(".close-btn")



projectBox.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.classList.add("wide")
    })
})


projectBox.forEach((item)=>{
    item.querySelector(".close-btn").addEventListener("click",(e)=>{
        e.stopPropagation()
        item.classList.remove("wide")
    })
})