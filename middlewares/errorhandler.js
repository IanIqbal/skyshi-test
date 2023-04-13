const errorHandler = (err, req, res, next) =>{
    let status = 500
    let message = `Internal Server Error`
    switch (err.name) {
        case "NOT FOUND":
            status = 404
            message = `${err.context} with ID ${err.payload} Not Found`
            break;
        case "SequelizeValidationError":
            status=400
            message = err.errors[0].message
            break;
    }

    res.status(status).json({message, status})
}

module.exports = errorHandler