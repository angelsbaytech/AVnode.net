const i18n = require('../plugins/i18n');
const logger = require('../utilities/logger');

module.exports = (req, res) => {
  console.log('404');
  logger.debug(`404: ${JSON.stringify(req)}`);  

  res.status(404).render('404', {
    title: i18n.__('Hmm…'),
    nav: [],
    path: req.originalUrl
  });
};
