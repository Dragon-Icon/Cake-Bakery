const express = require('express');
const router = express.Router();
let userisloggedin = {tf : false, fname : "", lname : "", email : ""}
let errorMsg = ''
const fs = require('fs');
const SibApiV3Sdk = require('sib-api-v3-sdk')
let goodtitle = ''
let badtitle = ''

require('dotenv').config();

router.post('/signup', async (req, res) => {
    const usersResult = fs.readFileSync('./users.json', 'utf-8');
    const users = JSON.parse(usersResult)
    const findUser = (users.find((u)=>u.username == req.body.username))
  
    if(findUser){
      res.redirect('/error')
      errorMsg = "User Already Exists"
    }
    else{
      users.push({
        id: Date.now().toString(),
        firstName : req.body.fname,
        lastName : req.body.lname,
        username: req.body.email,
        password: req.body.password
      })
      fs.writeFileSync('users.json',JSON.stringify(users, null, 2));
  
      res.redirect('/login')
    }
  })
  
  router.post('/login', async (req, res) => {
    const usersResult = fs.readFileSync('./users.json', 'utf-8');
    const users = JSON.parse(usersResult)
    const findUser = (users.find((u)=>u.username == req.body.email))
  
       if(findUser){
        if(findUser.password == req.body.password){
          res.render('successful', {name : `${findUser.firstName} ${findUser.lastName}`, LoginLogout : "Logout", signup : "Reset", link : "Reset"})
          userisloggedin.tf = true;
          userisloggedin.fname = findUser.firstName;
          userisloggedin.lname = findUser.lastName;
          userisloggedin.email = findUser.username;
        }else{
          res.redirect('/err')
          errorMsg = `Password is incorrect ${findUser.firstName}`
        }
       }else{
        res.redirect('/err')
        errorMsg = `User Not Found`
       }
  
  })
  router.post('/forgot', (req,res)=>{
    const usersResult = fs.readFileSync('./users.json', 'utf-8');
    const users = JSON.parse(usersResult)
    const findUser = (users.find((u)=>u.username == req.body.username))
  
      if(findUser.password === req.body.opassword){
        findUser.password = req.body.password
        fs.writeFile('./users.json', JSON.stringify(users, null, 2), ()=>{
            res.redirect('login')
            goodtitle = "Password Changed"
            badtitle = ''
            setTimeout(() => {
              goodtitle = "Change Password"
  
            }, 1000);
        })
      
      }
      else{
        res.redirect('Reset')
        badtitle = 'Old Password Is Not Correct'
        goodtitle = ''
      }
    })

    router.post('/send', (req,res)=>{
        const email = req.body.email
        let apikey = process.env.SIB_API_KEY
        let defaultclient = SibApiV3Sdk.ApiClient.instance;
        let apiKey = defaultclient.authentications['api-key'];
        apiKey.apiKey = apikey
      
        let apiInstance = new SibApiV3Sdk.ContactsApi();
        let createContact = new SibApiV3Sdk.CreateContact();
        createContact.email = email;
        createContact.listIds = [2]
      
        apiInstance.createContact(createContact).then((data) => {
          res.status = 200
          res.redirect('contact')
        }, (err) =>{
          res.status = 500
          res.redirect('index')
        });
      })

module.exports = router;