// src/layouts/AdminLayout.jsx
import {Link, Outlet, useLocation} from "react-router-dom";

const AdminLayout = () => {
  const location = useLocation();

  // Navigation items
  const navItems = [
    {path: "/admin/events", label: "Canit Event"},
    {path: "/admin/dashboard", label: "Dashboard"},
    {path: "/admin/rules", label: "Rules"},
  ];

  // Sub-items for Events
  const eventSubItems = [
    {path: "/admin/events/registration", label: "Registration"},
    {path: "/admin/events/participants", label: "Participants"},
    {path: "/admin/events/confirmations", label: "Confirmations"},
    {path: "/admin/events/email", label: "Email Notification"},
  ];

  // Check if current path is active
  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-5 border-b">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>

        <nav className="mt-5">
          {/* Main Navigation */}
          <ul>
            {navItems.map((item) => (
              <li key={item.path} className="mb-1">
                <Link
                  to={item.path}
                  className={`block py-2 px-4 ${
                    isActive(item.path)
                      ? "bg-blue-100 text-blue-600 border-l-4 border-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}>
                  {item.label}
                </Link>

                {/* Event Sub-navigation */}
                {item.path === "/admin/events" && isActive(item.path) && (
                  <ul className="ml-6 mt-1 border-l border-gray-200 pl-2">
                    {eventSubItems.map((subItem) => (
                      <li key={subItem.path}>
                        <Link
                          to={subItem.path}
                          className={`block py-2 px-3 text-sm ${
                            location.pathname === subItem.path
                              ? "text-blue-600 font-medium"
                              : "text-gray-600 hover:text-gray-900"
                          }`}>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Back to Main Site */}
          <div className="mt-8 border-t pt-4">
            <Link
              to="/"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
              &larr; Back to Main Site
            </Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
