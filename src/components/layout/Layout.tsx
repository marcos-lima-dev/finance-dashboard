// src/components/layout/Layout.tsx
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Menu, X } from "lucide-react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="h-screen flex bg-gray-50">
            {/* Sidebar Desktop */}
            <aside className="hidden lg:block w-64 border-r border-gray-200 bg-white">
                <Sidebar />
            </aside>

            {/* Mobile Sidebar */}
            <div
                className={`
        lg:hidden fixed inset-y-0 left-0 z-30 w-64 bg-white transform 
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-200 ease-in-out
      `}
            >
                <Sidebar />
            </div>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-20 bg-black bg-opacity-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden fixed bottom-4 right-4 z-40 p-3 bg-blue-600 text-white rounded-full shadow-lg"
            >
                <Menu className="h-6 w-6" />
            </button>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                <Header />
                <main className="flex-1 overflow-auto">
                    <div className="max-w-screen-2xl mx-auto p-4 lg:p-6 h-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
