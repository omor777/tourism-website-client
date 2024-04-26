import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import API_URL from "../../utils/api";
import Swal from "sweetalert2";
import { useRef } from "react";

const AddTouristSpot = () => {
  const formRef = useRef(null)
  const { user } = useAuth();

  const form = useForm();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const handleAddTouristSpot = (data) => {
    const {
      username,
      email,
      tourist_spot_name,
      country_name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      total_visitors_per_year,
      photo_url,
    } = data;

    const newTouristSpot = {
      username,
      email,
      tourist_spot_name,
      country_name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      total_visitors_per_year,
      photo_url,
    };

    console.log("New tourist spot", newTouristSpot);

    // add tourist spot to the database
    fetch(`${API_URL}/tourist_spots`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
         if(data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Your tourist spot has been added",
            icon: "success"
          });

          // resent form
          formRef.current.reset()
         }
      });
  };

  return (
    <div className="container">
      <form ref={formRef}
        onSubmit={handleSubmit(handleAddTouristSpot)}
        className="border border-blue-200 p-8 lg:py-12 lg:px-16 rounded space-y-6"
      >
           <h1 className="text-5xl font-rancho text-center font-bold mb-12">
              Add Tourist Spot
            </h1>
        {/* row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              username
            </label>
            <input
              className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
              id="name"
              type="text"
              placeholder="username"
              {...register("username")}
            />
          </div>
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
              id="email"
              type="email"
              placeholder="email"
              {...register("email")}
            />
          </div>
        </div>

        {/* row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="tourist_spot_name"
            >
              tourist spot name
            </label>
            <input
              className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
              id="tourist_spot_name"
              type="text"
              placeholder="tourist spot name"
              {...register("tourist_spot_name")}
            />
          </div>
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="country_name"
            >
              country name
            </label>
            <input
              className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
              id="country_name"
              type="text"
              placeholder="country name"
              {...register("country_name")}
            />
          </div>
        </div>
        {/* row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location"
            >
              location
            </label>
            <input
              className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
              id="location"
              type="text"
              placeholder="location"
              {...register("location")}
            />
          </div>
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="short_description"
            >
              short description
            </label>
            <input
              className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
              id="short_description"
              type="text"
              placeholder="short description"
              {...register("short_description")}
            />
          </div>
        </div>
        {/* row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="average_cost"
            >
              average cost
            </label>
            <input
              className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
              id="average_cost"
              type="text"
              placeholder="average cost"
              {...register("average_cost")}
            />
          </div>
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="seasonality"
            >
              seasonality
            </label>
            <input
              className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
              id="seasonality"
              type="text"
              placeholder="seasonality"
              {...register("seasonality")}
            />
          </div>
        </div>

        {/* row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="travel_time"
            >
              travel time
            </label>
            <input
              className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize "
              id="travel_time"
              type="text"
              placeholder="travel time"
              {...register("travel_time")}
            />
          </div>
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="total_visitors_per_year"
            >
              total visitors per year
            </label>
            <input
              className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
              id="total_visitors_per_year"
              type="text"
              placeholder="total visitors per year"
              {...register("total_visitors_per_year")}
            />
          </div>
        </div>
        {/* row */}
        <div>
          <div className="w-full">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="photo_url"
            >
              photo url
            </label>
            <input
              className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize "
              id="photo_url"
              type="url"
              placeholder="photo url"
              {...register("photo_url")}
            />
          </div>
        </div>


        <button className="py-3 w-full rounded-md bg-primary-main text-white text-center  font-semibold uppercase relative hover:bg-primary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45">
          Add
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default AddTouristSpot;
