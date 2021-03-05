"use strict";
module.exports = {
    middleware: (req, res, next) => {
        let lang = req.headers.lang || "en";
        req.lang = lang;
        res.response = (data, message, limit = 25) => {
            let json = {
                status: true,
                data: data,
                message: message,
                pageSize: limit ? limit : 0,
                total: data ? 1 : 0
            };
            if (!!data && !!data.rows) {
                json.data = data.rows;
                json.total = data.rows.count;
            }
            if (!!data && !!data.count) {
                json.total = data.count;
            }
            res.send(json);
        };
        res.errorResponse = (error, code, message, status = 400) => {
            let json = {
                status: false,
                code: code,
                error: `${error}`,
                verbose: error,
                message: message
            };
            res.status(status).send(json);
        };
        next();
    }
};