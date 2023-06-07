const Search = () => {
  return (
    <div className="flex items-center gap-2 col-span-3 lg:col-span-1">
      <input
        className="focus:outline-none p-2 border-gray border-2 w-full"
        type="text"
        placeholder="Search here..."
      />
      <button className="bg-primary p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-light-100 font-bold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};
export default Search;
