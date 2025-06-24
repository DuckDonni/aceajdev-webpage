"use client";

import React from "react";
import UGAHacks from "../../../cards/UGAHacks";
import MauxBot from "../../../cards/MauxBot";
import MomPops from "../../../cards/MomPops";
import RemoteCar from "../../../cards/RemoteCar";

const projectCards = [UGAHacks, MauxBot, MomPops, RemoteCar];

const Projects: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
                {projectCards.map((project, idx) => (
                    
                    <div key={idx} className="card bg-base-100 rounded-box shadow-xl flex flex-col items-center">
                       
                        {project.image && (
                            <figure className="w-full bg-base-200 rounded-t">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full max-h-48 object-contain"
                                />
                            </figure>
                        )}

                        <div className="card-body w-full">
                            <h2 className="card-title">{project.title}</h2>
                            <p>{project.description}</p>
                            {project.link && (
                                <div className="card-actions justify-end">
                                    <a
                                        href={project.link}
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;