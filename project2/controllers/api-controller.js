const axios = require('axios');
const apiController = {};

apiController.index = (req,res) => {
  res.render('api/index');
}

apiController.search = (req,res) => {
  axios({
    method: 'get',
    url: `https://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=50c3df675f714994bb57b8ca53fc4a0b`
  })
  .then((data) => {
    console.log(data);

    res.render('./api/search', {
      status: 200,
      message: 'OK!',
      data: data.data.articles[0]

    })
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err)
  })
}

module.exports = apiController;
