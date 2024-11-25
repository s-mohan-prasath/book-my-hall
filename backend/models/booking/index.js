import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "users",
            required: true,
        },
        venue_id: {
            type: mongoose.Types.ObjectId,
            ref: "venues",
            required: true,
        },
        booking_date: {
            type: Date,
            default: () => Date.now(),
        },
        event_name: {
            type: String,
            required: true,
            trim: true,
        },
        event_date: {
            type: Date,
            required: true,
        },
        event_start_time: {
            type: Date,
            required: true,
        },
        event_end_time: {
            type: Date,
            required: true,
            validate: {
                validator: function (value) {
                    return value > this.event_start_time;
                },
                message: "Event end time must be after the start time.",
            },
        },
        status: {
            type: String,
            enum: ["approved", "upcoming", "denied", "cancelled"],
            default: "upcoming",
        },
    },
    {
        timestamps: true,
    }
);

export const BookingModel = mongoose.model("bookings", BookingSchema);
