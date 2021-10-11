/*
* 404 and Global Error Handlers
*/

// Error handler for 404
const handleFourOhFour = (req, res, next) => {
    console.log('Handling 404 error');
    const err = new Error('err');
    err.status = 404;
    err.message = 'Oops, page not found. Looks like that route does not exist.';
    next(err);
  }
  
  
  // Global error handler
  const handleGlobalError = (err, req, res, next) => {
    console.log('Handling a global error');
    console.log(err);
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {}; 
    res.status(err.status || 500);
    res.send(err.message);
  }
  
  // Export error handlers
  module.exports = { handleFourOhFour, handleGlobalError };