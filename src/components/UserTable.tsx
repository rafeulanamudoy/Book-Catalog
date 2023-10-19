import toast from "react-hot-toast";
import {
  useDeleteuserMutation,
  useUpdateUserMutation,
} from "../redux/features/auth/authApi";
import { UserCartProps } from "../types/IUser";

export default function UserTable({ users }: UserCartProps) {
  console.log(users);
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteuserMutation();
  const handleUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const userId = users?.id;
    const updateData = {
      role: e?.target?.value,
    };

    updateUser({ userId, updateData })
      .unwrap()
      .then((payload) => {
        toast.success(payload?.message);

        console.log(payload);

        console.log(payload);
      })
      .catch((error) => {
        console.log(error, "catch");

        toast.error(error?.data?.message);
      });
  };
  const handleDelete = async () => {
    const id = users?.id;
    const confirm = window.confirm("are your sure you want to delete");
    if (id && confirm) {
      await deleteUser(id)
        .unwrap()
        .then(() => {
          toast.success("deleted successfully");
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };
  return (
    <tr>
      <td className="p-2">{users?.firstName?.concat(" ", users?.lastName)}</td>
      <td className="p-2">{users?.role}</td>
      <td className="p-2">{users?.contactNumber}</td>

      <td className="p-2">
        {" "}
        <select onChange={handleUpdate} className=" text-black">
          <option value="">Choose</option>
          <option value="customer">customer</option>
          <option value="admin">admin</option>
          <option value="superAdmin">superAdmin</option>
        </select>
      </td>
      <td className="p-2">
        <button
          onClick={handleDelete}
          className="bg-red-700 w-28 h-10 rounded-lg text-white text-xs"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
