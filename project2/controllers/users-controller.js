const bcrypt = require('bcryptjs');
const User = require('../models/user.js');
const Author = require('./author-controller.js')
const usersController = {};

usersController.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
  }).then(user => {
    // res.redirect('/blog')
    console.log('we did it boiz')
    // console.log(user)
    // res.locals.user = user;
    // next();
  }).catch(err => {
    console.log('user create error', err)
    res.status(500).json({error: err});
})
}
module.exports = usersController;
