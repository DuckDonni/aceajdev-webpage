"use client";

import React, { use } from "react";

const Home: React.FC = () => {
    return (
        <div className="flex w-full min-h-screen p-6">
            <div className="flex w-1/2 flex-col">
                <div className="card bg-base-200 rounded-box grid h-80 place-items-center"style={{ background: "#b2a392" }}>content</div>
                <div className="p-4"></div>
                <div className="card bg-base-200 rounded-box grid h-80 place-items-center"style={{ background: "#b2a392" }}>content</div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="card rounded-box grid h-20 grow place-items-center"style={{ background: "#e4d4c3" }}>
                <p>
                    Hey, my name is Jonah, I am a software engineering student at Kennesaw State University.
                </p>
            </div>
        </div>
    );

}


export default Home;