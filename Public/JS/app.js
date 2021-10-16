const moreBTN = document.getElementById('more');
const cheesecakeImg = document.querySelector('.cheescake')
const blackforestImg = document.querySelector('.blackforest')
const recipeBTN= document.querySelector('.recipe')
const bananacakeIMG = document.querySelector('.bananacake')
const banrecipe = document.querySelector('.banrecipe')
const blforest = document.querySelector('.blforestrecipe')
const carrotcakeIMG = document.querySelector('.carrotcake')
const carRecipe = document.querySelector('.carRecipe')
const closeBTN = document.getElementById('closeBTN')
const mainside = document.querySelector('.mainside')
const button = document.querySelector('button')
const cheescakeRecipe = document.querySelector('.cheesecakeRecipe')


function slide(){
    mainside.style.left = "75%"
}

closeBTN.addEventListener('click',() =>{
    mainside.style.left = "100%"
});

function mouseEnter(){
    recipeBTN.style.display = "block"
    recipeBTN.style.left = '230px'
    cheesecakeImg.style.opacity = '0.5'
}

function mouseLeave() {a
    recipeBTN.style.display = "none"
    cheesecakeImg.style.opacity = "1"
}

function block() {
    document.querySelector('.innerRecipe').style = 'display: block;'
}

function none() {
    document.querySelector('.innerRecipe').style = 'display: none;'
}

function facebook() {
    window.open('https://www.facebook.com/adityaa.mulmi', "_blank")
}

function instagram(){
    window.open("https://www.instagram.com/_dragon_icon_/", "_blank")
}

function blenter(){
    blforest.style.display = "block"
    blforest.style.left = '230px'
    blackforestImg.style.opacity = '0.5'
}

function blleave(){
    blforest.style.display = "none"
    blackforestImg.style.opacity = "1"
}

function baenter(){
    banrecipe.style.display = "block"
    banrecipe.style.left = '230px'
    bananacakeIMG.style.opacity = '0.5'
}

function baleave(){
    banrecipe.style.display = "none"
    bananacakeIMG.style.opacity = "1"
}

function caenter(){
    carRecipe.style.display = "block"
    carRecipe.style.left = '230px'
    carrotcakeIMG.style.opacity = '0.5'
}

function caleave(){
    carRecipe.style.display = "none"
    carrotcakeIMG.style.opacity = "1"
}

moreBTN.addEventListener('click',()=>{
    document.getElementById('main').scrollIntoView();
})

function show(){
    const password = document.querySelector('#password');
    if (password.type === "password") {
      password.type = "text";
     password.innerHTML = '<i class="far fa-eye-slash" id="show" onclick="show()" id="togglePassword"></i>'
    } else {
      password.type = "password";
    }
}

