import Sidebar from "./components/Sidebar";

const Profile = () => {
  return (
    <main className="w-[95%] mx-auto py-4 flex gap-4">
      <Sidebar />
      <div className="flex-1 py-4 min-h-[60vh]"></div>
    </main>
  );
};

export default Profile;
