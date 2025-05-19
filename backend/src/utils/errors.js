export class HttpError extends Error{
    constructor(message, statusCode){
        super(message, statusCode),
        this.statusCode = statusCode,
        this.name = 'httpError'
    }
}