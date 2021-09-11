const contact = require('./contact');

module.exports = (app) => {
    app.use('/api/contact',contact);
}