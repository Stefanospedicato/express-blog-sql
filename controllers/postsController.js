const connection = require('../data/db')

const index = (req,res) => {
  
  const sql = 'SELECT * FROM posts'

  connection.query(sql, (err,results) => {
    if(err) return res.status(500).json({ error: 'Connessione al database fallita' });
    res.json(results);
  })
}

const show = (req, res) => {
  
  const id = req.params.id

  const sqlPost = 'SELECT * FROM posts WHERE id=?'

}

const store = (req, res) => {
  res.send('Creazione post');
}

const update = (req, res) => {
  const id = req.params.id;
  res.send(`Modifica del post con ${id}`);
}
const modify = (req, res) => {
  const id = req.params.id;
  res.send(`Modifica del post con ${id}`);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify
}