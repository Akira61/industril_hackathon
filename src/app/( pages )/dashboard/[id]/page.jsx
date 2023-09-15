"use client";
export default function Gear() {
  function saveGear() {}
  return (
    <>
      <ul className="flex items-center justify-between gap-[40vw] bg-white">
        <li>
          <div
            style={{ fontWeight: "600", fontSize: "40px" }}
            // className=" absolute"
            className=" w-[500%] pl-10"
          >
            <img
              src="/wholeGear.png"
              alt=""
              className="hover:scale-125 transition duration-500 cursor-pointer"
            />
          </div>
        </li>
        <li>
          <form>
            {/* Start search input */}
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative my-5 mx-10 w-[50%]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-gray-400 dark:focus:border-gray-400"
                placeholder="Search Mockups, Logos..."
                required=""
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
            {/* end search input */}

            {/* Sort gears */}
            <div className="sort mx-10">
              <ul className="items-center w-[35%] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-400">
                  <div className="flex items-center pl-3">
                    <input
                      id="vue-checkbox-list"
                      type="checkbox"
                      defaultValue=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="vue-checkbox-list"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                    >
                      Completed
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                  <div className="flex items-center pl-3 ">
                    <input
                      id="react-checkbox-list"
                      type="checkbox"
                      defaultValue=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="react-checkbox-list"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:border-none"
                    >
                      Uncompleted
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            {/* End sorting */}
            <p className="w-full mx-5 sm:w-auto  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-gray-500 rounded-lg inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-200 dark:focus:ring-gray-700">
              03 out of 52
            </p>
          </form>

          <div className="grid grid-cols-2 md:grid-cols-4 py-14 pr-5 gap-4 ">
            <a
              href="#"
              className="w-full sm:w-auto  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-200 dark:focus:ring-gray-700"
              onClick={() => saveGear()}
            >
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/gearImg.png"
                  alt=""
                />
                <p className="mt-2 text-center text-gray-500 sm:text-lg dark:text-gray-400">
                  NPL01
                </p>
              </div>
            </a>
            <a
              href="#"
              className="w-full sm:w-auto  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-200 dark:focus:ring-gray-700"
            >
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/gearImg.png"
                  alt=""
                />
                <p className="mt-2 text-center text-gray-500 sm:text-lg dark:text-gray-400">
                  NPL01
                </p>
              </div>
            </a>
            <a
              href="#"
              className="w-full sm:w-auto  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-200 dark:focus:ring-gray-700"
            >
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/gearImg.png"
                  alt=""
                />
                <p className="mt-2 text-center text-gray-500 sm:text-lg dark:text-gray-400">
                  NPL01
                </p>
              </div>
            </a>
            <a
              href="#"
              className="w-full sm:w-auto  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-200 dark:focus:ring-gray-700"
            >
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/gearImg.png"
                  alt=""
                />
                <p className="mt-2 text-center text-gray-500 sm:text-lg dark:text-gray-400">
                  NPL01
                </p>
              </div>
            </a>
            <a
              href="#"
              className="w-full sm:w-auto  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-200 dark:focus:ring-gray-700"
            >
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/gearImg.png"
                  alt=""
                />
                <p className="mt-2 text-center text-gray-500 sm:text-lg dark:text-gray-400">
                  NPL01
                </p>
              </div>
            </a>
            <a
              href="#"
              className="w-full sm:w-auto  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-200 dark:focus:ring-gray-700"
            >
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/gearImg.png"
                  alt=""
                />
                <p className="mt-2 text-center text-gray-500 sm:text-lg dark:text-gray-400">
                  NPL01
                </p>
              </div>
            </a>
            <a
              href="#"
              className="w-full sm:w-auto  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-200 dark:focus:ring-gray-700"
            >
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/gearImg.png"
                  alt=""
                />
                <p className="mt-2 text-center text-gray-500 sm:text-lg dark:text-gray-400">
                  NPL01
                </p>
              </div>
            </a>
            <a
              href="#"
              className="w-full sm:w-auto  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-200 dark:focus:ring-gray-700"
            >
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/gearImg.png"
                  alt=""
                />
                <p className="mt-2 text-center text-gray-500 sm:text-lg dark:text-gray-400">
                  NPL01
                </p>
              </div>
            </a>
            <a
              href="#"
              className="w-full sm:w-auto  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-200 dark:focus:ring-gray-700"
            >
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/gearImg.png"
                  alt=""
                />
                <p className="mt-2 text-center text-gray-500 sm:text-lg dark:text-gray-400">
                  NPL01
                </p>
              </div>
            </a>
            <a
              href="#"
              className="w-full sm:w-auto  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-200 dark:focus:ring-gray-700"
            >
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/gearImg.png"
                  alt=""
                />
                <p className="mt-2 text-center text-gray-500 sm:text-lg dark:text-gray-400">
                  NPL01
                </p>
              </div>
            </a>

            <div
              id="template"
              className="w-full sm:w-auto  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-200 dark:focus:ring-gray-700"
            >
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/gearImg.png"
                  alt=""
                />
                <p className="mt-2 text-center text-gray-500 sm:text-lg dark:text-gray-400">
                  NPL01
                </p>
              </div>
            </div>

            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
                alt=""
              />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
