module.exports = {
  "server":{
    "name":"khalidmosque",
    "version":"1.0.0",
    host:"localhost",
    port: process.env.PORT || 3030,
    db: {
      uri: 'mongodb://127.0.0.1:27017/khalidmosque',
    },
    env: process.env.NODE_ENV || 'development'
  }
}