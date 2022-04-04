//-- Configurações Iniciais --//

const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const mongoose = require('mongoose');
// const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');
app.use(cors());

app.use(express.static('./src/public'));

dotenv.config();

//-- Rotas --//
const pagesRoutes = require('./src/routes/pages');

//-- Express Config --//

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

//-- Express-Session Config  --//

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: process.env.SESSION_SAVE_INITIALIZED,
    resave: process.env.SESSION_RESAVE,
    cookie: { maxAge: 600000 },
  }),
);

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

//-- Rotas --//

app.use('/', pagesRoutes);

//-- Entregar uma  Porta --//

app.listen(process.env.PORT || 5000, () => {
  console.log('Aplicação Iniciada!');
});
