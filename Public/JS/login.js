const email = document.getElementById('email')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')
const userfig = document.getElementById('userfig')
const passfig = document.getElementById('passfig')
const cpassfig = document.getElementById('cpassfig')
const form = document.querySelector('.signupContainer')
const suBTN = document.querySelector('.suBTN')
const oPassword = document.querySelector('.opassword')
const fname = document.getElementById('fname')
const fnamefig = document.getElementById('fnamefig')
const lname = document.getElementById('lname')
const lnamefig = document.getElementById('lnamefig')
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const fnameRegex = /^[a-zA-Z]*$/


suBTN.addEventListener('click', (event) => {
    event.preventDefault()

    if(fnameRegex.test(fname.value) && regex.test(fname.value) == false){
        fname.style = "border-bottom: 1px solid green; background: transparent;"
        fnamefig.innerHTML = '<figcaption style="margin: 0 0 -1.8rem 2px; font-size: 11px; text-align: start;" color: red;>Name is valid.</figcaption>'
        fnamefig.style = "color: green;"
    }else{
        fname.style = "border-bottom: 1px solid red; background: transparent;"
        fnamefig.innerHTML = '<figcaption style="margin: 0 0 -1.8rem 2px; font-size: 11px; text-align: start;" color: red;>Name is invalid.</figcaption>'
        fnamefig.style = "color: red;"
    }

    if(fnameRegex.test(lname.value) && regex.test(lname.value) == false){
        lname.style = "border-bottom: 1px solid green; background: transparent;"
        lnamefig.innerHTML = '<figcaption style="margin: 0 0 -1.8rem 2px; font-size: 11px; text-align: start;" color: red;>Name is valid.</figcaption>'
        lnamefig.style = "color: green;"
    }else{
        lname.style = "border-bottom: 1px solid red; background: transparent;"
        lnamefig.innerHTML = '<figcaption style="margin: 0 0 -1.8rem 2px; font-size: 11px; text-align: start;" color: red;>Name is invalid.</figcaption>'
        lnamefig.style = "color: red;"
    }

    if(email.value == '' || regex.test(email.value) == false){
        email.style = "border-bottom: 1px solid red; background: transparent;"
        userfig.innerHTML = '<figcaption style="margin: 0 0 -1.8rem 2px; font-size: 11px; text-align: start;" color: red;>Email is not valid. Email must contain @ and .com</figcaption>'
        userfig.style = "color: red;"
    }else{
        email.style = "border-bottom: 1px solid green; background: transparent;"
        userfig.innerHTML = '<figcaption style="margin: 0 0 -1.8rem 2px; font-size: 11px; text-align: start;" color: green;>Email is perfect.</figcaption>'
        userfig.style = "color: green;"
        
        if(password.value.length < 5){
            password.style = "border-bottom: 1px solid red; background: transparent;"
            passfig.innerHTML = '<figcaption style="margin: 0 0 -1.8rem 2px; font-size: 11px; text-align: start;" color: red;>Password needs to be 5 or more letters.</figcaption>'
            passfig.style = "color: red;"
        }
        else{
            password.style = "border-bottom: 1px solid green; background: transparent;"
            passfig.innerHTML = '<figcaption style="margin: 0 0 -1.8rem 2px; font-size: 11px; text-align: start;" color: green;>Password is perfect.</figcaption>'
            passfig.style = "color: green;"
            if(cpassword.value != password.value){
                cpassword.style = "border-bottom: 1px solid red; background: transparent;"
                cpassfig.innerHTML = '<figcaption style="margin: 0 0 -1.8rem 2px; font-size: 11px; text-align: start;" color: red;>Passwords do not match.</figcaption>'
                cpassfig.style = "color: red;"
            }
            else{
                cpassword.style = "border-bottom: 1px solid green; background: transparent;"
                cpassfig.innerHTML = '<figcaption style="margin: 0 0 -1.8rem 2px; font-size: 11px; text-align: start;" color: green;>Passwords are perfect.</figcaption>'
                cpassfig.style = "color: green;"
                form.submit()
            }
        }
    }
})