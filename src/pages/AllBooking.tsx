import { useGetAllBookingQuery } from "../redux/features/Booking/bookingApi";
import BookingTable from "../components/BookingTable";
import { IReturnBooking } from "../types/IBooking";

export default function AllBooking() {
  const { data } = useGetAllBookingQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1 className="text-center text-2xl mt-5">Your Booking History</h1>
      <div className="p-5">
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="p-2">Service Name</th>
              <th className="p-2">Booking Status</th>
              <th className="p-2">Update Booking Status</th>
              <th className="p-2">Cancel</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data?.data?.map((booking: IReturnBooking) => (
              <BookingTable key={booking?.id} booking={booking} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
