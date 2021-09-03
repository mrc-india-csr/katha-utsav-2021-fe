const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const publicPath = path.resolve(__dirname,'../../dist/');

const port = process.env.PORT || 9002;
console.log('enters');
// console.log(process.env);
console.log(process.env.NODE_ENV);

app.use(cors());

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static(publicPath));

app.get('/api/healthy', (req, res) => {
  res.status(200).json({ message: ' Web is healthy!'+ process.env.NODE_ENV});
});

const indexFile = (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'ci') ? path.resolve(__dirname, 'index.html') : path.resolve(__dirname, 'index.html');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



// app.get('*',
//   async (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'index.html'));
//   });

app.get('*', (req, res) => {
  res.render('index');
  });


const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`running in port ${port}`);
});

module.exports = server;

