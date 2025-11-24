import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import { useState, useEffect } from "react";
import { User } from "./types";
import { API } from "./api";
import { toast } from "react-toastify";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial users once
  useEffect(() => {
    API.get("/")
      .then((res) => setUsers(res.data))
      .catch(() => toast.error("Failed to fetch users"))
      .finally(() => setLoading(false));
  }, []);

  // Add user to central state
  const addUser = (user: User) => {
    // Assign a fake ID since JSONPlaceholder does not persist
    const newUser = { ...user, id: users.length + 1000 }; 
    setUsers((prev) => [...prev, newUser]);
  };

  // Update user in central state
  const updateUser = (updatedUser: User) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
  };

  // Delete user in central state
  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route
            path="/"
            element={<Home users={users} loading={loading} deleteUser={deleteUser} />}
          />
          <Route
            path="/create"
            element={<CreateUser addUser={addUser} />}
          />
          <Route
  path="/edit/:id"
  element={<EditUser users={users} updateUser={updateUser} />}
/>

        </Routes>
      </div>
    </>
  );
}
