export default function Form({ username, userage, gender, handleFormsData, handleFormSubmit, resetForm }) {
  return (
    <div id="forms-section" className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl">Fill up the form</h1>
          </div>

          <form onSubmit={handleFormSubmit}>
            <input
              required
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={username}
              placeholder="Name"
              name="person"
              onChange={handleFormsData}
            />

            <input
              required
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Age"
              name="age"
              onChange={handleFormsData}
              value={userage}
            />
            <div className="mt-3">
              <p>Choose Your Gender</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div>
                <input required
                  className="shadow mb-4 border text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="radio"
                  value="Male"
                  onChange={handleFormsData}
                  name="gender"
                  checked={gender === "Male"}
                />
                :Male
              </div>
              <div>
                <input required
                  className="shadow mb-4 border text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="radio"
                  value="Female"
                  name="gender"
                  onChange={handleFormsData}
                  checked={gender === "Female"}
                />
                :Female
              </div>
              <div>
                <input required
                  className="shadow mb-4 border text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="radio"
                  value="Other"
                  name="gender"
                  onChange={handleFormsData}
                  checked={gender === "Other"}
                />
                :Other
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
              <button onClick={resetForm}
                type="reset"
                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
