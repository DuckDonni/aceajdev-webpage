"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NavBar: React.FC = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <div className="navbar bg-neutral text-neutral-content ">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl hover:bg-primary hover:text-neutral-content"  onClick={() => handleNavigation("/")}>Jonah Smith</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="mx-2">
                        <a className="btn btn-outline border-neutral-content text-neutral-content hover:bg-primary hover:text-neutral-content" onClick={() => handleNavigation("../pages/projects")}>Projects</a>
                    </li>
                    <li className="mx-2">
                        <a className="btn btn-outline border-neutral-content text-neutral-content hover:bg-primary hover:text-neutral-content" onClick={() => handleNavigation("../pages/about")}>About Me</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;


