const Blog = require('../models/blog');
const Author = require('../models/author');
const News = require('./api-controller');
const Photo = require('../models/photo');
const blogController = {};

// console.log(News);

blogController.index = (req, res) => {
  Blog.findAll()
    .then(blog => {
      Author.findAll()
        .then(author => {
          Photo.findAll()
            .then(photo => {
              console.log('this is blog', blog);
              console.log('this is author', author);
              console.log('this is photo', photo);
              res.render('blog/index', {
                blog: blog,
                author: author.name,
                photo: photo.link
              })
              console.log('this is blog', blog);
              console.log('this is author', author);
              console.log('this is photo', photo);
            }).catch(err => {
              console.log('error at photo index', err);
              res.status(400).json(err)
            })
        }) .catch(err => {
          console.log('error at author index', err);
          res.status(400).json(err)
        })
    }).catch(err => {
      console.log('error at blog index', err);
      res.status(400).json(err)
    })
};

// blogController.index = (req, res) => {
//   Blog.findAll()
//     .then(blog => {
//       // console.log('hello from the blog controller side', blog)
//       // News.search();
//        // .then(news => {
//          // console.log('hello from the api controller side', news)
//          console.log(res.locals.newsArticles.articles)
//          // res.send('bitches')
//          res.render('blog/index', {
//            news: res.locals.newsArticles.articles,
//            blog: blog
//          })
//        }).catch(err => {
//       res.status(400).json(err)
//     })
// };

// blogController.index = (req, res) => {
//   Blog.findAll()
//     .then(blog => {
//
//
//       News.search()
//         .then(news => {
//   console.log('this is res', res);
//           res.render('blog/index', {
//
//             blog: blog,
//             news: news
//           })
//         }).catch(err => {
//           res.status(400).send('erroring out ')
//         })
//
//     }).catch(err => {
//       res.status(400).json(err)
//     })
// };

blogController.show = (req, res) => {
  Blog.findById (req.params.id)
    .then(blog => {
      Author.findById(blog.author_id)
      .then(author => {
        Photo.findById(blog.photo_id)
          .then(photo => {
            res.render('blog/show', {
              blog:blog,
              author:author,
              photo:photo
            })
          }).catch(err => {
            console.log('error at show photo then', err)
            res.status(400).json(err);
          });
      }).catch(err => {
        console.log('error at show author then',err)
        res.status(400).json(err);
      })
    }) .catch(err => {
      console.log('error at show blog then ', err)
      res.status(400).json(err);
    })
}

// blogController.show = (req, res) => {
//   Blog.findById(req.params.id)
//     .then(blog => {
//       if (blog.author_id || blog.photo_id) {
//         Author.findById(blog.author_id)
//           .then(author => {
//             Photo.findById(blog.photo_id)
//               .then(photo => {
//             res.render('blog/show', {
//               blog: blog,
//               author: author,
//               photo: photo
//               })
//             });
//           }).catch(err => {
//             res.status(400).json(err)
//           });
//       } else {
//         res.render('blog/show', {
//           blog: blog,
//           photo: undefined,
//           author: undefined
//         });
//       };
//       // if (blog.photo_id) {
//       //   Photo.findById(blog.photo_id)
//       //     .then(photo => {
//       //       res.render('blog/show', {
//       //         blog: blog,
//       //         author: author,
//       //         photo: photo
//       //       });
//       //     }).catch(err => {
//       //       res.status(400).json(err)
//       //     });
//       // } else {
//       //   res.render('blog/show', {
//       //     blog: blog,
//       //     author: author,
//       //     photo: undefined
//       //   });
//       // };
//     })
//     // .catch(err => {
//     //   res.status(400).json(err);
//     // });
// };

blogController.edit = (req, res) => {
  Blog.findById(req.params.id)
    .then(blog => {
      console.log('this is blog', blog);
      Author.findAll()
        .then(author => {
          console.log('this is author', author);
          Photo.findAll()
            .then(photo => {
              console.log('this is photo', photo);
          res.render('blog/edit', {
            blog: blog,
            author: author,
            photo: photo
            })
          })  .catch(err => {
              console.log('error at photo edit', err);
              res.status(400).json(err);
            });
        })
        .catch(err => {
          console.log('error at author edit', err);
          res.status(400).json(err);
        });
    })
      .catch(err => {
        console.log('error at blog edit', err);
        res.status(400).json(err);
      });
};

blogController.update = (req, res) => {
  console.log(req.body)
  Blog.update({
      title: req.body.title,
      content: req.body.content,
      author_id: parseInt(req.body.author_id),
      photo_id: parseInt(req.body.photo_id)
    }, req.params.id)
    .then(() => {
      res.redirect(`/blog/${req.params.id}`)
    })
    .catch(err => {
      console.log('error at blog update',err)
      res.status(400).json(err)
    });
}

blogController.new = (req, res) => {
  Author.findAll()
    .then(author => {
      Photo.findAll()
      .then(photo => {
      res.render('blog/new', {
        author: author,
        photo: photo
        })
      }).catch(err => {
        console.log('error at new photo ',err)
        res.status(400).json(err);
      });
    }).catch(err => {
      console.log('error at new author',err)
      res.status(400).json(err);
    });
};

blogController.create = (req, res) => {
  Blog.create({
      title: req.body.title,
      content: req.body.content,
      author_id: req.body.author_id,
      photo_id: req.body.photo_id
      // user_id: req.body.user.id //added user_id object
    })
    .then(blog => {
      res.redirect(`/blog/${blog.id}`)
    }).catch(err => {
      console.log('error at create blog', err)
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
// const Blog = require('../models/blog');
// const Author = require('../models/author');
// const News = require('./api-controller');
// const blogController = {};
//
//

//
// // blogController.index = (req, res) => {
// //   Blog.findAll()
// //     .then(blog => {
// //
// //
// //       News.search()
// //         .then(news => {
// //   console.log('this is res', res);
// //           res.render('blog/index', {
// //
// //             blog: blog,
// //             news: news
// //           })
// //         }).catch(err => {
// //           res.status(400).send('erroring out ')
// //         })
// //
// //     }).catch(err => {
// //       res.status(400).json(err)
// //     })
// // };
//
// // blogController.show = (req, res) => {
// //   Blog.findById(req.params.id)
// //     .then(hi => {
// //             console.log('your author is...', hi)
// //             res.render('blog/show', {
// //               blog: blog,
// //     }).catch(err => {
// //       res.status(400).json(err)
// //     })
// // })
// // }
//
// blogController.show = (req, res) => {
//   Blog.findById(req.params.id)
//     .then(blog => {
//       console.log('this is blog', blog);
//       res.render('blog/show', {
//         blog:blog,
//         // author:author
//       })
//     }).catch(err => {
//       res.status(400).json(err)
//     })
// }
//
//
// blogController.edit = (req, res) => {
//   Blog.findById(req.params.id)
//     .then(blog => {
//           res.render('blog/edit', {
//             blog: blog,
//             author
//           });
//         })
//         .catch(err => {
//           res.status(400).json(err);
//         });
//
// };
//
// blogController.update = (req, res) => {
//   console.log(req.body)
//   Blog.update({
//       title: req.body.title,
//       content: req.body.content,
//       // author_id: parseInt(req.body.author_id)
//     }, req.params.id)
//     .then(() => {
//       res.redirect(`/blog/${req.params.id}`)
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(400).json(err)
//     });
// }
//
// blogController.new = (req, res) => {
//   // Author.findAll()
//     // .then(blog => {
//       res.render('blog/new')
//
// };
//
// blogController.create = (req, res) => {
//   Blog.create({
//       title: req.body.title,
//       content: req.body.content,
//       // author_id: req.body.author_id,
//       // user_id: req.body.user.id //added user_id object
//     })
//     .then(blog => {
//       res.redirect(`/blog/${blog.id}`)
//     }).catch(err => {
//       console.log(err)
//       res.status(400).json(err);
//     });
// };
//
// blogController.destroy = (req, res) => {
//   Blog.destroy(req.params.id)
//     .then(() => {
//       res.redirect('/blog');
//     }).catch(err => {
//       res.status(400).json(err)
//     });
// };
//
// module.exports = blogController;
