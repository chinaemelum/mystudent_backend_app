const { constant } = require("../constants");

const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constant.VALDATION_ERROR:
            res.json({ title: "VALIDATION FAILED", message: err.message, stackTrace: err.stack });
            break;
        case constant.NOT_FOUND:
            res.json({ title: "NOT FOUND", message: err.message, stackTrace: err.stack });
        case constant.UNAUTHORISED:
            res.json({ title: "un authorised", message: err.message, stackTrace: err.stack });
        case constant.FORBIDDEN:
            res.json({ title: "forbidden", message: err.message, stackTrace: err.stack });
        case constant.SERVER_ERROR:
            res.json({ title: "server error", message: err.message, stackTrace: err.stack });
        default:
            console.log("no error, we are good to go");
            break;
    }


};

module.exports = errorHandler