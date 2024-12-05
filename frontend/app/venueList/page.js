'use client';
import axios from "axios";
import { useState } from "react";
import "../styles/venueList.css";

const apiUrl = "http://localhost:3000/venue";

export default function Home() {
  const [venues, setVenues] = useState([]); // Store venue data
  const [filters, setFilters] = useState({ block: "", availability: "", capacity: "" });

  const fetchVenues = async() => {
    try{
      const token= localStorage.setItem('token');//need to check n update jwt token
      const response= await axios.get(apiUrl,{
        headers:{
          Authorization: `Bearer ${token}`
        },
        params:{
          block:filters.block,
          availability:filters.availability,
          capacity:filters.capacity
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
      {venues.length > 0 ? (
        <div className="grid mx-auto">
          {
            venues.map((venue) => (
              <div key={venue.id} className="card">
                <p>Block: {venue.block}</p>
                <p>Availability: {venue.availability}</p>
                <p>Capacity: {venue.capacity}</p>
              </div>
            ))
          }
        </div>
      ) : (
        <div style={{ width: "100%", height: "50vh" }} className="flex flex-col justify-center items-center">
          <p>No Venues Available</p>
        </div>
      )}
    </div>
  );
}
