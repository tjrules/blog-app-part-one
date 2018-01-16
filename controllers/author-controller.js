const Author = require('../models/author.js');
const authorController = {};

authorController.index = (req, res) => {
  Author.findAll()
    .then(author => {
      res.render('author/index', {
        message: 'ok',
        author
      });
    });
};

authorController.show = (req,res) => {
  Author.findById(req.params.id)
    .then(author => {
      res.render('author/show', {
        author:author
      });
    }).catch(err => {
      res.status(400).json(err)
    });
};

authorController.edit = (req,res) => {
  Author.findById(req.params.id)
    .then(author => {
      res.render('author/edit', {author: author})
    }).catch(err => {
      res.status(400).json(err);
    })
}

authorController.update = (req,res) => {
  Author.update({
    name: req.body.name
  }, req.params.id)
  .then(() => {
    res.redirect(`/author/${req.params.id}`)
  }).catch(err => {
    res.status(400).json(err);
  });
};

authorController.new = (req,res) => {
  res.render('author/new');
};

authorController.create = (req,res)=> {
  Author.create({
    name: req.body.name
  })
    .then(author => {
  res.redirect(`/author/${author.id}`);
  }).catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
}

authorController.destroy = (req, res) => {
    Author.destroy(req.params.id)
      .then(() => {
        res.redirect('/author');
      }).catch(err => {
        res.status(400).json(err)
      });
};

module.exports = authorController;
