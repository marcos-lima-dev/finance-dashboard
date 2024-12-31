// src/components/layout/Header.tsx
import React from "react";
import { Bell, Home, Settings, User } from "lucide-react";

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="flex h-16 items-center justify-between px-4">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <a href="/" className="text-gray-400 hover:text-gray-600">
                        <Home className="h-4 w-4" />
                    </a>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-600">Dashboard</span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {/* Notifications */}
                    <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                    </button>

                    {/* Settings */}
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                        <Settings className="h-5 w-5" />
                    </button>

                    {/* Profile */}
                    <div className="flex items-center pl-2">
                        <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                            <div className="flex items-center justify-center h-8 w-8 bg-gray-100 rounded-lg">
                                <User className="h-5 w-5 text-gray-600" />
                            </div>
                            <span>Admin</span>
                            <svg
                                className="h-4 w-4 text-gray-500"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
