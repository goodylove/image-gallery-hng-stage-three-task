import toast from "react-hot-toast";
import { AiOutlineSearch } from "react-icons/ai";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";

function NavBar({ value, handleSearch }) {
  const [toggleSearchContainer, setToggleSearchContainer] = useState(false);
  const { handleLogOut } = useAuth();
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await handleLogOut();
      toast.success("Successfully signed out");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex justify-between bg-white text-black p-3 mb-44 items-center fixed top-0 w-full">
      <h2 className=" font-serif font-[700]">Image Gallery</h2>

      {toggleSearchContainer && (
        <div className="flex justify-center absolute top-20 right-9  search">
          <input
            type="search"
            value={value}
            onChange={(e) => handleSearch(e)}
            placeholder="search"
            className="p-1  outline-none text-black "
          />
          <button className="bg-black text-white p-2 rounded-r">
            <AiOutlineSearch />
          </button>
        </div>
      )}
      <div className="flex justify-center gap-3 items-center cursor-pointer">
        <AiOutlineSearch
          onClick={() => setToggleSearchContainer((prev) => !prev)}
        />
        <button
          className="bg-purple-500 p-2 text-white rounded "
          onClick={logOut}
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
