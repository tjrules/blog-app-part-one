const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

const usersController = {};

usersController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/blog');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

// const bcrypt = require('bcryptjs');
// const User = require('../models/user.js');
//
// const usersController = {};
//
// usersController.create = (req, res) => {
//   const salt = bcrypt.genSaltSync();
//   const hash = bcrypt.hashSync(req.body.password, salt);
//   User.create({
//     username: req.body.username,
//     email: req.body.email,
//     password_digest: hash,
//   }).then(user => {
//     console.log('this is user', user);
//     req.login(user, (err) => {
//       if (err) return next(err);
//       res.redirect('/blog');
//     });
//   }).catch(err => {
//     console.log('error on user', err);
//     res.status(500).json({error: err});
//   });
// }
//
// module.exports = usersController;
//
//
// // const bcrypt = require('bcryptjs');
// // const User = require('../models/user.js');
// // // const Author = require('./author-controller.js')
// // const usersController = {};
// //
// // usersController.create = (req, res) => {
// //   const salt = bcrypt.genSaltSync();
// //   const hash = bcrypt.hashSync(req.body.password, salt);
// //   User.create({
// //     username: req.body.username,
// //     email: req.body.email,
// //     password_digest: hash,
// //   }).then(user => {
// //
// //     req.login(user, (err) => {
// //
// //       if (err) return next(err);
// //       res.redirect('/blog');
// //     });
// //   }).catch(err => {
// //     console.log(err);
// //     res.status(500).json({error: err});
// //   });
// // }
// //
 module.exports = usersController;
