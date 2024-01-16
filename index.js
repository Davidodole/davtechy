const button = document.querySelector("button").addEventListener("click", ()=>{
    document.querySelector("nav ul").classList.toggle("open");
});
window.addEventListener("load",()=>{
    document.querySelector(".preload").style.display = "none";
});