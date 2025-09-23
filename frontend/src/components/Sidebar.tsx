import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import overviewIcon from "../assets/images/overviewIcon.png";
import homeIcon from "../assets/images/homeIcon.png";
import mapIconIcon from "../assets/images/mapIcon.png";
import SettingsIcon from "../assets/images/settingsIcon.png";
import LogOutIcon from "../assets/images/logOutIcon.png";
import { ROUTES } from "../constants/routes";

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger turns to X when open */}
        <div className="space-y-1">
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-all ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[239px] bg-white p-4 z-40 transition-transform transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:block`}
      >
        <nav className="flex flex-col h-full justify-between">
          <div className="space-y-8">
            <h1 className="ml-1 mt-[20px] mb-12">
              <span className="font-bold text-2xl">GH-Hazard</span> <br />
              <span className="text-lg">Report</span>
            </h1>

            <div className="mt-4">
              <div className="space-y-3">
                <NavLink
                  to={`/${ROUTES.dashboard}`}
                  icon={homeIcon}
                  label="Home"
                  active={isActive(`/${ROUTES.dashboard}`)}
                  onClick={() => setIsOpen(false)}
                />
                <NavLink
                  to="overview"
                  icon={overviewIcon}
                  label="Overview"
                  active={isActive(`/dashboard/overview`)}
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center px-3 mb-4">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap">
                  Others
                </span>
                <div className="ml-3 flex-1 h-px bg-gray-300"></div>
              </div>
              <div className="space-y-3">
                <NavLink
                  to="/dashboard/map"
                  icon={mapIconIcon}
                  label="Map"
                  active={isActive(`/dashboard/map`)}
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-8">
            <NavLink
              to="settings"
              icon={SettingsIcon}
              label="Settings"
              active={isActive(`/dashboard/settings`)}
              onClick={() => setIsOpen(false)}
            />
            <NavLink
              to="/login"
              icon={LogOutIcon}
              label="Logout"
              active={false}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </nav>
      </aside>

      {/* Dark overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

type NavLinkProps = {
  to: string;
  icon: string;
  label: string;
  active: boolean;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ to, icon, label, active, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center h-[40px] p-3 rounded-[4px] gap-[10px] transition-colors text-base ${
        active
          ? "bg-[#E8E8EA] text-gray-900 font-semibold"
          : "text-gray-700 hover:bg-[#E8E8EA] font-medium"
      }`}
    >
      <img src={icon} alt={`${label} Icon`} className="w-[18px] h-[18px]" />
      <span>{label}</span>
    </Link>
  );
};
