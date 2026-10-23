import { useState } from "react";
import Todo from "./routes/todo/todo";
import Footer from "./components/Footer";
import Home from "./routes/home/home";
// import { IoIosArrowRoundBack } from "react-icons/io";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import About from "./routes/about/About";
import { useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("todos");

    return JSON.parse(storedTasks) || [];
  });
  // const [showApp, setShowApp] = useState(false);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main className="flex flex-col min-h-screen w-screen ">
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route
          path={"/todo"}
          element={<Todo tasks={tasks} setTasks={setTasks} />}
        />

        <Route path={"/about"} element={<About />} />
      </Routes>
      <Footer tasks={tasks} />
    </main>
  );
}

export default App;
