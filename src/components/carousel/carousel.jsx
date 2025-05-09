import "flowbite";

import { useEffect, useState } from "react";
export const Carousel = () => {
  let [loading, setLoading] = useState(false);
  //   let [data, setData] = useState();
  //   useEffect(() => {
  //     console.log("Im always called on each state/component re-renders");
  //   });
  //   useEffect(() => {
  //     console.log("Im only called when this component is first time mounted");
  //     setTimeout(() => {
  //     //   setData(false);
  //     setLoading(false);
  //     }, 3000);
  //   }, []);
  //   useEffect(() => {
  //     console.log("Im always called when loading state is manipulated");
  //   }, [loading, data]);

  return (
    <>
      {loading ? (
        <>loding</>
      ) : (
        <>
          <div
            id="default-carousel"
            className="relative w-full z-0 "
            data-carousel="slide"
          >
            {/* <!-- Carousel wrapper --> */}
            <div className="relative bg-primary-200 dark:bg-primary-700 h-52 overflow-hidden  md:h-96">
              {/* <!-- Item 1 --> */}

              <div
                className="duration-700  ease-in-out h-full w-full"
                data-carousel-item
              >
                <img
                  src="https://img.lazcdn.com/us/domino/d5bca32c-70ca-4dbd-a8d4-84109f2c70c8_NP-1976-688.jpg"
                  className="absolute  block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* <!-- Item 2 --> */}
              <div
                className="duration-700  ease-in-out h-full w-full"
                data-carousel-item
              >
                <img
                  src="https://img.lazcdn.com/us/domino/95f12368-359d-41fc-b0bd-c2347276e472_NP-1976-688.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* <!-- Item 3 --> */}
              <div
                className="duration-700  ease-in-out h-full w-full"
                data-carousel-item
              >
                <img
                  src="https://img.lazcdn.com/us/domino/52240450-8060-486d-9261-96f735c67e59_NP-1976-688.png_2200x2200q80.png_.webp"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* <!-- Item 4 --> */}
              <div
                className="duration-700  ease-in-out h-full w-full"
                data-carousel-item
              >
                <img
                  src="https://img.lazcdn.com/us/domino/56319016-2a73-4d1c-989d-93952ff4b4aa_NP-1976-688.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* <!-- Item 5 --> */}
              <div
                className="duration-700  ease-in-out h-full w-full"
                data-carousel-item
              >
                <img
                  src="https://img.lazcdn.com/us/domino/223b543d-03a1-46fe-88b6-9207a39a96f4_NP-1976-688.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-primary-800/20 group-hover:bg-white/50 dark:group-hover:bg-primary-800/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-primary-600 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-primary-800/20 group-hover:bg-white/50 dark:group-hover:bg-primary-800/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-primary-600 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </>
      )}
    </>
  );
};
