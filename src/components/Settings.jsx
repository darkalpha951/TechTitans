import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const Settings = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  // Handle profile picture change
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>

      {/* Profile Picture */}
      <div className="flex items-center space-x-4 mb-4">
        <label className="cursor-pointer">
          <input type="file" className="hidden" onChange={handleProfilePicChange} />
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="w-16 h-16 rounded-full border-2 border-gray-300" />
          ) : (
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              Upload
            </div>
          )}
        </label>
        <span className="text-gray-600">Change Profile Picture</span>
      </div>

      {/* Username Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Username</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md mt-1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded-md mt-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-gray-700 font-medium">Dark Mode</span>
        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          className={`${darkMode ? "bg-green-500" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full transition`}
        >
          <span className="sr-only">Enable dark mode</span>
          <span
            className={`${
              darkMode ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>

      {/* Save Button */}
      <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
