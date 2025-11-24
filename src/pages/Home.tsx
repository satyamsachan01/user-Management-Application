import UserList from "../components/UserList";
import SkeletonUserList from "../components/SkeletonUserList";
import { User } from "../types";

interface Props {
  users: User[];
  loading: boolean;
  deleteUser: (id: number) => void;
}

export default function Home({ users, loading, deleteUser }: Props) {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        User List
      </h2>

      <div className="w-full">
        {loading ? (
          <SkeletonUserList />
        ) : (
          <UserList users={users} deleteUser={deleteUser} />
        )}
      </div>
    </div>
  );
}
