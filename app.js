const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
let newTodos = [];
app.get('/',(req,res)=>{
    let options = {weekday:"long",year:"numeric",month:"long",day:"numeric"};
    let today = new Date();
    let day = today.toLocaleDateString("en-US",options);
    res.render("list",{today:day,newListItems:newTodos});
})

app.post('/',(req,res)=>{
    let newTodo = req.body.newItem;
    newTodos.push(newTodo)
    res.redirect('/');
})

app.listen(3000,()=>{
    console.log("port is running at 3000");
})