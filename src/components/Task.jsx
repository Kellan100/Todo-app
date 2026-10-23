import { useState } from "react";
import { FaCalendar, FaPencilAlt, FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Task({ task, setTasks }) {
    // Task completion Handler 
    const[onEdit  ,  setOnEdit] = useState(false)
    const[formInput  ,  setFormInput] = useState("")
   
    const editTaskHandler = (e) => {
      e.preventDefault();

      if(!formInput) return;

      setTasks((tasks) =>
      tasks.map((tas) =>
      tas.id == task.id ? {...tas,  title: formInput} : tas,
    ))

    setOnEdit(false)
    setFormInput("")
    }

    const deleteTaskHandler = () => {
        setTasks((tasks) => {
          let prevTasks = [...tasks];

          let taskIndex = prevTasks.findIndex((tas) => tas.id == task.id)

          prevTasks.splice(taskIndex , 1);

          return prevTasks
        });
    };
    

  const taskComplitionHandler = () => {
    setTasks((tasks) =>
      //  Map through each task 
       tasks.map((tas) => 
        // where id matches, set completed - true 
        tas.id == task.id ? {...tas, completed : true }: tas,
  ),
);
  };

  

  return (
    <>
      <div
        className={`${task.completed ? "bg-gray-200" : "bg-white"}  shadow-2xl p-5 rounded-lg grid grid-cols-12 gap-2 justify-between"`}
      >
        <div className="col-span-11 flex justify-between">
          <div className="flex gap-4 items-center">
            {task.completed ? (
              <input type="radio" defaultChecked className="scale-150" />
            ) : (
              <input type="radio" className="scale-150" onChange = {() => taskComplitionHandler()}/>
            )}

            <div>
              {/* <p className={`${task.completed ? "line-through" : " "}`}></p> */}

                {onEdit ? (
                  <form onSubmit={(e) => editTaskHandler(e)}>
                    <div className="flex gap-2">
                      <input
                      value={formInput}
                       type="text"
                       className="focus:outline-0 w-full border border-black p-1 rounded"
                       onChange={(e) => setFormInput(e.target.value)}
                       placeholder={task.title} />

                       <button className="bg-green-400 px-3 p-1 rounded">submit</button>
                    </div>
                  </form>
                ) : (
                  task.title
                )}
                
              
              <p className="flex items-center gap-2 text-black/60">
                <FaCalendar /> {task.createdAt.toLocaleString().slice(0, 10).replaceAll("/", "-")}
              </p>
            </div>
          </div>

          <div>
            <p
              className={`${task.completed ? "text-green-950 bg-green-400" : "text-red-950 bg-red-400"} capitalize py-1 px-3 rounded-full text-sm`}
            >
              {task.completed ? "completed" : "pending"}
            </p>
          </div>
        </div>

        <div className="col-span-1 h-full flex justify-center">
          <div className="mt-auto flex gap-8">
            <button className="active:scale-90"
            onClick={() =>!task.completed && setOnEdit((i) => !i)}>

              {onEdit ? (
                <IoMdClose className="text-red-700 text-2xl"/>
              ) : (
                <FaPencilAlt className="text-blue-700" />
              )}
              
            </button>

            <button className="active:scale-90" onClick={() => deleteTaskHandler()}>
              <FaTrash className="text-red-700" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
