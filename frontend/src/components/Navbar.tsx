import { Link } from "react-router-dom";
import dashboardIcon from "../assets/images/dashboardIcon.png";
import mapIcon from "../assets/images/mapIcon.png";
import avatarIcon from "../assets/images/avatarIcon.png";
import bellIcon from "../assets/images/bellIcon.png";
import messagesIcon from "../assets/images/messagesIcon.png";
import { ROUTES } from "../constants/routes";

const Navbar = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      {/* Add left margin on desktop to account for sidebar */}
      <nav className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 py-4 gap-4 lg:ml-[239px]">
        {/* Page Title - Left aligned on desktop, centered on mobile */}
        <h1 className="text-xl font-semibold text-gray-900 order-1 lg:order-1 w-full lg:w-auto text-center lg:text-left">
          Home
        </h1>

        {/* Navigation Tabs - Centered on desktop, full width on mobile */}
        <div className="flex justify-center items-center order-3 lg:order-2 w-full lg:w-auto lg:flex-1">
          <div className="flex space-x-1 border border-gray-300 justify-between items-center rounded-full bg-[#F2F2F2] p-1 w-full max-w-[280px] lg:max-w-[262px]">
            <Link
              to={`/${ROUTES.dashboard}`}
              className="flex items-center px-3 py-2 lg:py-1 rounded-full text-gray-500 hover:text-black hover:bg-white space-x-2 text-sm lg:text-base flex-1 justify-center transition-colors"
            >
              <img
                src={dashboardIcon}
                alt="Dashboard Icon"
                className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] flex-shrink-0"
              />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/map"
              className="flex items-center px-3 py-2 lg:py-1 rounded-full text-gray-500 hover:text-black hover:bg-white space-x-2 text-sm lg:text-base flex-1 justify-center transition-colors"
            >
              <img 
                src={mapIcon} 
                alt="Map Icon" 
                className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] flex-shrink-0" 
              />
              <span>Map View</span>
            </Link>
          </div>
        </div>

        {/* User Info and Icons - Right aligned on desktop, centered on mobile */}
        <div className="flex items-center justify-center space-x-3 lg:justify-end order-2 lg:order-3 w-full lg:w-auto">
          <div className="flex items-center space-x-2 lg:space-x-3">
            <img
              src={avatarIcon}
              alt="Profile Avatar"
              className="w-6 h-6 lg:w-8 lg:h-8 rounded-full flex-shrink-0"
            />
            <div className="text-center lg:text-left">
              <p className="font-semibold text-sm lg:text-base">Jane Doe</p>
              <p className="text-xs lg:text-sm text-gray-500 hidden sm:block">
                jane.doe@gmail.com
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="relative">
              <img
                src={bellIcon}
                alt="bell Icon"
                className="w-6 h-6 lg:w-8 lg:h-8 rounded-full"
              />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>

            <img
              src={messagesIcon}
              alt="messages Icon"
              className="w-6 h-6 lg:w-8 lg:h-8 rounded-full"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;