import React from "react";
import Userdata from "../../data/userdata";

const Profile = () => {
  const user = Userdata[0];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fdfbfe] text-[#3a3a3a]">
      {/* Profile Info */}
      <div className="w-[90%] max-w-3xl mx-auto py-12">
        <div className="flex items-center gap-8">
          <img
            src={user.avatar}
            alt={user.fullName}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-[#bc46c2]"
          />
          <div>
            <h1 className="text-[2.4rem] font-bold text-[#bc46c2]">
              {user.fullName}
            </h1>
            <p className="text-[1.6rem] text-gray-700">{user.email}</p>
            <p className="text-[1.4rem] text-gray-500">
              Joined: {user.joinedDate}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 text-center bg-[#bc46c2] text-white text-[1.4rem] mt-10">
        © {new Date().getFullYear()} Your App Name. All rights reserved.
      </footer>
    </div>
  );
};

export default Profile;
