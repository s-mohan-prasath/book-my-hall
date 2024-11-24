"use client";
import React, { useState } from "react";

export default function Admin() {
    const [activeTab, setActiveTab] = useState(0);

    const eventsData = [
        { name: "Jane Smith", hall: "Conference Room", email: "example2@example.com", eventName: "Tech Conference", phoneNumber: "234-567-8901" },
        { name: "Mike Johnson", hall: "Banquet Hall", email: "example3@example.com", eventName: "Birthday Party", phoneNumber: "345-678-9012" },
        { name: "Alice Williams", hall: "Ballroom", email: "alice@example.com", eventName: "Gala Dinner", phoneNumber: "456-789-0123" },
        { name: "Emily Davis", hall: "Meeting Room A", email: "emily@example.com", eventName: "Business Workshop", phoneNumber: "678-901-2345" },
        { name: "Chris Martin", hall: "Outdoor Pavilion", email: "chris@example.com", eventName: "Music Concert", phoneNumber: "789-012-3456" },
        { name: "Olivia Lee", hall: "Lounge Area", email: "olivia@example.com", eventName: "Networking Event", phoneNumber: "890-123-4567" },
        { name: "David Harris", hall: "Small Conference Room", email: "david@example.com", eventName: "Team Meeting", phoneNumber: "901-234-5678" },
        { name: "Sophia Wilson", hall: "Rooftop Terrace", email: "sophia@example.com", eventName: "Sunset Party", phoneNumber: "012-345-6789" }
    ];

    const [events, setEvents] = useState(eventsData);

    const tabs = [
        { name: "Dashboard", content: events },
        { name: "Client Details", content: 'Client details will appear here' },
    ];

    const handleConfirm = (index) => {
        const updatedEvents = [...events];
        updatedEvents[index].status = "confirmed";
        setEvents(updatedEvents);
        console.log(`Event at index ${index} confirmed`);
    };

    const handleDecline = (index) => {
        const updatedEvents = [...events];
        updatedEvents[index].status = "declined";
        setEvents(updatedEvents);
        console.log(`Event at index ${index} declined`);
    };

    return (
        <div className="m-0 p-0 w-full">
            <div className="bg-black p-5 flex gap-10 justify-center">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`bg-black rounded px-5 py-1.5 duration-300 text-white md:text-xl
                            ${activeTab === index ? 'bg-primary' : 'bg-black border border-primary'}`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            <div className="mt-10 p-5 md:w-full mx-auto rounded">
                {Array.isArray(tabs[activeTab].content) ? (
                    tabs[activeTab].content.map((event, index) => (
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

                            <div className="mt-5  flex sm:flex-col sm:my-auto gap-4">
                                {event.status === "confirmed" || event.status === "declined" ? (
                                    <p className="text-gray-500">{event.status === "confirmed" ? "Confirmed" : "Declined"}</p>
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
                    ))
                ) : activeTab === 1 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse table-auto">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="py-2 px-4 border text-left">Name</th>
                                    <th className="py-2 px-4 border text-left">Email</th>
                                    <th className="py-2 px-4 border text-left">Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.filter(event => event.status === "confirmed").map((event, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
                                    >
                                        <td className="py-2 px-4">{event.name}</td>
                                        <td className="py-2 px-4">{event.email}</td>
                                        <td className="py-2 px-4">{event.phoneNumber}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>{tabs[activeTab].content}</p>
                )}
            </div>
        </div>
    );
}
