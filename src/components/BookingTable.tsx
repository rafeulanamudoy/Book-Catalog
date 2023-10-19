import toast from "react-hot-toast";
import {
  useDeleteBookingByIdMutation,
  useUpdateBookingMutation,
} from "../redux/features/Booking/bookingApi";
import { BookingCartProps } from "../types/IBooking";
import { useAppSelector } from "../hooks/hook";

export default function BookingTable({ booking }: BookingCartProps) {
  const { role } = useAppSelector((state) => state.auth.user);
  const id = booking?.id;
  const [deleteBooking] = useDeleteBookingByIdMutation();

  const [updateBooking] = useUpdateBookingMutation();

  const handleDelete = async () => {
    const confirm = window.confirm("are your sure you want to delete");
    if (id && confirm) {
      await deleteBooking(id)
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
    }
  };

  const handleUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const bookingId = booking?.id;
    const updateData = {
      bookingStatus: e?.target?.value,
    };
    updateBooking({ bookingId, updateData })
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
  return (
    <tr>
      <td className="p-2">{booking?.serviceType?.name}</td>
      <td className="p-2">{booking?.bookingStatus}</td>
      <td className="p-2">
        {(role === "superAdmin" || role === "admin") && (
          <select
            id="availabilityFilter"
            onChange={handleUpdate}
            className=" text-black"
          >
            <option value="">Choose</option>
            <option value="pending">Pending</option>
            <option value="shipped">shipped</option>
            <option value="delivered">delivered</option>
          </select>
        )}
      </td>

      <td className="p-2">
        <button
          onClick={handleDelete}
          className="bg-red-700 w-28 h-10 rounded-lg text-white text-xs"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
}
