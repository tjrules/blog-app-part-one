const express = require('express');
const authorRouter = express.Router();
const authorController = require('../controllers/author-controller');

authorRouter.get('/', authorController.index);
authorRouter.get('/new', authorController.new)
authorRouter.get('/:id', authorController.show);
authorRouter.get('/:id/edit', authorController.edit);
authorRouter.put('/:id', authorController.update);
authorRouter.post('/', authorController.create);
authorRouter.delete('/:id', authorController.destroy);
module.exports = authorRouter;
