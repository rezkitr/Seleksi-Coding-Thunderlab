import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [addTaskInput, setAddTaskInput] = useState("");
    const [editedTask, setEditedTask] = useState(null);
    const [tasks, setTasks] = useState([]);

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

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const editTask = (id) => {
        const task = tasks.find((task) => task.id === id);
        setEditedTask(task);
    };

    const onEditNameChange = (value) => {
        setEditedTask((prev) => ({ ...prev, name: value }));
    };

    const saveEditTask = () => {
        const updatedTasks = tasks.map((task) =>
            task.id === editedTask.id ? editedTask : task
        );
        setTasks(updatedTasks);
        setEditedTask(null);
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
                editedTask,
                addTaskInput,
                setAddTaskInput,
                addTask,
                deleteTask,
                finishTask,
                editTask,
                onEditNameChange,
                saveEditTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
