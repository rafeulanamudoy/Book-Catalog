// type filterYearProp = {
//   handleFilterYear: (data: string) => void;

import { useAppDispatch } from "../hooks/hook";
import { setYear } from "../redux/features/book/bookSlice";

// };
export default function FilterYear() {
  const dispatch = useAppDispatch();
  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setYear(event.target.value));
  };

  return (
    <div>
      <div className=" inline border-4">
        <select onChange={handleGenreChange}>
          <option>Select Year:</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
      </div>
    </div>
  );
}
