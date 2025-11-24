import { User } from "../types";

interface Props {
  formData: User;
  setFormData: (user: User) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function UserForm({ formData, setFormData, handleSubmit }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2 font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
          placeholder="Enter name"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
          placeholder="Enter email"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
          placeholder="Enter phone number"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold"
      >
        Submit
      </button>
    </form>
  );
}
