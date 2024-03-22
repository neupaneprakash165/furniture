import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProducts() {
  const { id } = useParams();
  const [data, setData] = useState({
    id: id,
    name: "",
    price: "",
    description: "",
    file_path: "",
    
  });
     useEffect(() => {
          axios
               .get("http://127.0.0.1:8000/api/product/" + id)
               .then((res) => {
                    setData({
                         ...data,
                         name: res.data.name,
                         price: res.data.price,
                         description: res.data.description,
                         file_path: res.data.file_path,
                    });
               })
               .catch((err) => console.log(err));
     }, []);
     
     const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://127.0.0.1:8000/api/update/" + id, data)
      .then((res) => {
             navigate("/productlist");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
    <div>
      <div>
        <div class="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
          <div class="w-full px-16 py-20 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
            <div class="mb-4">
              <h1 class="font-serif text-3xl font-bold text-center underline decoration-gray-400">
                Update Programs
              </h1>
              </div>
              <div>
                <label
                  class="block text-sm font-bold text-gray-700"
                  for="title"
                >
                  Name
                </label>

                <input
                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  name="name"
                  placeholder="180"
                  // defaultValue={state.name}
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div>
                <label
                  class="block text-sm font-bold text-gray-700"
                  for="price"
                >
                  Price
                </label>

                <input
                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  name="price"
                  placeholder="180"
                  // defaultValue={state.price}
                  value={data.price}
                  onChange={(e) => setData({ ...data, price: e.target.value })}
                />
              </div>
{/* <!-- Description --> */}
<div class="mt-4">
                <label
                  class="block text-sm font-bold text-gray-700"
                  for="password"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="4"
                  placeholder="400"
                  value={data.description}
                  // defaultValue={state.description}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                ></textarea>
              </div>
{/* file_path */}
<div>
                <label
                  class="block text-sm font-bold text-gray-700"
                  for="file_path"
                >
                  file_path
                </label>

                <input
                  class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="file"
                  name="file_path"
                  placeholder="180"
                  value={data.file_path}
                //   defaultValue={state.file_path}
                //   onChange={(e) => setData({ ...data, file_path: e.target.value })}
                >
                  
                </input>
              </div>
{/* Button */}
<div class="flex items-center justify-start mt-4 gap-x-2">
                <button
                  type="submit"
                  class="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                  onClick={handleSubmit}
                >
                  Save
                </button>
                <button
                  type="submit"
                  class="px-6 py-2 text-sm font-semibold text-gray-100 bg-gray-400 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                  //    onClick={navigateDefault}
                >
                  Cancel
                </button>
              </div>
            </div>
            {/* ) : (<p>Loading...</p>)} */}
          </div>
      </div>
    </div>
    </>
  );
}

export default EditProducts;