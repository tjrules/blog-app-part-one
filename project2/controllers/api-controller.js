const axios = require('axios');
const apiController = {};


apiController.index = (req,res) => {
  res.render('api/index');
}

apiController.search = (req,res, next) => {
  // console.log('hello from the search method')
  axios({
    method: 'get',
    url: `https://newsapi.org/v2/everything?q=bacon&sortBy=popularity&apiKey=${process.env.API}`
  })
  .then((data) => {
    console.log('api call successful', data.data)
    res.locals.newsArticles = data.data;
    next();
    // console.log(process.env.API);
    //
    // res.render('./api/search', {
    //   status: 200,
    //   message: 'OK!',
    //   data: data.data.articles[0]
    //
    // })
  }).catch((err) => {
    console.log(err);
    res.status(500).send('error')
  })
}

module.exports = apiController;
