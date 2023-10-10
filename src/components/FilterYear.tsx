// type filterYearProp = {
//   handleFilterYear: (data: string) => void;

import { useAppDispatch } from "../hooks/hook";
import { setYear } from "../redux/features/book/bookFilterSlice";

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
          <option>1990</option>
          <option>1989</option>
          <option>1988</option>
          <option>1987</option>
          <option>1986</option>
        </select>
      </div>
    </div>
  );
}
