// src/components/layout/Sidebar.tsx
import React from "react";
import {
    LayoutDashboard,
    Upload,
    ArrowUpDown,
    BarChart2,
    FileText,
    Settings,
    HelpCircle,
    ChevronLeft,
} from "lucide-react";

const Sidebar: React.FC = () => {
    const menuItems = [
        {
            id: "dashboard",
            icon: LayoutDashboard,
            label: "Dashboard",
            active: true,
        },
        { id: "upload", icon: Upload, label: "Upload Data" },
        { id: "transactions", icon: ArrowUpDown, label: "Transactions" },
        { id: "analytics", icon: BarChart2, label: "Analytics" },
        { id: "reports", icon: FileText, label: "Reports" },
    ];

    const bottomMenuItems = [
        { id: "settings", icon: Settings, label: "Settings" },
        { id: "help", icon: HelpCircle, label: "Help & Support" },
    ];

    return (
        <aside className="w-60 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)]">
            {/* Logo */}
            <div className="h-16 flex items-center px-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                    <BarChart2
                        className="h-6 w-6 text-blue-600"
                        strokeWidth={2.5}
                    />
                    <span className="font-semibold text-gray-900">
                        Financial Dashboard
                    </span>
                </div>
            </div>

            {/* Main Menu */}
            <nav className="p-4 space-y-1">
                {menuItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`
              flex items-center gap-3 px-3 py-2 rounded-lg text-sm
              ${
                  item.active
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
              }
            `}
                    >
                        <item.icon
                            className={`h-5 w-5 ${
                                item.active ? "text-blue-600" : "text-gray-500"
                            }`}
                        />
                        <span className="font-medium">{item.label}</span>
                    </a>
                ))}
            </nav>

            {/* Bottom Menu */}
            <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 bg-white">
                {bottomMenuItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
                    >
                        <item.icon className="h-5 w-5 text-gray-500" />
                        <span className="font-medium">{item.label}</span>
                    </a>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
