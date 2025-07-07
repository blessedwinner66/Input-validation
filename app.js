const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {check,validationResult} = require('express-validator');
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.render('index');
})

app.get('/register',(req,res)=>{
    res.render('register');
})

app.post('/register',[
    check('username').exists().withMessage('Username must be valid').isLength({min:3}).withMessage('username must contain more than 3 characters'),
    check('email').exists().withMessage('The input must be an email').isEmail().normalizeEmail()
],(req,res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    const alert = errors.array();
    res.status(422).render('register',{
         alert,
    })
  } else{
       const {username,email} = req.body;
    res.status(200).render('success',{
       username,email
    })
  }
 

})

app.listen(port,() => console.log(`Server running at port ${port}...`))