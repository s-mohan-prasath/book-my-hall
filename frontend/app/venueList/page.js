'use client';
import { useState, useEffect } from 'react';
import '../styles/venueList.css';

const apiUrl = 'http://localhost:5000/venue';

export default function Home() {
    const [venues, setVenues] = useState([]); // State to store venue data
    const [filters, setFilters] = useState({ address: '', seating_capacity: '' });

    // Fetch venues from the API
    const fetchVenues = async () => {
        try {
            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc1MmI5NDBjN2UyN2Y3OWVkYjFjOTRhIiwiaWF0IjoxNzMzNDg3OTg3LCJleHAiOjE3MzM0OTE1ODd9.QZ8ezha8o3klgmLnBIEhBJG983LIjK99BRhTez2YMZc';
            const response = await fetch(
                `${apiUrl}?address=${filters.address}&seating_capacity=${filters.seating_capacity}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Error fetching venues');
            }

            const data = await response.json();
            setVenues(data.venues); // Update state with venue data
        } catch (error) {
            console.error('Error fetching venues:', error);
        }
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        fetchVenues();
    }, [filters]); // Re-fetch data when filters change

    return (
        <div className="container px-4 md:px-8 py-6">
            <h1 className="title text-3xl font-semibold text-center mb-6">Venues in our Organization</h1>

            {/* Filter Section */}
            <div className="filterContainer flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                <select
                    name="address"
                    onChange={handleFilterChange}
                    className="filterDropdown p-2 border rounded-md"
                >
                    <option value="">Select Address</option>
                    <option value="Address A">Address A</option>
                    <option value="Address B">Address B</option>
                    <option value="Address C">Address C</option>
                </select>
                <input
                    type="number"
                    name="seating_capacity"
                    placeholder="Enter seating capacity"
                    onChange={handleFilterChange}
                    className="filterInput p-2 border rounded-md"
                />
            </div>

            {/* Venue Grid */}
            {venues.length > 0 ? (
                <div className="flex flex-col md:flex-row flex-wrap gap-16 justify-center p-10">
                    {venues.map((venue) => (
                        <div
                            key={venue.id}
                            className="bg-white md:w-[20%] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            {/* Venue Name */}
                            <h3 className="text-2xl font-bold text-red-500 mb-4">{venue.name}</h3>

                            {/* Venue Image */}
                            {venue.image ? (
                                <img
                                    src={venue.image} // Displaying image URL
                                    alt="Venue"
                                    className="mb-4 w-full h-32 object-cover rounded-md"
                                />
                            ) : (
                                <img
                                    src="https://via.placeholder.com/150" // Fallback image if no image is available
                                    alt="No Image Available"
                                    className="mb-4 w-full h-32 object-cover rounded-md"
                                />
                            )}

                            {/* Venue Details */}
                            <p className="text-gray-600">Address: {venue.address}</p> {/* Display address */}
                            <p className="text-gray-600">Seating Capacity: {venue.seating_capacity}</p> {/* Display seating capacity */}

                            {/* Details Button */}
                            <button
                                className="mt-4 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
                            >
                                Details
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    style={{ width: '100%', height: '50vh' }}
                    className="flex flex-col justify-center items-center"
                >
                    <p>No Venues Available</p>
                </div>
            )}
        </div>
    );
}
