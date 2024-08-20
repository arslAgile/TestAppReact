import { TiEdit } from "react-icons/ti";
import { MdDeleteSweep } from "react-icons/md";
export default function Table({
  data,
  handleDeletePerson,
  changeEditPerson,
  handleDisplayTable,
  handleShowTable,
}) {
  const showForm = () => {
    handleDisplayTable(true);
    handleShowTable(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      id="table-section"
      className="shadow-lg overflow-hidden min-h-screen py-6 flex flex-col  items-center justify-center sm:py-12"
    >
      <div className="flex items-center justify-center w-[50%]">
        <div class="w-full">
          {data.length > 0 && (
            <table class="w-full text-sm text-left border border-collapse">
              <thead class="text-black text-center">
                <tr>
                  <th class="py-3 px-4 border border-gray-300">Name</th>
                  <th class="py-3 px-4 border border-gray-300">Age</th>
                  <th class="py-3 px-4 border border-gray-300">Gender</th>
                  <th class="py-3 px-4 border border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data?.map((item, index) => (
                  <tr key={index} className="bg-white border">
                    <td className="px-4 py-3 border text-base text-black text-center border-gray-300">
                      {item.person}
                    </td>
                    <td className="px-4 py-3 border text-base text-black text-center border-gray-300">
                      {item.age}
                    </td>
                    <td className="px-4 py-3 border text-base text-black text-center border-gray-300">
                      {item.gender}
                    </td>
                    <td className="px-4 py-3 border border-gray-300">
                      <div className="flex items-center justify-center">
                        <TiEdit
                          className="cursor-pointer text-2xl text-green-300"
                          onClick={() => changeEditPerson(index)}
                        />
                        <MdDeleteSweep
                          className="cursor-pointer text-2xl text-red-400"
                          onClick={() => handleDeletePerson(index)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="flex justify-around w-[40%] mt-8">
        <div className="text-center">
          <button
            onClick={showForm}
            className="rounded-sm bg-blue-400 font-bold text-white px-2 py-2 md:inline"
          >
            Add Record
          </button>
        </div>
        <div>
          <button
            onClick={scrollToTop}
            className="rounded-sm bg-green-400 font-bold text-white px-2 py-2 md:inline"
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
}
