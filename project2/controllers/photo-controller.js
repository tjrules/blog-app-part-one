const Photo = require('../models/photos.js');
const photoController = {};

photoController.index = (req, res) => {
  Photo.findAll()
    .then(photo => {
      res.render('photo/index', {
        message: 'ok',
        photo
      });
    });
};

photoController.show = (req,res) => {
  Photo.findById(req.params.id)
    .then(photo => {
      res.render('photo/show', {
        photo
      });
    }).catch(err => {
      res.status(400).json(err)
    });
};

photoController.edit = (req,res) => {
  Photo.findById(req.params.id)
    .then(photo => {
      res.render('/photo/edit', {
        photo
      });
    }).catch(err => {
      res.status(400).json(err);
    });
};

photoController.update = (req,res) => {
  Photo.update({
    name: req.body.name
  }, req.params.id)
  .then(() => {
    res.redirect(`/photo/${req.aprams.id}`);
  }).catch(err => {
    res.status(400).json(err);
  });
};

photoController.new = (req,res) => {
  res.render('/photo/new');
};

photoController.create = (req,res)=> {
  Photo.create({
    name: req.body.name
  })
    .then(photo => {
  res.redirect(`/photo/${photo.id}`);
  }).catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
}

photoController.destroy = (req,res) => {
    Photo.destroy(req.params.id)
      .then(() => {
        res.redirect('/photo');
      }).catch(err => {
        res.status(400).json(err)
      });
};

module.exports = photoController;
