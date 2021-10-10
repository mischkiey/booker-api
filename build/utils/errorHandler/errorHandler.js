"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = function (err, _req, res, _next) {
    if (process.env.NODE_ENV === 'production') {
        res
            .status(500)
            .json({ message: 'Internal Server Error' });
    }
    else {
        console.error(err);
        res
            .status(500)
            .json(err);
    }
};
exports.default = errorHandler;
