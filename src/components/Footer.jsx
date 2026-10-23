import { useLocation } from "react-router";
function Footer({tasks}) {

  const location = useLocation().pathname
  return (
    <>
      <footer className="mt-auto bg-green-950 h-20">
        {location == "/todo" ? (<div className="h-full w-full flex items-center justify-between capitalize text-white text-base p-5">
          <p>total: {tasks.length}</p>

          <div className="flex gap-5">
            <p className="relative pl-4 before:h-2 before:w-2 before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-green-400 before:rounded-full">
              {tasks.filter((i) => i.completed).length} completed
            </p>

            <p className="relative pl-4 before:h-2 before:w-2 before:absolute before:left-0 before:top-[50%] before:transform before:translate-y-[-50%] before:bg-red-400 before:rounded-full">
              {tasks.filter((i) => !i.completed).length} pending
            </p>
          </div>
        </div>) : (
          <footer className="bg-emerald-950/80 border-t border-emerald-900/60 px-6 py-4 text-center text-sm text-emerald-200/80 backdrop-blur-sm">
      <p>Todo App &copy; {new Date().getFullYear()} — All rights reserved.</p>
    </footer>
        )}
      </footer> 
    </>
  );
}

export default Footer;
