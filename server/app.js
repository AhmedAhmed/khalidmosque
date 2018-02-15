const restify = require('restify');
const restifyPlugins = require('restify-plugins');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('restify-jwt');
const config = require('../config');

// Initialize Restify Server.
const app = restify.createServer({
  name: "KBW Admin Panel"
});

// Server Log. Viewable in terminal.
app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  return next();
});

// Restify Set-Up.
app.use(restify.bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(restifyPlugins.fullResponse());

// Static Files
app.get(/static\/?(bundles|images|media)\/.*/, restify.serveStatic({
  directory: __dirname + "/../public"
}));

// Render Index.html file.
app.get(/.*/, function (req, res, next) {
  fs.readFile(__dirname + '/../public/index.html', function (err, data) {
    if (err) {
      next(err);
      return;
    }

    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(data);
    next();
  });
});

module.exports= app;