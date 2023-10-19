import { useState } from "react";
import { IProductFilter } from "../types/IService";
import { useAppDispatch } from "../hooks/hook";
import { setFilter } from "../redux/features/service/serviceSlice";
import { useGetCategoriesQuery } from "../redux/features/category/categoryApi";
import { ICategory } from "../types/ICategory";

const ProductFilterModal = ({ isOpen, onClose }: IProductFilter) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState("");

  const { data, isLoading } = useGetCategoriesQuery(undefined);
  console.log(data);
  //console.log(isOpen);
  const dispatch = useAppDispatch();
  const handleApply = () => {
    const filters = {
      filters: {
        minPrice,

        maxPrice,
        category,
        serviceStatus: availability,
      },
    };
    dispatch(setFilter(filters));
    onClose(), console.log("form productFilterModal", filters);
  };

  let categoryOptions;

  if (isLoading || !data) {
    categoryOptions = <option value="">Loading categories...</option>;
  } else {
    // If data is available, map over the categories and generate options
    categoryOptions = (
      <>
        <option>choose</option>
        {data?.data?.map((category: ICategory) => (
          <option key={category.id} value={category.title}>
            {category.title}
          </option>
        ))}
      </>
    );
  }
  return (
    <div
      className={` z-10 fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Filter Products</h2>

        {/* Price Filter */}
        <div className="mb-4">
          <label
            htmlFor="minPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Min Price:
          </label>
          <input
            type="number"
            id="minPrice"
            min="0"
            max={maxPrice - 1}
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="w-full"
          />
          <label
            htmlFor="maxPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Max Price:
          </label>
          <input
            type="number"
            id="maxPrice"
            min={minPrice + 1}
            max="10000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-gray-700 text-sm font-medium">
            Price Range: ${minPrice} - ${maxPrice}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <label
            htmlFor="categoryFilter"
            className="block text-sm font-medium text-gray-700"
          >
            Category:
          </label>
          <select
            id="categoryFilter"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full"
          >
            {categoryOptions}
          </select>
        </div>

        {/* Product Availability Filter */}
        <div className="mb-4">
          <label
            htmlFor="availabilityFilter"
            className="block text-sm font-medium text-gray-700"
          >
            Product Availability:
          </label>
          <select
            id="availabilityFilter"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full"
          >
            <option value="">choose</option>
            <option value="available">Available</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleApply}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Apply
          </button>
          <button
            onClick={onClose}
            className="bg-gray-400 text-gray-800 ml-2 px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterModal;
