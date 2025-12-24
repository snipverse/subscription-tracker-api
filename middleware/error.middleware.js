// create a subscription -> middleware (checks for renewal date) -> middleware (checks for errors) -> next ->  controller
// basically some blocks of code that executes before or after something allowing us to intercept what is happening

const errorMiddleware = (err, req, res, next) => {
    console.log(err);

    let statusCode = err.statusCode || 500;
    let message = err.message || 'Server Error';

    if (err.name === 'CastError') {
        statusCode = 404;
        message = 'Resource not found';
    }

    if (err.code === 11000) {
        statusCode = 400;
        message = 'Duplicate field value entered';
    }

    if (err.name === 'ValidationError') {
        statusCode = 400;
        message = Object.values(err.errors)
          .map(val => val.message)
          .join(', ');
    }

    res.status(statusCode).json({
        success: false,
        error: message
    });
};

export default errorMiddleware;
