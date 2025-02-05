const express = require('express');
const app = express();
const port = 3000;


const notFound = require('./middlewares/notFound')
const showError = require('./middlewares/showError')

const postsRouter = require('./routes/posts')

app.use(express.json())

app.get('/', (req,res) => {
  res.send('Server POSTS')
})

app.use('./posts', postsRouter)

app.use(showError)

app.use(notFound)

app.listen(port, () => {
  console.log(`Sono in ascolto sulla porta ${port}`);
})