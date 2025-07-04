export const catchResponse = (err, res, message = "Internal Server Error", status = 500) => {
    return res.status(status).json({
        statusCode: status,
        message: message,
        error:"Something went wrong",
    });
};
