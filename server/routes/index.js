module.exports = function(server){
  //routes go here.
  // example.
  server.get("/api/accounts/users/:id", (req, res, next) => {
    
  });

  server.post("/api/accounts/create", (req, res, next) => {
    res.json({
      params: req.params 
    });
  });

}