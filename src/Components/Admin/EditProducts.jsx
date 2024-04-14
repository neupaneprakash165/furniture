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
    file_path: null,
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/product/${id}`)
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
  }, [id]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("file_path", data.file_path);

    try {
      await axios.put(`http://127.0.0.1:8000/api/update/${id}`, formData);
      navigate("/productlist");
    } catch (err) {
      console.log(err);
      // Handle error, show message to the user, etc.
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
          <div className="w-full px-16 py-20 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
            <div className="mb-4">
              <h1 className="font-serif text-3xl font-bold text-center underline decoration-gray-400">
                Update Programs
              </h1>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700" htmlFor="title">
                Name
              </label>
              <input
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="text"
                name="name"
                placeholder="180"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700" htmlFor="price">
                Price
              </label>
              <input
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="text"
                name="price"
                placeholder="180"
                value={data.price}
                onChange={handleChange}
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-bold text-gray-700" htmlFor="password">
                Description
              </label>
              <textarea
                name="description"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="4"
                placeholder="400"
                value={data.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700" htmlFor="file_path">
                File Path
              </label>
              <input
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                type="file"
                name="file_path"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-start mt-4 gap-x-2">
              <button
                type="submit"
                className="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
              >
                Save
              </button>
              <button
                type="button"
                className="px-6 py-2 text-sm font-semibold text-gray-100 bg-gray-400 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                onClick={() => navigate("")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProducts;
