const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');
const authorController = require('../controllers/author-controller');

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login');
});

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});

authRouter.post('/register', usersController.create );//authorController.create


authRouter.post('/login', passport.authenticate('local', {
  successRedirect: '/blog',
  failureRedirect: '/auth/login',
  failureFlash: true,
})
);

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;
