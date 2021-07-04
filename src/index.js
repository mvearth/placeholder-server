const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb'}));
app.use(routes);

app.listen(process.env.PORT || 8000);