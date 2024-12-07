'use client';
import React, { useMemo } from "react";

const Bookings = ({ events, searchTerm, filterStatus, handleConfirm, handleDecline }) => {
    const filteredEvents = useMemo(() => {
        return events.filter(event => {
            const matchesSearch =
                event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.hall.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.email.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesStatus =
                filterStatus === "all"
                    ? true
                    : (
                        (filterStatus === "pending" && !event.status) ||
                        (filterStatus === "confirmed" && event.status === "confirmed") ||
                        (filterStatus === "declined" && event.status === "declined")
                    );

            return matchesSearch && matchesStatus;
        });
    }, [events, searchTerm, filterStatus]);

    return (
        <>
            {filteredEvents.map((event, index) => (
                <div
                    key={index}
                    className="border mx-10 py-5 px-10 sm:flex justify-between rounded-md shadow-md bg-white mb-4"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl text-primary font-semibold">{event.hall}</h3>
                        <p><strong>Name :</strong> {event.name}</p>
                        <p><strong>Event :</strong> {event.eventName}</p>
                        <p><strong>Email :</strong> {event.email}</p>
                    </div>

                    <div className="mt-5 flex sm:flex-col sm:my-auto gap-4">
                        {event.status === "confirmed" || event.status === "declined" ? (
                            <p className={`text-gray-500 font-semibold
                                ${event.status === "confirmed" ? "text-green-600" : "text-red-600"}`}>
                                {event.status === "confirmed" ? "Confirmed" : "Declined"}
                            </p>
                        ) : (
                            <>
                                <button
                                    onClick={() => handleConfirm(index)}
                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                >
                                    Confirm
                                </button>
                                <button
                                    onClick={() => handleDecline(index)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                >
                                    Decline
                                </button>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Bookings;
