import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { TaskContext } from "../context/TaskContext";

const AddTaskInput = () => {
    const { addTaskInput, setAddTaskInput, addTask } = useContext(TaskContext);
    return (
        <div className="flex items-center gap-1 h-[30px]">
            <input
                type="text"
                placeholder="Add your task here ..."
                value={addTaskInput}
                onChange={(e) => setAddTaskInput(e.target.value)}
                className="h-full appearance-none bg-transparent border border-gray-400 rounded-md py-1 px-3 focus:outline-none"
            />
            <button
                onClick={addTask}
                className="border rounded-md bg-gray-400 p-[4px] hover:bg-gray-500"
            >
                <FiPlus className="text-white text-xl" />
            </button>
        </div>
    );
};

export default AddTaskInput;
