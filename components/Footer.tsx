"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Footer: React.FC = () => {
    const router = useRouter();
    return (
        <footer className="footer bg-neutral text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
            <p>
                <a className="btn btn-ghost normal-case text-xl hover:bg-primary hover:text-neutral-content" onClick={() => router.push("../pages/admin")}>Admin Portal</a>
            </p>
            </aside>
            <nav>
                <h6 className="footer-title">Socials</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/DuckDonni" target="_blank" className="hover:text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.4 3-.405 1.02.005 2.043.14 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.217.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"></path>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/jonah-smith-40b83a290" target="_blank" className="hover:text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.867 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.879v1.367h.041c.401-.757 1.379-1.555 2.841-1.555 3.039 0 3.6 2.001 3.6 4.604v5.584z"></path>
                        </svg>
                    </a>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;