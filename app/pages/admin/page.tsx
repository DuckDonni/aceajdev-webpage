"use client";

import React from "react";

const Admin: React.FC = () => {
    return (
        <div className="flex gap-4 p-4">
            <div className="w-1/2 flex flex-col items-center space-y-4">
               
            </div>
            <div className="w-1/2">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>https://sdfsdf</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;