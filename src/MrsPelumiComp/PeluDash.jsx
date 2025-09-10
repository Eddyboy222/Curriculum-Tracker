import React, { useState } from "react";
import { Link } from "react-router-dom";

function AzeezDash() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full fixed top-0 bg-white shadow-sm px-5 md:px-9 py-3 z-50">
        <div className="flex md:flex-row md:items-center justify-between md:gap-0 gap-4">
          {/* Logo + Title */}
          <div className="flex md:flex-row items-center text-left md:text-left gap-2">
            <img
              src="https://res.cloudinary.com/dafafyxbh/image/upload/v1757292711/Petforde_vhxm5n.png"
              alt="Petforde logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="font-bold md:text-2xl text-xl">
                Curriculum Tracker
              </h1>
              <h2 className="font-light text-sm md:text-base">
                Instructor Dashboard
              </h2>
            </div>
          </div>

          {/* Desktop view */}
          <div className="hidden md:flex flex-row items-center gap-4 text-right">
            <div>
              <h1 className="font-semibold text-lg">Mr Azeez</h1>
              <h2 className="font-light text-base">Instructor</h2>
            </div>
            <Link to="/">
              <button className="bg-gray-200 w-20 h-10 rounded-lg cursor-pointer font-semibold text-base">
                Logout
              </button>
            </Link>
          </div>

          {/* Mobile view */}
          <div className="md:hidden relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-gray-200 w-20 h-10 rounded-lg cursor-pointer font-semibold text-sm"
            >
              Menu
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col p-3">
                <div className="text-left mb-2">
                  <h1 className="font-semibold text-base">Mrs Pelumi</h1>
                  <h2 className="font-light text-sm">Instructor</h2>
                </div>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <button className="w-full bg-gray-200 py-2 rounded-lg cursor-pointer font-semibold text-sm">
                    Logout
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default AzeezDash;

