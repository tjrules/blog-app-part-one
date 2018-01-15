const express = require('express');
const app = express();
const path = require('path');
const override = require('method-override');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const ejsLint = require('ejs-lint');

require('dotenv').config();

app.use(morgan('dev'))

app.use(cookieParser());
app.use(bodyParser());

app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

const authRouter = require('./routes/auth-routes');
app.use('/auth', authRouter);

const authHelpers = require('./services/auth/auth-helpers');
app.use(authHelpers.loginRequired)

app.use(morgan('dev'));
app.use(override('_method'));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
// app.set(ejsLint(text, options));
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
  res.send('Blah Blah Blah');
})

const blogRouter = require('./routes/blog-routes');
app.use('/blog', blogRouter);

const apiRouter = require('./routes/api-routes');
app.use('/api', apiRouter);

const authorRouter = require('./routes/author-routes');
app.use('/author', authorRouter);

app.get('*', (req,res)=>{
  res.status(404).send('Hahahahaha I brought you to a dead end!');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
