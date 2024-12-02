import joi from 'joi'


export function ValidateNewBooking(bookingData){
    const Schema = joi.object({
        venue:joi.string().required(),
        event_name:joi.string().required().max(100),
        event_desc:joi.string().required().max(500),
        event_start:joi.date().required(),
        event_end:joi.date().required(),
        event_image:joi.string(),
    })
    return Schema.validateAsync(bookingData)
}