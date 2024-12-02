import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "users",
            required: true,
        },
        venue: {
            type: mongoose.Types.ObjectId,
            ref: "venues",
            required: true,
        },
        event_name: {
            type: String,
            required: true,
            trim: true,
        },
        event_desc: {
            type: String,
            required: true,
            trim: true,
        },
        event_start: {
            type: Date,
            required: true,
        },
        event_end: {
            type: Date,
            required: true,
            validate: {
                validator: function (value) {
                    return value > this.event_start_time;
                },
                message: "Event end time must be after the start time.",
            },
        },
        event_image: {
            type: String
        },
        status: {
            type: String,
            enum: ["pending", "cancelled", "upcoming", "completed"],
            default: "pending",
        },
    },
    {
        timestamps: true,
    }
);

export const BookingModel = mongoose.model("bookings", BookingSchema);
