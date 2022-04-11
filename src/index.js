//-- Configurações Iniciais --//
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

app.engine(
  'handlebars',
  exphbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials',
  }),
);

app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));
app.set('view engine', 'handlebars');
app.use(cors());

dotenv.config();

//-- Rotas --//
const Routes = require('./routes/defaultRoutes');

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
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false,
      maxAge: 3600000,
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    },
  }),
);

//-- Conectar Mongoose --//
mongoose
  .connect(process.env.DB_CONFIG, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conectado com MongoDB Atlas!');
  })
  .catch((err) => {
    console.log(err.message);
  });

//-- Rotas --//
app.use('/', Routes);

//-- Entregar uma  Porta --//
app.listen(process.env.PORT || 5000, () => {
  console.log('Aplicação Iniciada!');
});
