import UserTable from "../components/UserTable";
import { useGetAllUsersQuery } from "../redux/features/auth/authApi";
import { ISignUpData } from "../types/IUser";

export default function UserManagement() {
  const { data } = useGetAllUsersQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1 className="text-center text-2xl mt-5">Your Booking History</h1>
      <div className="p-5">
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="p-2">User Name</th>
              <th className="p-2">User Role</th>
              <th className="p-2">User Contact Number</th>
              <th className="p-2">Change User Role</th>
              <th className="p-2">Delete User</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data?.data?.map((user: ISignUpData) => (
              <UserTable key={user.id} users={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
