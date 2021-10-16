const show = document.getElementById('show')



show.addEventListener('click', ()=>{
    if(password.type === "password"){
        password.type = "text"
    }else{
        password.type = "password"
    }
})
