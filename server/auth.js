const jwt = require('jsonwebtoken');

function authPro(req, res, next) {
    var bearerHeader = req.headers["auth-token"];
    try{
    let decode = jwt.verify(bearerHeader.split(' ')[1],'superSecrete');
  if(!decode){
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }    
}catch(e){
    
    return res.status(500).send({
        message:'invalid token.!'
    });
}
    next();
  }


  module.exports=authPro;