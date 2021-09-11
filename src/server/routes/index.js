const contact = require('./contact');
const payment = require('./payment')

module.exports = (app) => {
    console.log('entered here');
    app.use('/api/contact',contact);
    app.use('/api',payment);
}