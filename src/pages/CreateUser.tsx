import { useState } from "react";
import { toast } from "react-toastify";
import { User } from "../types";
import UserForm from "../components/UserForm";
import { API } from "../api";
import { useNavigate } from "react-router-dom";

interface Props {
  addUser: (user: User) => void;
}

export default function CreateUser({ addUser }: Props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post("/", formData); // JSONPlaceholder simulated create
      toast.success("User created (simulated)!");
      addUser({ ...res.data, id: Date.now() }); // Add temporary id for UI
      navigate("/"); // Redirect to Home
    } catch (error) {
      toast.error("Failed to create user");
    }
  };

  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Create User
        </h2>
        <UserForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
