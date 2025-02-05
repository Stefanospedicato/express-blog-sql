const express = require('express');
const app = express();
const port = 3000;

const isValid = require('./middlewares/isValid')
const notFound = require('./middlewares/notFound')
const showError = require('./middlewares/showError')

const postsRouter = require()