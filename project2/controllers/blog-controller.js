const Blog = require('../models/blog');
const Authors = require('../models/authors');
const blogController = {};

blogController.index = (req, res) => {
  Blog.findAll()
    .then(blog => {
      res.render('blog/index', {
        message: 'ok',
        blog: blog
      })
    })
}

blogController.show = (req, res) => {
  Blog.findById(req.params.id)
    .then(blog => {
      if (blog.author_id) {
        console.log('found an author!')
        Authors.findById(blog.author_id)
          .then(author => {
            console.log('your author is...', author)
            res.render('blog/show', {
              blog: blog,
              author: author
            })
          }).catch(err => {
            res.status(400).json(err)
          })
      } else {
        console.log('no author here')
        res.render('blog/show', {
          blog: blog
        })
      }
    }).catch(err => {
      res.status(400).json(err)
    })
}

blogController.edit = (req, res) => {
  Blog.findById(req.params.id)
    .then(blog => {
      Authors.findAll()
        .then(authors => {
          res.render('blog/edit', {
            blog: blog,
            authors
          });
        })
        .catch(err => {
          res.status(400).json(err);
        });
    })
    .catch(err => {
      res.status(400).json(err)
    });
};

blogController.update = (req, res) => {
  console.log(req.body)
  Blog.update({
      title: req.body.title,
      content: req.body.content,
      author_id: parseInt(req.body.author_id)
    }, req.params.id)
    .then(() => {
      res.redirect(`/blog/${req.params.id}`)
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err)
    });
}

blogController.new = (req, res) => {
  Authors.findAll()
    .then(authors => {
      res.render('blog/new', {
        authors
      })
    }).catch(err => {
      res.status(400).json(err)
    })
};

blogController.create = (req, res) => {
  Blog.create({
      title: req.body.title,
      content: req.body.content,
      author_id: req.body.author_id
    })
    .then(blog => {
      res.redirect(`/blog/${blog.id}`)
    }).catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
};

blogController.destroy = (req, res) => {
  Blog.destroy(req.params.id)
    .then(() => {
      res.redirect('/blog');
    }).catch(err => {
      res.status(400).json(err)
    });
};

module.exports = blogController;
