document.getElementById("intro").style.display = "show"
document.getElementById("gallery").style.display = "none"
document.getElementById("spots").style.display = "none"
document.getElementById("enlaces").style.display = "none"

function scrolll(){
    var left = document.querySelector(".scroll-images")
    left.scrollBy(350, 0)
}
function scrollr(){
    var right = document.querySelector(".scroll-images")
    right.scrollBy(-350, 0)
}

function intro(){
    document.getElementById("gallery").style.display = "none"
    document.getElementById("spots").style.display = "none"
    document.getElementById("enlaces").style.display = "none"
    document.getElementById("intro").style.display = "block"
}
function gallery(){
 
    document.getElementById("intro").style.display = "none"
    document.getElementById("spots").style.display = "none"
    document.getElementById("enlaces").style.display = "none"
    document.getElementById("gallery").style.display = "block"
}
function spots(){
    document.getElementById("intro").style.display = "none"
    document.getElementById("gallery").style.display = "none"
    document.getElementById("enlaces").style.display = "none"
    document.getElementById("spots").style.display = "block"
}
function enlaces(){
    document.getElementById("intro").style.display = "none"
    document.getElementById("gallery").style.display = "none"
    document.getElementById("spots").style.display = "none"
    document.getElementById("enlaces").style.display = "block"
}