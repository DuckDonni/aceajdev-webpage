"use client";

import React from "react";

// Import all project cards from the cards folder
// Adjust the path as needed. This assumes each card exports a default object with title, description, and image.
const projectCards = [
    // Example static imports; replace with dynamic imports if needed
    //require("../../cards/UGAHacks").default,
    // Add more as needed
];

const Projects: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
            </div>
        </div>
    );
};

export default Projects;