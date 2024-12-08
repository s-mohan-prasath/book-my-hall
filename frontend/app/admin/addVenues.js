"use client"
import React, { useState } from 'react';
import axios from 'axios';

function AddVenueModal({ isOpen, onClose, onSubmit }) {
    if (!isOpen) return null;

    const [venueName, setVenueName] = useState('');
    const [seatingCapacity, setSeatingCapacity] = useState('');
    const [blockName, setBlockName] = useState('');
    const [podium, setPodium] = useState('yes');
    const [projector, setProjector] = useState('yes');
    const [ac, setAc] = useState('yes');
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState({});

    const handleImageUpload = (e) => {
        const newImages = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...newImages]); // Append new images to the list
    };

    const handleImageDelete = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index)); // Remove the image at the specified index
    };

    const validateForm = () => {
        const errors = {};
        if (!venueName) errors.venueName = 'Venue name is required';
        if (!seatingCapacity) errors.seatingCapacity = 'Seating capacity is required';
        if (!blockName) errors.blockName = 'Block name is required';
        return errors;
    };

    const handleSubmit = async () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            // Create FormData to send multipart form data
            const formData = new FormData();

            // Prepare venue data as JSON string
            const venueData = JSON.stringify({
                name: venueName,
                type: "hall",
                seating_capacity: parseInt(seatingCapacity),
                address: blockName,
                has_projector: true, // Fixed typo: changed 'has_project' to 'has_projector'
                has_ac: true
            });

            // Append venue data and images
            formData.append('venueData', venueData); // venueData as JSON string
            images.forEach((image) => {
                formData.append('venue-images', image); // Append each image
            });

            // Set up headers with the Authorization token
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6IjY3NTJjOTdmYzkzMzI2OGNmOTY3NTZmNSIsInR5cGUiOiJ2aWV3LW9ubHkiLCJpYXQiOjE3MzM0Nzg4NDUsImV4cCI6MTczMzU2NTI0NX0.yrrutkNN5xop4pvVMQQr7RMP9rCYoiUYN_iQsJTexrA"; // Replace with your actual token
            const requestOptions = {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: `Bearer ${token}`, // Authorization header
                },
            };

            // Make the POST request
            const response = await fetch("http://localhost:5000/admin/venue/", requestOptions);
            const result = await response.json();

            if (response.ok) {
                console.log(result);
                onSubmit(result.data.venue); // Call the onSubmit callback with venue data
                onClose(); // Close the modal or form
            } else {
                console.error("Error response:", result);
            }
        } catch (error) {
            console.error("Error adding venue:", error.message);
        }
    };



    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-full sm:w-11/12 md:w-9/12 lg:w-7/12 xl:w-5/12 max-w-4xl rounded-xl p-6 shadow-lg relative max-h-[80vh] overflow-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-gray-700"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-semibold text-primary mb-4">Add Venue</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Venue Name</label>
                        <input
                            type="text"
                            value={venueName}
                            onChange={(e) => setVenueName(e.target.value)}
                            className="w-full border rounded-md p-2"
                            placeholder="Enter venue name"
                        />
                        {errors.venueName && <p className="text-red-500 text-sm">{errors.venueName}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Venue Type</label>
                        <select
                            value={podium}
                            onChange={(e) => setPodium(e.target.value)}
                            className="w-full border rounded-md p-2"
                        >
                            <option value="hall">Hall</option>
                            <option value="lab">Lab</option>
                            <option value="classroom">Classroom</option>
                            <option value="classroom">Classroom</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Seating Capacity</label>
                        <input
                            type="number"
                            value={seatingCapacity}
                            onChange={(e) => setSeatingCapacity(e.target.value)}
                            className="w-full border rounded-md p-2"
                            placeholder="Enter seating capacity"
                        />
                        {errors.seatingCapacity && <p className="text-red-500 text-sm">{errors.seatingCapacity}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Block Name</label>
                        <input
                            type="text"
                            value={blockName}
                            onChange={(e) => setBlockName(e.target.value)}
                            className="w-full border rounded-md p-2"
                            placeholder="Enter block name"
                        />
                        {errors.blockName && <p className="text-red-500 text-sm">{errors.blockName}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Podium Availability</label>
                        <select
                            value={podium}
                            onChange={(e) => setPodium(e.target.value)}
                            className="w-full border rounded-md p-2"
                        >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Projector Availability</label>
                        <select
                            value={projector}
                            onChange={(e) => setProjector(e.target.value)}
                            className="w-full border rounded-md p-2"
                        >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">AC / Non-AC</label>
                        <select
                            value={ac}
                            onChange={(e) => setAc(e.target.value)}
                            className="w-full border rounded-md p-2"
                        >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Upload Images</label>
                        <input
                            type="file"
                            multiple
                            onChange={handleImageUpload}
                            className="w-full border rounded-md p-2"
                        />
                        {images.length > 0 && (
                            <div className="mt-2">
                                <h3 className="text-sm">Selected Images:</h3>
                                <ul className="list-disc pl-5">
                                    {images.map((image, index) => (
                                        <li key={index} className="flex items-center justify-between">
                                            {image.name}
                                            <button
                                                type="button"
                                                onClick={() => handleImageDelete(index)}
                                                className="text-red-500 ml-2"
                                            >
                                                &times;
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddVenueModal;
