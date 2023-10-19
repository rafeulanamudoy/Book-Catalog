import { useGetBookByIdQuery } from "../redux/features/Booking/bookingApi";
import { useAppSelector } from "../hooks/hook";
import { useGetUserByEmailQuery } from "../redux/features/auth/authApi";
import { IReturnBooking } from "../types/IBooking";
import BookingTable from "../components/BookingTable";

export default function BookingHistory() {
  const { email } = useAppSelector((state) => state.auth.user);

  const { data } = useGetUserByEmailQuery(email);

  const { data: bookingData } = useGetBookByIdQuery(data?.data?.id);

  // console.log(data);
  return (
    <div>
      <h1 className="text-center text-2xl mt-5">Your Booking History</h1>
      <div className="p-5">
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="p-2">Service Name</th>
              <th className="p-2">Booking Status</th>
              <th className="p-2">Cancel</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {bookingData?.data?.map((booking: IReturnBooking) => (
              <BookingTable key={booking.id} booking={booking} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
