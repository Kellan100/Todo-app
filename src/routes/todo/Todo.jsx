import Task from "../../components/Task"
import AddTaskForm from "../../components/AddTaskForm"
// import Footer from "../../components/Footer"
function Todo({tasks , setTasks}) {
  return (
    <>
      <section className="p-5 md:px-20 bg-gray-300 w-screen min-h-[calc(100vh-10rem)]">
          <div className="flex flex-col gap-5">
            <AddTaskForm tasks={tasks} setTasks={setTasks} />

            {tasks.length == 0 ? (
              <p className="mx-auto mt-[15%]">Add a Task</p>
            ) : (tasks.map((task, index) => (
              <Task key={index} task={task} setTasks = {setTasks}/>
            )))}
          </div>
        </section>

        {/* <Footer tasks={tasks}/> */}
    </>
  )
}

export default Todo
