// type filterDataProps = {
//   handleFilterData: (data: string) => void;

import { useAppDispatch } from "../hooks/hook";
import { setGenre } from "../redux/features/book/bookSlice";

// };
export default function FilterMenu() {
  const dispatch = useAppDispatch();
  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenre(event.target.value));
  };

  return (
    <div>
      <div className=" inline border-4">
        <select onChange={handleGenreChange}>
          <option>Select Genre:</option>
          <option>Fiction</option>
          <option>Fantasy</option>
          <option>Novel</option>
          <option>Mystry</option>
        </select>
      </div>
    </div>
  );
}
