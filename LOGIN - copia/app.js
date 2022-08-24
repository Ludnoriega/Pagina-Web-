//invocamos a express
const express = require('express'); 
const app = express();

//despues borrar esto
app.get('/', (req, res)=>{
    res.send("hola mundo");
})

//seteamos urlencoded para los datos del login
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//invocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//directorio de public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + 'public')); 

//establecemos el motor de pantillas ejs
app.set('view engine', 'ejs');

//invocamos a bcryptjs
const bcryptjs = require('bcryptjs');

//variables de sesion
const session = require('express-session'); 
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized:true
}));

app.listen(3307, (req, res)=>{
    console.log("Server funcionando en http://localhost:3307");
})
//console.log(__dirname);