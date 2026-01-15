import { useState } from "react"; // use adalah hook di dalam react

function Counter() {
  const [count, setCount] = useState(0); //index pertama adalah variabel dan yang kedua adalah funct
  //   const [nama, setNama] = useState("Najmi");
  const handelDecrement = () => {
    setCount(count - 1);
    // setNama("Adri");
  };
  const handelIncrement = () => {
    setCount(count + 1);
    // setNama("Faza");
  };

  return (
    <div className="flex gap-16 justify-around">
      <button
        onClick={handelDecrement}
        className="inline-flex items-center gap-2 px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-200"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Kurang
      </button>
      <h1 className="font-bold">{count}</h1>
      {/* <h1 className="font-bold">{nama}</h1> */}
      <button
        onClick={handelIncrement}
        className="inline-flex items-center gap-2 px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-200"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Tambah
      </button>
    </div>
  );
}

export default Counter;
