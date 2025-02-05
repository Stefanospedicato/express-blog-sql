function isValid (req , res , next){
  const {title , content , tags} = req.body
  
  if(!title || !content || !tags){
    return res.send('Post inserito non valido!')
  }
  next();
}

module.exports = isValid