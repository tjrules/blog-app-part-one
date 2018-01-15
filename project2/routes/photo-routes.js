const express = require('express');
const photoRouter = express.Router();
const photoController = require('../controllers/photo-controller');

photoRouter.get('/', photoController.index);
photoRouter.get('/new', photoController.new)
photoRouter.get('/:id', photoController.show);
photoRouter.get('/:id/edit', photoController.edit);
photoRouter.put('/:id', photoController.update);
photoRouter.post('/', photoController.create);
photoRouter.delete('/:id', photoController.destroy);
module.exports = photoRouter;
