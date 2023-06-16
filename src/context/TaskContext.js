import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [addTaskInput, setAddTaskInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        const todoTasks = localStorage.getItem("todoListApp");
        if (todoTasks) setTasks(JSON.parse(todoTasks));
    }, []);

    useEffect(() => {
        localStorage.setItem("todoListApp", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        const newTask = {
            id: uuidv4(),
            name: addTaskInput,
            isFinished: false,
        };
        const updatedTasks = [newTask, ...tasks];
        setTasks(updatedTasks);
        setAddTaskInput("");
    };

    const deleteTask = () => {
        const updatedTasks = tasks.filter(
            (task) => task.id !== selectedTask.id
        );
        setTasks(updatedTasks);
    };

    const onEditNameChange = (value) => {
        setSelectedTask((prev) => ({ ...prev, name: value }));
    };

    const saveEditTask = () => {
        const updatedTasks = tasks.map((task) =>
            task.id === selectedTask.id ? selectedTask : task
        );
        setTasks(updatedTasks);
        setSelectedTask(null);
    };

    const finishTask = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, isFinished: !task.isFinished } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                addTaskInput,
                setAddTaskInput,
                addTask,
                deleteTask,
                finishTask,
                onEditNameChange,
                saveEditTask,
                showDeleteModal,
                setShowDeleteModal,
                selectedTask,
                setSelectedTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
