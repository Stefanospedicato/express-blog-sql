const connection = require('../data/db')

const index = (req,res) => {
  
  const sql = 'SELECT * FROM posts'

  connection.query(sql, (err,results) => {
    if(err) return res.status(500).json({ error: 'Connessione al database fallita' });
    res.json(results);
  })
}

const show = (req, res) => {
  
  const id = req.params.id;

  const sqlPost = 'SELECT * FROM posts WHERE id=?';
  const sqlTags = 'SELECT T.* FROM tags T JOIN post_tag PT ON PT.tag_id = T.id WHERE PT.post_id=?';

  connection.query(sqlPost, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Connessione al database fallita' });
    if (results.length === 0) return res.status(404).json({ err: 'Post non trovato' });

    let post = results[0];

    connection.query(sqlTags, [id], (err, tagsResult) => {
      if (err) return res.status(500).json({ error: 'Connessione al database fallita' });
      
      post.tags = tagsResult;
      
      res.json(post);
    });
  });
};

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

const destroy = (req,res) => {
  const id = req.params.id

  const sql = 'DELETE FROM posts WHERE id=?'

  connection.query(sql, [id], (err) => {
    if(err) return res.status(500).json({ error: 'Connessione al database fallita' });
    res.sendStatus(204)
  })
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}