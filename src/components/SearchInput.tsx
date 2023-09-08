import { useRef } from "react";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current) {
      setSearchText(ref.current.value);
      ref.current.value = "";
      navigate("/");
    }
  };
  return (
    <form
      action=""
      className=" px-4 py-2 rounded-full bg-white w-1/2"
      onSubmit={handleSubmit}
    >
      <input
        ref={ref}
        type="text"
        placeholder="Search games..."
        className="bg-transparent focus:outline-none w-full"
      />
    </form>
  );
};
export default SearchInput;
