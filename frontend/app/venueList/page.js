'use client';
import { useState } from "react";
import "../styles/venueList.css";

export default function Home() {
  const [venues, setVenues] = useState([]); // Store venue data
  const [filters, setFilters] = useState({ block: "", availability: "", capacity: "" });

  const fetchVenues = () => {
    // Mock venue data
    const data = [
      { id: 1, block: "A", availability: "Available", capacity: 50 },
      { id: 2, block: "B", availability: "Unavailable", capacity: 100 },
      { id: 3, block: "C", availability: "Available", capacity: 150 },
    ];

    // Apply filters
    const filteredData = data.filter(
      (venue) =>
        (!filters.block || venue.block === filters.block) &&
        (!filters.availability || venue.availability === filters.availability) &&
        (!filters.capacity || venue.capacity >= Number(filters.capacity))
    );
    setVenues(filteredData);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1 className="title">Venues in our Organization</h1>

      {/* Filter Section */}
      <div className="filterContainer">
        <select name="block" onChange={handleFilterChange} className="filterDropdown">
          <option value="">Select Block</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <select
          name="availability"
          onChange={handleFilterChange}
          className="filterDropdown"
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
          className="filterInput"
        />
        <button onClick={fetchVenues} className="filterButton">
          Search
        </button>
      </div>

      {/* Venue Grid */}
      <div className="grid">
        {venues.length > 0 ? (
          venues.map((venue) => (
            <div key={venue.id} className="card">
              <p>Block: {venue.block}</p>
              <p>Availability: {venue.availability}</p>
              <p>Capacity: {venue.capacity}</p>
            </div>
          ))
        ) : (
          <p className="noResults">No venues found</p>
        )}
      </div>
    </div>
  );
}
