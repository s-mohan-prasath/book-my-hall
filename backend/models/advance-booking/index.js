import mongoose from "mongoose";

const AdvanceBookingSchema = new mongoose.Schema(
    {
        booking_id: {
            type: mongoose.Types.ObjectId,
            ref: "bookings",
            required: true,
        },
        booking_date: {
            type: Date,
            default: () => Date.now(),
        },
        request_note: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export const AdvanceBookingModel = mongoose.model("advancebookings", AdvanceBookingSchema);
