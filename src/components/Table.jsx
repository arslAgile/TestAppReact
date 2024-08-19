import { TiEdit } from "react-icons/ti";
import { MdDeleteSweep } from "react-icons/md";
export default function Table({
  data,
  handleDeletePerson,
  changeEditPerson,
  handleDisplayTable,
  handleTable,
}) {
  const showForm = () => {
    handleDisplayTable(true);
    handleTable(false);
  };
  return (
    <div
      id="table-section"
      className="shadow-lg overflow-hidden min-h-screen py-6 flex flex-col justify-center sm:py-12"
    >
      {data.length > 0 && (
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Name
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Age
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Gender
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data?.map((item, index) => (
              <tr key={index}>
                <td className="py-4 px-6 border-b border-gray-200">
                  {item.person}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  {item.age}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  {item.gender}
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <TiEdit
                      className="cursor-pointer text-2xl text-green-800 mr-4"
                      onClick={() => changeEditPerson(index)}
                    />
                    <MdDeleteSweep
                      className="cursor-pointer text-2xl text-red-600"
                      onClick={() => handleDeletePerson(index)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="text-center mt-6">
        <button
          onClick={showForm}
          className="uppercase rounded-sm bg-green-500 font-bold text-white px-8 py-4 mx-auto mr-4 md:inline"
        >
          Add Record
        </button>
      </div>
    </div>
  );
}
