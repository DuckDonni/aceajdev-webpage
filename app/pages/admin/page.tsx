"use client";

import React, { use } from "react";

const Admin: React.FC = () => {
    return (
        <div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                        <th>1</th>
                        <td>Cy Ganderton</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}


export default Admin;