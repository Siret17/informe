const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT || 3000;

let pintoresRouter = require('./routes/pintor');

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use('/', pintoresRouter);

//conexion con mongodb
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://informe:pintores@cluster0-tlrhr.mongodb.net/hbs?retryWrites=true&w=majority';
mongoose.connect(cadena, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Conexion establecida :)')
})
.catch(err=> console.log(err));

//arrancar el servidor web
app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...');
})
