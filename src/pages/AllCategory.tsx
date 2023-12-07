import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetCategoriesQuery } from "../redux/features/category/categoryApi";
import { ICategory } from "../types/ICategory";
import { faPenNib, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function AllCategory() {
  const { data } = useGetCategoriesQuery(undefined);

  return (
    <div>
      <h1 className="text-center text-4xl">All Categories</h1>
      <div className="p-5">
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="">Category Name</th>
              <th className="">Update</th>

              <th className="">Cancel</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {data?.data?.map((category: ICategory) => (
              <tr>
                <td>{category.title}</td>
                <td className=" text-yellow-500">
                  <FontAwesomeIcon icon={faPenNib} />
                </td>
                <td>
                  <FontAwesomeIcon className="text-red-500" icon={faTrash} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
