import { Link, useLocation } from "react-router-dom";
import overviewIcon from "../assets/images/overviewIcon.png";
import homeIcon from "../assets/images/homeIcon.png";
import mapIconIcon from "../assets/images/mapIcon.png";
import SettingsIcon from "../assets/images/settingsIcon.png";
import LogOutIcon from "../assets/images/logOutIcon.png";
import { ROUTES } from "../constants/routes";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-[239px] bg-[#FFFFFF] h-screen text-sm p-4 fixed left-0 top-0 overflow-y-auto">
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
              />
              <NavLink
                to="overview"
                icon={overviewIcon}
                label="Overview"
                active={isActive(`/dashboard/overview`)}
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
          />
          <NavLink
            to="/login"
            icon={LogOutIcon}
            label="Logout"
            active={false}
          />
        </div>
      </nav>
    </aside>
  );
};

type NavLinkProps = {
  to: string;
  icon: string;
  label: string;
  active: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ to, icon, label, active }) => {
  return (
    <Link
      to={to}
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

export default Sidebar;