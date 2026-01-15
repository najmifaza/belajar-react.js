import useCounter from "../hooks/useCounter";

function Counter() {
  const { count, handelDecrement, handelIncrement, handelResetCounter } =
    useCounter();
  return (
    <div className="flex gap-16 justify-around">
      <button
        onClick={handelResetCounter}
        className="inline-flex items-center gap-2 px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fffbfb"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path d="M2.5 2v6h6M21.5 22v-6h-6" />
          <path d="M22 11.5A10 10 0 0 0 3.2 7.2M2 12.5a10 10 0 0 0 18.8 4.2" />
        </svg>
        Reset
      </button>
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
