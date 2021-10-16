const showo = document.getElementById('showo')
const opassword = document.getElementById('opassword')
const opassfig = document.getElementById('opassfig')


showo.addEventListener('click', ()=>{
    if(opassword.type === "password"){
        opassword.type = "text"
    }else{
        opassword.type = "password"
    }
})
