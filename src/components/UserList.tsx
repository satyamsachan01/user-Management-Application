import { User } from "../types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../api";

interface Props {
  users: User[];
  deleteUser: (id: number) => void;
}

export default function UserList({ users, deleteUser }: Props) {
  const handleDelete = async (id: number) => {
    try {
      await API.delete(`/${id}`);
      deleteUser(id);
      toast.success("User deleted successfully!");
    } catch {
      toast.error("Failed to delete user");
    }
  };

  return (
    <div className="w-full overflow-x-auto sm:overflow-x-hidden">
      <table className="min-w-full border border-gray-300 rounded-lg shadow-sm table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-3 py-2 border text-left">Name</th>
            <th className="px-3 py-2 border text-left">Email</th>
            <th className="px-3 py-2 border text-left">Phone</th>
            <th className="px-3 py-2 border text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-3 py-2 border break-words">{user.name}</td>
                <td className="px-3 py-2 border break-words">{user.email}</td>
                <td className="px-3 py-2 border break-words">{user.phone}</td>
                <td className="px-3 py-2 border flex flex-wrap gap-2">
                  <Link
                    to={`/edit/${user.id}`}
                    className="px-3 py-1 bg-blue-600 text-white rounded-full text-center hover:bg-blue-700 transition text-sm"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id!)}
                    className="px-3 py-1 bg-red-600 text-white rounded-full text-center hover:bg-red-700 transition text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4 text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
