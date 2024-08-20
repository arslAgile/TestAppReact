import image from "../assets/bg.jpg";
export default function Hero({ changeDisplayTable, handleShowTable }) {
  const showForm = () => {
    changeDisplayTable(true);
    handleShowTable(false);
    setTimeout(() => {
      document
        .getElementById("forms-section")
        .scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const showTable = () => {
    changeDisplayTable(false);
    handleShowTable(true);
    setTimeout(() => {
      document
        .getElementById("table-section")
        .scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  return (
    <section className="h-screen ">
       <img src={image} className="h-screen w-screen opacity-80 object-cover" alt="" />
      <div className="h-screen absolute flex top-0">
        <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
          <div className="lg:w-2/3 w-full">
            <h1 className="md:text-6xl text-3xl mb-2 font-bold text-white">
              Hello, I'm John.
            </h1>
            <h1 className="md:text-6xl text-3xl mb-4 font-bold text-white">
              I'm here to assist with your questions.
            </h1>
            <p className="mt-8 mb-16 text-white text-xl">
              I am a Web developer. I'm here to provide information and answer
              your queries to the best of my abilities.
            </p>
            <button
              id="cursor"
              onClick={showForm}
              className="uppercase cursor-pointer ease-in duration-300 transition border hover:bg-transparent rounded-sm bg-blue-400 font-bold text-white px-8 py-4 mx-auto mr-4 md:inline"
            >
              Add Record
            </button>
            <button
              onClick={showTable}
              className="uppercase rounded-sm transition ease-in duration-300 border bg-green-400 hover:bg-transparent  font-bold text-white px-8 py-4 mx-auto md:inline"
            >
              View Record
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
