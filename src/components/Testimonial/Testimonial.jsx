import { Slide } from "react-awesome-reveal";

const Testimonial = () => {
  return (
    <section className="container  mt-24">
      <div>
        <Slide direction="down" duration={1300}>
          <h1 className="text-[clamp(28px,6vw,50px)] font-bold font-rancho leading-none text-center max-w-[500px] mx-auto">
            What Our Visitors Say
          </h1>
        </Slide>
        <Slide direction="up" duration={1300}>
          <p className="text-center max-w-2xl mx-auto mt-4">
            Discover what fellow travelers have to say about their experiences
            with us. From memorable adventures to seamless bookings
          </p>
        </Slide>
      </div>
      {/* container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <div className="flex flex-col  mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-blue-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-default-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              I&apos;ve used tourism websites in the past, but compare to this
              one. I highly recommend this site to anyone looking to plan their
              next adventure.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-default-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-default-600 ">
            <img
              src="https://i.postimg.cc/8c85W5TY/photo-1513956589380-bad6acb9b9d4.jpg"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500"
            />
            <p className="text-xl font-semibold leading-tight mt-3">John D.</p>
            <div className="rating mt-4">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col  mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-blue-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-default-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              As a frequent traveler, I&apos;m lookout for reliable resources to
              help me plan my trips. This website exceeded all my expectations.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-default-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-default-600 ">
            <img
              src="https://i.postimg.cc/9F86Nk7m/photo-1515027037286-7da2d06130cf.jpg"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 "
            />
            <p className="text-xl font-semibold leading-tight mt-3">Sarah J.</p>
            <div className="rating mt-4">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </div>
        </div>
        <div className="flex flex-col  mx-4 my-6 shadow-lg">
          <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-blue-50">
            <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-8 h-8 text-default-600"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              I was initially hesitant to book through an online tourism
              website, but this site came highly recommended by a friend.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute right-0 w-8 h-8 text-default-600"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-8 rounded-b-lg ">
            <img
              src="https://i.postimg.cc/sgBgn71L/photo-1517202383675-eb0a6e27775f.jpg"
              alt=""
              className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500"
            />
            <p className="text-xl font-semibold leading-tight mt-3">Ahmed M</p>
            <div className="rating mt-4">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input type="radio" name="rating-1" className="mask mask-star" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
