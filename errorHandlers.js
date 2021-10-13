/*
* 404 and Global Error Handlers
*/

// Error handler for 404
const handleFourOhFour = (req, res, next) => {
  const err = new Error('err');
  err.status = 404;
  err.message = 'Oops, page not found. Looks like that route does not exist.';
  next(err);
}

// Global error handler
const handleGlobalError = (err, req, res, next) => {
  res.status(err.status || 500);
  if (err.status === 404) {
    console.log("Status 404! Looks like this page does not exist.");
    res.render('page-not-found', {
      "message": err.message,
      "status": err.status
    });
  } else {
    console.log(`Server Error! Status: ${err.status} Message: ${err.message}`);
    res.render('error', {
      "message": err.message,
      "error": err
    });
  }
  
}

// Export error handlers
module.exports = { handleFourOhFour, handleGlobalError };