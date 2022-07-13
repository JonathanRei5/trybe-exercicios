require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {
  loginRouter,
  usersRouter,
  topSecretRouter,
  signupRouter
} = require('./routers');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/top-secret', topSecretRouter);
app.use('/signup', signupRouter);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
