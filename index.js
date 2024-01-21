const button = document.querySelector("button").addEventListener("click", ()=>{
    document.querySelector("nav ul").classList.toggle("open");
    const body = document.body;
    body.style.position = "fixed";
});
// creating a text changer in the home setion 
var typed = new Typed("#textAnimation", {
    strings: ["UI/UX Developer","Frontend Developer", "Backend Developer"],
    typeSpeed: 150,
    smartBackspace: true,
    backSpeed: 25,

  });