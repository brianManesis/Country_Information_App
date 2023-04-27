const express = require('express');
const router = require('./routes/Router');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
/**
 * Start express app.
 * Use cors, router and,
 * static build of react app.
 */
app.use(cors());
app.use(express.static('../frontend/build'));
app.use(router);
app.listen(port);
