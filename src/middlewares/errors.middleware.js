import * as path from "node:path";

const errorHandler = (err, req, res, next) => {
    console.log(err.stack)

    const containsNotFound = err.message.toLowerCase().includes('not found');
    const containsConflict = err.message.toLowerCase().includes('duplicate');

    function buildError(stat, err, msg, path) {
        return {
            timestamp: new Date().toISOString(),
            status: stat,
            error: err,
            message: msg,
            path: path
        }
    }

    if (err.message && containsNotFound) {
        return res.status(404).json(
            buildError(404, 'Not Found', err.message, req.path)
        );
    }
    if (err.message && containsConflict) {
        return res.status(409).json(
            buildError(409, 'Conflict', err.message, req.path)
        );
    }
    return res.status(500).json(
        buildError(500, 'Internal Server Error', err.message, req.path)
    );
}

export default errorHandler;