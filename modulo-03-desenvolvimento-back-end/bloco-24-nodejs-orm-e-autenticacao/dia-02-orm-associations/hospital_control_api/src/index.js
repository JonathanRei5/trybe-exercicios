const bodyParser = require('body-parser');
const patientsRouter = require('./routers/patientsRouter');
const surgeriesRouter = require('./routers/surgeriesRouter');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', patientsRouter);
app.use('/surgeries', surgeriesRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(`Port: ${PORT}`));
