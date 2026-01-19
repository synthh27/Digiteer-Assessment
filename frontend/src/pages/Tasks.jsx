import { useState } from "react";
import ActionButton from "../components/ActionButtons.jsx";
import CreateTaskModal from "../components/CreateTaskModal.jsx";
import UpdateTaskModal from "../components/UpdateTaskModall.jsx";
import DeleteTaskModal from "../components/DeleteTaskModal.jsx";

// DUMMY DATA (use consistent casing)
const dummyData = [
  { id: 1, title: "Study JWT", isDone: true },
  { id: 2, title: "Fix BE Methods", isDone: true },
  { id: 3, title: "Add Protected Routes", isDone: false },
  { id: 4, title: "Create Missing Screens", isDone: false },
  { id: 5, title: "Create NavBar", isDone: true },
  { id: 6, title: "Connect API", isDone: false },
  { id: 7, title: "Submit Assessment", isDone: false },
];

function Tasks() {
  const [tasks, setTasks] = useState(dummyData);
  const [selectedTask, setSelectedTask] = useState(null);
  const notDoneTasks = tasks.filter(task => !task.isDone);
  const doneTasks = tasks.filter(task => task.isDone);

  // MODAL STATES
  const [showCreate, setShowCreate] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // HANDLER FUNCTIONS
  const addTask = (task) => setTasks([...tasks, task]);

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(t => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const doneTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <section className='w-3/5 flex flex-col justify-center self-center bg-gray-900 px-8 py-4 rounded-lg '>
      <CreateTaskModal
        isOpen={showCreate}
        onClose={() => setShowCreate(false)}
        onCreate={addTask}
      />

      <UpdateTaskModal
        isOpen={showUpdate}
        onClose={() => setShowUpdate(false)}
        task={selectedTask}
        onUpdate={updateTask}
      />

      <DeleteTaskModal
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        task={selectedTask}
        onDelete={deleteTask}
      />
      <div className='flex flex-row py-2 mb-5  justify-between align-center'>
        <h1 className='text-2xl uppercase font-bold'>
          Tasks list
        </h1>
        <button className='cursor-pointer' onClick={() => setShowCreate(true)}>➕ New</button>
      </div>
      <div className=' text-left divide-y divide-gray-600'>
        {/* NOT DONE TASKS */}
        <ul className='py-4'>
          {notDoneTasks.map(task => (
            <li key={task.id}
                className='flex flex-row justify-between'>
              <div>
                <input type="checkbox" className='mx-2 cursor-pointer' onClick={()=>doneTask(task.id)} />
                {task.title}
              </div>
              <ActionButton
                task={task}
                onEdit={(task) => {
                  setSelectedTask(task);
                  setShowUpdate(true);
                }}
                onDelete={(task) => {
                  setSelectedTask(task);
                  setShowDelete(true);
                }}
              />
            </li>
          ))}
        </ul>
        {/* DONE TASKS */}
        <ul className='py-4'>
          {doneTasks.map(task => (
            <li key={task.id}
                className='flex flex-row justify-between text-gray-500'>
              <div>
                <input type="checkbox" className='mx-2 cursor-pointer' disabled/>
                {task.title}
              </div>
              <ActionButton
                task={task}
                onDelete={(task) => {
                  setSelectedTask(task);
                  setShowDelete(true);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Tasks;
