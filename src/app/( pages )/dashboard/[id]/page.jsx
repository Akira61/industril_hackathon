"use client";
import SearchBar from "@/app/components/searchBar";
import axios from "axios";
import { useState } from "react";
import { Pices } from "./pices";
export default function Gear() {

  const [searchedItem, setSearchedItem] = useState();
  const [searchResult, setSearchResult] = useState(Pices);
  // fetch data from DB
  const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });
//   getData();
//   async function getData() {
//     const { data } = await api.get("/posts");
//     console.log(data);
//     setSearchedItem(data);
//     setSearchResult(data);
//     return data;
//   }

  //   if element clicked save to DB
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
          <SearchBar pices={Pices} setSearchResult={setSearchResult}/>

          <div className="grid grid-cols-2 md:grid-cols-4 py-14 pr-5 gap-4 ">
            {searchResult.map((post,i)=> (
                <a
                href="#"
                className="w-full sm:w-auto  hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  dark:hover:bg-gray-200 dark:focus:ring-gray-700"
                key={i}
                onClick={() => saveGear()}
              >
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={post.image}
                    alt=""
                  />
                  <p className="mt-2 text-center text-gray-500 sm:text-lg dark:text-gray-400">
                    {post.title}
                  </p>
                  {/* <span className="mt-2 text-center text-gray-500 sm:text-lg dark:text-gray-400">{post.id}</span> */}
                </div>
              </a>
            ))}

            {/* <div>
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
            </div> */}
          </div>
        </li>
      </ul>
    </>
  );
}
