import React from "react";

export default function Navbar({ user, onLogout }) {
    return (
        <div className="bg-white w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left side - Logo and Navigation */}
                    <div className="flex items-center space-x-8">
                        {/* Logo - Black circle */}
                        <div className="w-8 h-8 bg-black rounded-full"></div>

                        {/* Navigation Links */}
                        <nav className="hidden md:flex space-x-6">
                            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                                About Us
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                                Service Area
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                                Deals
                            </a>
                        </nav>
                    </div>

                    {/* Right side - User info and Icons */}
                    <div className="flex items-center space-x-4">
                        {/* User info */}
                        {user && (
                            <div className="flex items-center space-x-3">
                                <div className="text-right">
                                    <p className="text-sm font-medium text-gray-900">{user.name || user.firstName}</p>
                                    <p className="text-xs text-gray-500">{user.email}</p>
                                </div>
                                <button
                                    onClick={onLogout}
                                    className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                                >
                                    Logout
                                </button>
                            </div>
                        )}

                        {/* Headphones icon */}
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-5 h-5 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                />
                            </svg>
                        </div>

                        {/* Globe icon and Language */}
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-5 h-5 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                                />
                            </svg>
                            <span className="text-gray-700 text-sm font-medium">EN</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom border line */}
            <div className="border-b border-gray-200"></div>
        </div>
    );
}
