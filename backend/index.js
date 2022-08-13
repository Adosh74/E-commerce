const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));

const router = require("./src/router/routes")

app.use(router)

app.listen(3000)