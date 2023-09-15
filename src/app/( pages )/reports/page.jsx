import Sidebar_ from "@/app/components/Sidebar";

export default function Reports() {
  return (
    <>
      <div style={{ backgroundImage: "url(/background-pixles.svg)" }} className="text-white p-4 sm:ml-64">
        <Sidebar_ />
        <div className="header">
          <h1
            style={{ fontWeight: "600", fontSize: "48px" }}
            className=" py-10 px-10"
          >
            Reports
          </h1>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Work order NO.
                </th>
                <th scope="col" className="px-6 py-3">
                  Operation discrrption
                </th>
                <th scope="col" className="px-6 py-3">
                  Machine code
                </th>
                <th scope="col" className="px-6 py-3">
                  Good QTY
                </th>
                <th scope="col" className="px-6 py-3">
                  Down time
                </th>
                <th scope="col" className="px-6 py-3">
                  Required hours
                </th>
                <th scope="col" className="px-6 py-3">
                  Scrap QTY
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">True</td>
                <td className="px-6 py-4">
                  5
                </td>
                <td className="px-6 py-4">
                  5
                </td>
                <td className="px-6 py-4">
                  5
                </td>
              </tr>
              <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4">True</td>
                <td className="px-6 py-4">
                  6
                </td>
                <td className="px-6 py-4">
                  18
                </td>
                <td className="px-6 py-4">
                  4
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  3
                </th>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">False</td>
                <td className="px-6 py-4">
                  9
                </td>
                <td className="px-6 py-4">
                  7
                </td>
                <td className="px-6 py-4">
                  8
                </td>
              </tr>
              <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  4
                </th>
                <td className="px-6 py-4">7</td>
                <td className="px-6 py-4">8</td>
                <td className="px-6 py-4">True</td>
                <td className="px-6 py-4">
                  3
                </td>
                <td className="px-6 py-4">
                  6
                </td>
                <td className="px-6 py-4">
                  4
                </td>
              </tr>
              <tr>
              <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  5
                </th>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4">4</td>
                <td className="px-6 py-4">False</td>
                <td className="px-6 py-4">
                  2
                </td>
                <td className="px-6 py-4">
                  2
                </td>
                <td className="px-6 py-4">
                  4
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
