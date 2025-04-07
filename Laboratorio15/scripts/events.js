document.getElementById("nav-tog").addEventListener("click", function (event){
    event.preventDefault();
    document.querySelector("nav ul").classList.toggle("toggle-open");
}) 