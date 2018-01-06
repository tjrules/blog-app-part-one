const express = require('express');
const blogRouter = express.Router();
const blogController = require('../controllers/blog-controller');

blogRouter.get('/', blogController.index);
blogRouter.get('/new', blogController.new);
blogRouter.get('/:id', blogController.show);
blogRouter.get('/:id/edit', blogController.edit);
blogRouter.put('/:id', blogController.update);
blogRouter.post('/', blogController.create);
blogRouter.delete('/:id', blogController.destroy);

module.exports = blogRouter;
