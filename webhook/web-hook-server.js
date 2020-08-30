const express = require('express')
const app = express()
const port = 9111

function error(status, msg) {
  var err = new Error(msg);
  err.status = status;
  return err;
}

app.use('/webhook', function(req, res, next){
  var key = req.query['api-key'];
  console.log('req.method', req.method)
  console.log('req.query', req.query)
  console.log('req.params', req.params)
  console.log('req.rawHeaders', req.rawHeaders)
  console.log('req.headers', req.headers)
  console.log('req.body', req.body)
  console.log('req.path', req.path)
  console.log('key', key)
  console.log('apiKeys', apiKeys)
  next();
});

// middleware with an arity of 4 are considered
// error handling middleware. When you next(err)
// it will be passed through the defined middleware
// in order, but ONLY those with an arity of 4, ignoring
// regular middleware.
app.use(function(err, req, res, next){
  // whatever you want here, feel free to populate
  // properties on `err` to treat it differently in here.
  res.status(err.status || 500);
  res.send({ error: err.message });
});

// our custom JSON 404 middleware. Since it's placed last
// it will be the last middleware called, if all others
// invoke next() and do not respond.
app.use(function(req, res){
  console.log('req', req)
  res.status(404);
  res.send({ error: "Lame, can't find that" });
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(port);
  console.log('Express started on port ', port);
}
