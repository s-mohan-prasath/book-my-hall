"use client";
import React, { useState, useMemo } from "react";
import AddVenueModal from './addVenues.js';


export default function Admin() {
    const [activeTab, setActiveTab] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("pending");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddVenueSubmit = (formData) => {
        console.log('Submitted Venue Data:', formData);
    };


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

    const usersData = [
        { name: "John Doe", email: "john.doe@example.com", phoneNumber: "123-456-7890" },
        { name: "Jane Doe", email: "jane.doe@example.com", phoneNumber: "098-765-4321" },
        { name: "Michael Brown", email: "michael.brown@example.com", phoneNumber: "456-789-0123" },
    ];

    const [events, setEvents] = useState(eventsData.map(event => ({ ...event, status: null })));

    // Filtered and Searched Events
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

    // Filtered and Searched Users
    const filteredUsers = useMemo(() => {
        return eventsData.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phoneNumber.includes(searchTerm)
        );
    }, [searchTerm]);

    const tabs = [
        { name: "Dashboard", content: renderDashboard() },
        { name: "Bookings", content: filteredEvents },
        { name: "Accepted Bookings", content: "Accepted Bookings will appear here" },
        { name: "Users", content: filteredUsers },
        { name: "Venues", content: null },
    ];

    function renderDashboard() {
        const totalEvents = events.length;
        const confirmedEvents = events.filter(event => event.status === "confirmed").length;
        const pendingEvents = events.filter(event => !event.status).length;
        const declinedEvents = events.filter(event => event.status === "declined").length;

        return (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                <div className="border bg-white rounded-lg shadow-md p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Total Events</h3>
                    <div className="text-3xl font-bold text-primary">{totalEvents}</div>
                </div>
                <div className="border bg-white rounded-lg shadow-md p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Confirmed Events</h3>
                    <div className="text-3xl font-bold text-green-600">{confirmedEvents}</div>
                </div>
                <div className="border bg-white rounded-lg shadow-md p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Pending Events</h3>
                    <div className="text-3xl font-bold text-yellow-600">{pendingEvents}</div>
                </div>
                <div className="border bg-white rounded-lg shadow-md p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Declined Events</h3>
                    <div className="text-3xl font-bold text-red-600">{declinedEvents}</div>
                </div>
            </div>
        );
    }

    const handleConfirm = (index) => {
        const updatedEvents = [...events];
        const eventToConfirm = filteredEvents[index];
        const originalIndex = events.findIndex(e => e === eventToConfirm);
        updatedEvents[originalIndex].status = "confirmed";
        setEvents(updatedEvents);
    };

    const handleDecline = (index) => {
        const updatedEvents = [...events];
        const eventToDecline = filteredEvents[index];
        const originalIndex = events.findIndex(e => e === eventToDecline);
        updatedEvents[originalIndex].status = "declined";
        setEvents(updatedEvents);
    };

    const renderSearchAndFilter = () => (
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 px-10">
            <input
                type="text"
                placeholder="Search events or users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-2/5 p-2 border border-black rounded-md mb-2 md:mb-0 "
            />
            {(activeTab === 1) && (
                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full md:w-1/5 p-2 border rounded-md border-black"
                >
                    <option value="pending">Pending</option>
                    <option value="all">All Events</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="declined">Declined</option>
                </select>
            )}
        </div>
    );

    return (
        <div className="m-0 p-0 w-full">
            <div className="bg-black p-5 flex gap-10 justify-center">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveTab(index);
                            setSearchTerm("");
                            setFilterStatus("pending");
                        }}
                        className={`bg-black rounded px-5 py-1.5 duration-300 text-white md:text-xl
                            ${activeTab === index ? 'bg-primary' : 'bg-black border border-primary'}`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            <div className="mt-10 p-5 md:w-full mx-auto rounded">
                {/* Add search functionality for Bookings and Users */}
                {(activeTab === 1 || activeTab === 3) && renderSearchAndFilter()}

                {activeTab === 0 ? (
                    <h2 className="text-center text-2xl text-primary">{tabs[activeTab].content}</h2>
                ) : activeTab === 1 ? (
                    filteredEvents.map((event, index) => (
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
                    ))
                ) : activeTab === 2 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse table-auto">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="py-2 px-4 border text-left">Name</th>
                                    <th className="py-2 px-4 border text-left">Event</th>
                                    <th className="py-2 px-4 border text-left">Hall</th>
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
                                        <td className="py-2 px-4">{event.eventName}</td>
                                        <td className="py-2 px-4">{event.hall}</td>
                                        <td className="py-2 px-4">{event.email}</td>
                                        <td className="py-2 px-4">{event.phoneNumber}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : activeTab === 3 ? (
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
                                {filteredUsers.map((user, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
                                    >
                                        <td className="py-2 px-4">{user.name}</td>
                                        <td className="py-2 px-4">{user.email}</td>
                                        <td className="py-2 px-4">{user.phoneNumber}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : activeTab === 4 ? (
                    <div className="text-center">
                        <div className="flex justify-center gap-4">
                            <button
                                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark duration-300"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Add Venues
                            </button>
                        </div>
                    </div>
                ) : (
                    <p>{tabs[activeTab].content}</p>
                )}
                <AddVenueModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddVenueSubmit}
                />
            </div>
        </div>
    );
}