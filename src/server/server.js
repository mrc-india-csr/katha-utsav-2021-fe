const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const publicPath = path.resolve(__dirname,'../../dist/');
const routes = require('./routes');
const port = process.env.PORT || 9002;

app.use(cors());

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static(publicPath));
routes(app);
app.get('/api/healthy', (req, res) => {
  res.status(200).json({ message: ' Web is healthy!'+ process.env.NODE_ENV});
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');




app.get('*', (req, res) => {
  res.render('index');
  });


const server = app.listen(port, () => {
  console.log(`running in port ${port}`);
});

module.exports = server;

