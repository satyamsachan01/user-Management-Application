import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../types";
import UserForm from "../components/UserForm";
import { toast } from "react-toastify";

interface Props {
  users: User[];
  updateUser: (user: User) => void;
}

export default function EditUser({ users, updateUser }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    phone: "",
  });

  // Load user from state instead of API
  useEffect(() => {
    if (!id) return;
    const userToEdit = users.find((u) => u.id === Number(id));
    if (userToEdit) setFormData(userToEdit);
    else toast.error("User not found");
  }, [id, users]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({ ...formData, id: Number(id) }); // Update App state
    toast.success("User updated!");
    navigate("/"); // Redirect to Home
  };

  return (
    <div className="flex justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Edit User
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
