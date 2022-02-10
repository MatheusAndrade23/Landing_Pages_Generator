//-- Configurações Iniciais --//

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const cors = require("cors");
app.use(cors());

var cloudinary = require('cloudinary').v2;

//-- Express para ler JSON --//

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json())

//-- Conectar Mongoose --//

mongoose.connect(process.env.DB_CONFIG, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {

    console.log('Conectado com MongoDB Atlas!');

}).catch(function (err) {

    console.log(err.message);
})

//-- Configurar Cloudnary --//

cloudinary.config({ 

    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure: true
});

//-- Entregar uma  Porta --// 

app.listen(process.env.PORT || 5000);