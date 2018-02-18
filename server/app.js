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

// Static Files
app.get(/static\/?(bundles|images|media)\/.*/, restify.serveStatic({
  directory: __dirname + "/../public"
}));

module.exports= app;
