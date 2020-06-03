const express = require('express');
const hbs = require('hbs');
const app = express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
//configurar mis rutas
app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/calsado.hbs', (req,res)=>{
    res.render('calsado');
});

app.get('/flaxi.hbs', (req,res)=>{
    res.render('flaxi');
});

app.get('/polo.hbs', (req,res)=>{
    res.render('polo');
});
    
    app.get('/chat.hbs', (req,res)=>{
        res.render('chat');
});

app.get('/servicios.hbs', (req,res)=>{
    res.render('servicios');
});
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});