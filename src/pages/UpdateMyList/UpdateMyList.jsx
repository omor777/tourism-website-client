import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import API_URL from "../../utils/api";

const UpdateMyList = () => {
  const touristSpot = useLoaderData();

  const {
    _id,
    tourist_spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    total_visitors_per_year,
    photo_url,
  } = touristSpot || {};

  const handleUpdateTouristSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const tourist_spot_name = form.tourist_spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = Number(form.average_cost.value);
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const total_visitors_per_year = form.total_visitors_per_year.value;
    const photo_url = form.photo_url.value;

    const updateSpot = {
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

    fetch(`${API_URL}/update_tourist_spot/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Your tourist spot has been updated!",
            icon: "success",
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="container min-h-[calc(100vh-632px)] mt-40">
      <div className="w-full">
        <form
          onSubmit={handleUpdateTouristSpot}
          className="border border-blue-200 p-8 lg:py-12 lg:px-16 rounded space-y-6"
        >
          <h1 className="text-[clamp(25px,5vw,50px)] font-rancho text-center font-bold mb-12 tracking-wide">
            Update Tourist Spot
          </h1>

          {/* row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="w-full">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="tourist_spot_name"
              >
                tourist spot name
              </label>
              <input
                className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
                id="tourist_spot_name"
                type="text"
                placeholder="tourist spot name"
                name="tourist_spot_name"
                defaultValue={tourist_spot_name}
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="country_name"
              >
                country name
              </label>
              <select
                defaultValue={country_name}
                className=" block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
                name="country_name"
                id="country_name"
              >
                <option value="Bangladesh">Bangladesh</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Cambodia">Cambodia</option>
              </select>
            </div>
          </div>
          {/* row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="w-full">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="location"
              >
                location
              </label>
              <input
                className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
                id="location"
                type="text"
                placeholder="location"
                name="location"
                defaultValue={location}
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="short_description"
              >
                short description
              </label>
              <input
                className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
                id="short_description"
                type="text"
                placeholder="short description"
                name="short_description"
                defaultValue={short_description}
              />
            </div>
          </div>
          {/* row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="w-full">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="average_cost"
              >
                average cost
              </label>
              <input
                className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
                id="average_cost"
                type="text"
                placeholder="average cost"
                name="average_cost"
                defaultValue={average_cost}
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="seasonality"
              >
                seasonality
              </label>
              <select
                defaultValue={seasonality}
                className=" block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
                name="seasonality"
                id="seasonality"
              >
                <option value="Winter">Winter</option>
                <option value="Summer">Summer</option>
              </select>
            </div>
          </div>

          {/* row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="w-full">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="travel_time"
              >
                travel time
              </label>
              <select
                defaultValue={travel_time}
                className=" block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
                name="travel_time"
                id="travel_time"
              >
                <option value="1-3">1-3 Days</option>
                <option value="4-7">4-7 Days</option>
                <option value="8-11">8-11 Days</option>
                <option value="12-15">12-15 Days</option>
                <option value="16-20">16-20</option>
              </select>
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="total_visitors_per_year"
              >
                total visitors per year
              </label>
              <input
                className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize"
                id="total_visitors_per_year"
                type="text"
                placeholder="total visitors per year"
                name="total_visitors_per_year"
                defaultValue={total_visitors_per_year}
              />
            </div>
          </div>
          {/* row */}
          <div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="photo_url"
              >
                photo url
              </label>
              <input
                className="appearance-none block w-full bg-blue-50 text-gray-700 border border-blue-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary-main placeholder:capitalize "
                id="photo_url"
                type="url"
                placeholder="photo url"
                name="photo_url"
                defaultValue={photo_url}
              />
            </div>
          </div>

          <button className="py-3 w-full rounded-md bg-primary-main text-white text-center  font-semibold uppercase relative hover:bg-primary-dark  overflow-hidden transition-all duration-500  before:absolute before:w-full before:h-[40%] before:bg-white before:top-3 before:left-0 before:-translate-x-full before:rotate-45 before:transition-all before:duration-500 hover:before:translate-x-full hover:before:rotate-45">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateMyList;
