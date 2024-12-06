'use client';
import axios from "axios";
import { useState } from "react";
import "../styles/venueList.css";

const apiUrl = "http://localhost:3000/venue";

export default function Home() {
    const [venues, setVenues] = useState([]); // Store venue data
    const [filters, setFilters] = useState({ block: "", availability: "", capacity: "" });

    const fetchVenues = async () => {
        try {
            const token = '';//need to check n update jwt token
            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    block: filters.block,
                    availability: filters.availability,
                    capacity: filters.capacity
                }
            });
            setVenues(response.data.venues);
        } catch (error) {
            console.error('Error fetching venues:', error);
        }
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="container px-4 md:px-8 py-6">
            <h1 className="title text-3xl font-semibold text-center mb-6">Venues in our Organization</h1>

            {/* Filter Section */}
            <div className="filterContainer flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                <select name="block" onChange={handleFilterChange} className="filterDropdown p-2 border rounded-md">
                    <option value="">Select Block</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <select
                    name="availability"
                    onChange={handleFilterChange}
                    className="filterDropdown p-2 border rounded-md"
                >
                    <option value="">Select Availability</option>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                </select>
                <input
                    type="number"
                    name="capacity"
                    placeholder="Enter seating capacity"
                    onChange={handleFilterChange}
                    className="filterInput p-2 border rounded-md"
                />
            </div>

            {/* Venue Grid */}
            {venues.length > 0 ? (
                <div className="flex flex-col md:flex-row flex-wrap gap-16 justify-center p-10">
                    {venues.map((venue) => (
                        <div key={venue.id} className="bg-white  md:w-[20%]  p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-bold text-red-500 mb-4">{venue.name}</h3>
                            <p className="text-gray-600">Block: {venue.block}</p>
                            <p className="text-gray-600">Availability: {venue.availability}</p>
                            <p className="text-gray-600">Capacity: {venue.capacity}</p>
                            <button
                                onClick={() => handleDetailsClick(venue)}
                                className="mt-4 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
                            >
                                Details
                            </button>
                        </div>
                    ))}
                </div>

            ) : (
                <div style={{ width: "100%", height: "50vh" }} className="flex flex-col justify-center items-center">
                    <p>No Venues Available</p>
                </div>
            )}
        </div>
    );
}
