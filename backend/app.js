const express = require('express');
const router = require('./routes/Router');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('../frontend/build'));
app.use(router);
app.listen(5000);
