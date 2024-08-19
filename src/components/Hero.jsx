export default function Hero({changeDisplayTable, handleShowTable }) {
  const showForm = () => {
    changeDisplayTable(true);
    handleShowTable(false)
    setTimeout(() => { document.getElementById('forms-section').scrollIntoView({ behavior: 'smooth' }); }, 100);
  }

  const showTable = () => {
    changeDisplayTable(false);
    handleShowTable(true)
    setTimeout(() => { document.getElementById('table-section').scrollIntoView({ behavior: 'smooth' }); }, 100);
  }
  return (
    <section className="text-gray-600 body-font h-screen flex bg-gray-900 bg-svg-constellation-gray-100 relative">
      <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
        <div className="lg:w-2/3 w-full animate-fade-in-down">
          <h1 className="md:text-6xl text-3xl mb-2 font-bold text-white tracking-tight leading-tight">
            Hello, I'm John.
          </h1>
          <h1 className="md:text-6xl text-3xl mb-4 font-bold text-white tracking-tight leading-tight">
            I’m here to assist
            <span className="border-b-4 border-green-400 -mb-20"></span>with
            your questions.
          </h1>
          <p className="mt-8 mb-16 md:leading-relaxed leading-normal text-white tracking-tight text-xl">
            I am a Web developer. I'm here to provide information and answer
            your queries to the best of my abilities.
          </p>
          <button onClick={showForm}
            className="uppercase rounded-sm bg-red-400 font-bold text-white px-8 py-4 mx-auto mr-4 md:inline"
          >
            Add Record
          </button>
          <button onClick={showTable}
            className="uppercase rounded-sm bg-green-400 font-bold text-white px-8 py-4 mx-auto md:inline"
          >
             View Record
          </button>
        </div>
      </div>
    </section>
  );
}
