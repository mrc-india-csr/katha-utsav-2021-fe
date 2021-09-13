const contact = require('./contact');
const payment = require('./payment')
const upload = require('./upload');

module.exports = (app) => {
    app.use('/api/contact',contact);
    app.use('/api',payment);
    app.use('/api/story', upload);
}