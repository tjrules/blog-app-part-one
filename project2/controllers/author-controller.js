const Author = require('../models/authors.js');
const authorController = {};

authorController.create = (req,res)=> {
  Author.create({
    name: res.locals.user,
  }).then((data) => {
    console.log('hitting author controller', data.data);
    res.locals.myAuthor = data.data;
    // res.redirect('/blog')
    // res.redirect('/blog')
  }).catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
}
module.exports = authorController;
