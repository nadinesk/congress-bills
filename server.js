app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://gentle-mountain-48679.herokuapp.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});