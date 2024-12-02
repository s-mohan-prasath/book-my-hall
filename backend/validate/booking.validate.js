import joi from 'joi'


export function ValidateNewBooking(bookingData) {
    const Schema = joi.object({
        venue: joi.string().required(),
        event_name: joi.string().required().max(100),
        event_desc: joi.string().required().max(500),
        event_start: joi.date().required(),
        event_end: joi.date().required(),
        event_image: joi.string(),
        request_note: joi.string(),
        people_count: joi.number().min(1).max(10000).required()
    })
    return Schema.validateAsync(bookingData)
}
export function ValidateUpdateBooking(bookingData) {
    const Schema = joi.object({
        venue: joi.string().required(),
        event_name: joi.string().max(100),
        event_desc: joi.string().max(500),
        event_start: joi.date().required(),
        event_end: joi.date().required(),
        event_image: joi.string(),
        request_note: joi.string(),
        people_count: joi.number().min(1).max(10000)
    })
    return Schema.validateAsync(bookingData)
}