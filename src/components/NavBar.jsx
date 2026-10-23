import { NavLink } from "react-router";

function NavBar() {
  return (
    <>
      <header className="bg-green-950 h-20">
        <div className="h-full w-full flex justify-between items-center px-12  text-white">
          <h1 className="text-2xl capitalize">✅ Todo App</h1>

          <ul className="flex gap-8">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/todo"}>Todo</NavLink>
              </li>
              <li>
              <NavLink to={"/about"}>About</NavLink>
              </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default NavBar;
