const express = require('express');
const router = express.Router();
let userisloggedin = {tf : false, fname : "", lname : "", email : ""}
let errorMsg = ''
let goodtitle = 'Change Password'
let badtitle = ''

router.get('/',(req,res) => {
    if(userisloggedin.tf){
      res.render('index', {LoginLogout : "Logout", signup : "Reset", link : "Reset"}) 
    }else{res.render('index', {LoginLogout : "Login", signup : "Sign Up", link : "signup"})} 
})

router.get('/cake', (req,res) => {
  if(userisloggedin.tf){
    res.render('cake', {LoginLogout : "Logout", signup : "Reset", link : "Reset"}) 
  }else{res.render('cake', {LoginLogout : "Login", signup : "Sign Up", link : "signup"})} 
})

router.get('/about',(req,res) => {
  if(userisloggedin.tf){
    res.render('about', {LoginLogout : "Logout", signup : "Reset", link : "Reset"}) 
  }else{res.render('about', {LoginLogout : "Login", signup : "Sign Up", link : "signup"})} 
})

router.get('/quiz', (req,res)=>{
  if(userisloggedin.tf){
    res.render('quiz', {LoginLogout : "Logout", signup : "Reset", link : "Reset"}) 
  }else{res.render('quiz', {LoginLogout : "Login", signup : "Sign Up", link : "signup"})}
})

router.get('/index',(req,res) => {
  if(userisloggedin.tf){
    res.render('index', {LoginLogout : "Logout", signup : "Reset", link : "Reset"}) 
  }else{res.render('index', {LoginLogout : "Login", signup : "Sign Up", link : "signup"})}
  
})

router.get('/Logout', (req,res)=>{
  userisloggedin.tf = false
  res.redirect('index')
})

router.get('/recipe',(req,res) => {
 if(userisloggedin.tf){
    res.render('recipe', {LoginLogout : "Logout", signup : "Reset", link : "Reset"}) 
  }else{res.render('recipe', {LoginLogout : "Login", signup : "Sign Up", link : "signup"})} 
})

router.get('/signup', (req,res) => {
    res.render('signup')
})
router.get('/Login', (req,res)=>{
    res.render('login')
})
router.get('/error', (req, res)=>{
  res.render('alreadyExists', {errMsg : errorMsg})
})

router.get('/err', (req,res) => {
  res.render('loginError', {errMsg : errorMsg})
})
router.get('/Reset',(req,res)=>{
  res.render('forgot', {badtitle : badtitle, goodtitle : goodtitle})
})
router.get('/contact',(req,res) => {
  if(userisloggedin.tf){
    res.render('contact', {LoginLogout : "Logout", signup : "Reset", fname : userisloggedin.fname, lname : userisloggedin.lname, email : userisloggedin.email}) 
  }else{res.render('contactNLogin', {LoginLogout : "Login", signup : "Sign Up"})} 
})

module.exports = router;