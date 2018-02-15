const app = require("./app");
const config = require('../config');
const mongoose = require('mongoose');

const port = process.env.PORT || config.server.port;

// Start Server.
const serverInstance = app.listen(port, () => {

  mongoose.Promise = global.Promise;
  mongoose.connect(config.server.db.uri, {});

  const db = mongoose.connection;

  db.on('error', (err) => {
    console.error(err);
    process.exit(1);
  });

  db.once('open', () => {
    require('./routes')(app);
    
    console.info('\x1b[33m%s\x1b[0m', ' Flite! Created by Ahmed Ahmed');
    console.info("\x1b[36m", 'We recommend that you use nodemon in development.');
    console.info("\x1b[34m", 'Server is running on -> http://' + config.server.host + ":" + port);
    console.info("\x1b[37m", "Press CTRL+C to quit");
  });
});