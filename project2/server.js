const express = require('express');
const app = express();
const morgan = require('morgan');
const override = require('method-override');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;


app.use(morgan('dev'));
app.use(override('_method'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));


app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
  res.send('Blah Blah Blah');
})

app.get('*', (req,res)=>{
  res.status(404).send('Hahahahaha I brought you to a dead end!');
});

app.listen(PORT, () => {
  console.log(`listenting on port ${PORT}`);
});
