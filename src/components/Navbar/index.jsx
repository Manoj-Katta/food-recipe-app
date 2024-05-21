import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context";

export default function Navbar() {
  const navigate = useNavigate();
  
  function homePage() {
    navigate("/");
  }
  
  function favoritesPage() {
    navigate("/favorites");
  }

  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);
  console.log(searchParam);

  return (
    <nav className="flex justify-between px-20 py-10 items-center bg-white">
      <h1 className="text-xl text-gray-800 font-bold cursor-pointer" onClick={homePage}>
        Food - Recipe
      </h1>
      <div className="flex items-center">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 pt-0.5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="ml-5 outline-none bg-transparent"
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            aria-label="Search"
          />
        </div>
        <button className="ml-4 p-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>
          Submit
        </button>
        <ul className="flex items-center space-x-6 ml-6">
          <li className="font-semibold text-gray-700 cursor-pointer" onClick={homePage}>
            Home
          </li>
          <li className="font-semibold text-gray-700 cursor-pointer" onClick={favoritesPage}>
            Favorites
          </li>
        </ul>
      </div>
    </nav>
  );
}
