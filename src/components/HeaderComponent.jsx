import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-amber-100 flex flex-col justify-center items-center p-[20px]">
      <h2 className="text-[20px] mb-[30px]">Notes App</h2>
      <nav>
        <ul className="flex">
          <li className="mr-[50px]">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
