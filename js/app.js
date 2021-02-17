
//Moviment Animation to  happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const descricao = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving animation event 
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
 
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//Animate in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none"; 
    //Popout
    title.style.transform = "translateZ(110px)";
    sneaker.style.transform = "translateZ(165px) rotateZ(-30deg)";
    purchase.style.transform = "translateZ(75px)";
    descricao.style.transform = "translateZ(105px)";
    sizes.style.transform = "translateZ(84px)";
});

//Animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
    descricao.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
});

