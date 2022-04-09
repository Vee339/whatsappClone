var contact = document.querySelectorAll(".contacts .contact")
var intro = document.querySelector(".content .intro");

function myfunction(item){
    item.addEventListener("click",function(){
        intro.style.display = "none"
        document.querySelector(".contact.active").classList.remove("active")
        item.classList.add("active")
    })
}

contact.forEach(myfunction)