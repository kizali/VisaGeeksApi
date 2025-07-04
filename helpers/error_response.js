export const errorResponse = (res, message = "", status = 400) => {
    return res.status(status).json({
        statusCode: status,
        message: message
    });
};