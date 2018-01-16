const express = require('express');
const apiRouter = express.Router();
const apiController = require('../controllers/api-controller');

apiRouter.get('/', apiController.index);
apiRouter.get('/search', apiController.search);

module.exports = apiRouter;
