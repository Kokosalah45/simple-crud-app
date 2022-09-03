import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { useProductStore } from "../stores";
import { useDeleteProductData } from "../hooks";

const Product = ({ name, price, description }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    currentProduct: { name: productName },
    selectProduct,
  } = useProductStore((state) => state);
  const { mutate: deleteProduct } = useDeleteProductData();
  const handleClick = () => {
    selectProduct({ name, price, description });
  };
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    handleClick();
    deleteProduct({ name });
  };
  return (
    <li
      className={`p-4 rounded-md bg-white flex flex-col gap-2 cursor-pointer ${
        productName === name ? "bg-slate-600 " : "hover:bg-gray-300 "
      } `}
      onClick={handleClick}
    >
      <div className="flex">
        <div className="flex-1 ">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p> Price : {price}</p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
          }}
          className={`w-10 flex justify-center hover:bg-black hover:text-white items-center rounded-lg mr-2`}
        >
          <BsFillCaretDownFill
            className={`transition-transform ${
              isDropdownOpen && "rotate-180"
            } `}
          />
        </button>
        <button
          className={`bg-red-600 p-2 rounded-md hover:bg-red-700  ${
            productName === name ? "block" : "hidden"
          }`}
          onClick={handleDeleteClick}
        >
          <AiFillDelete />
        </button>
      </div>
      <div
        className={`bg-pink-500 rounded-md overflow-hidden transition-all px-3 flex flex-col justify-center ease-out shadow-inner-lg ${
          isDropdownOpen ? "min-h-[5rem] " : "min-h-0 h-0"
        }`}
      >
        <h4 className="font-semibold">Description:</h4>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default Product;
