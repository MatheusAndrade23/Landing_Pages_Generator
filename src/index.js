//-- Configurações Iniciais --//

const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
// const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(cors());

app.use(express.static('public'));

dotenv.config();

//-- Express Config --//

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

//-- Conectar Mongoose --//

mongoose
  .connect(process.env.DB_CONFIG, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log('Conectado com MongoDB Atlas!');
  })
  .catch(function (err) {
    console.log(err.message);
  });

//-- Configurar Cloudinary --//

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
//   secure: true,
// });

//-- Entregar uma  Porta --//

app.get('/', (req, res) => {
  res.render('pages/Home');
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Aplicação Iniciada!');
});
