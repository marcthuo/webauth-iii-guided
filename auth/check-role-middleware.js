module.exports = role => {
  // return middleware
  return function(req, res, next) {
      if(req.decodedJwt.roles && req.decodedJwt.roles.includes(role)) {
          next();
      } else {
          res.status(403).json({ you: 'have no power here!' })
      }
  }
}