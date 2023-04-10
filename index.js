
//Importe los módulos
const express = require("express");
const app = express();
const puerto = 5000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.set('views',__dirname+'/views');


const path = require('path'); 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res)=>{
    res.render('Principal')
});

app.get('/Desiertos', (req,res)=>{
    res.render('Desiertos')
});

app.get('/Playas', (req,res)=>{
    res.render('Playas')
});

app.get('/Bosques', (req,res)=>{
    res.render('Bosques')
});

app.post('/', (req,res)=>{

    });


//Oyente
app.listen(puerto, () => {
    console.log("Ejecutando express");
});

