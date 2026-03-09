// popup project

function openPopup(img){
document.getElementById("popup").style.display="flex";
document.getElementById("popup-img").src=img;
}

function closePopup(){
document.getElementById("popup").style.display="none";
}


// dark mode

const toggle = document.getElementById("darkMode");

toggle.onclick = function(){

document.body.classList.toggle("dark");

}