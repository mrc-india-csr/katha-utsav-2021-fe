const contact = require('./contact');
const payment = require('./payment')

module.exports = (app) => {
    app.use('/api/contact',contact);
    app.use('/api',payment);
}