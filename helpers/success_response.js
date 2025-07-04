export const   successResponse = (res, data = {}, message = "Success", status = 200) => {
    return res.status(status).json({
        status: status,
        message: message,
        data: data,
    })
}