import React, { useContext } from "react";
import { TbConfetti } from "react-icons/tb";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

const TaskList = () => {
    const { tasks } = useContext(TaskContext);
    return (
        <React.Fragment>
            {tasks && !!tasks.length ? (
                <div className="flex-1 mt-4 overflow-y-auto">
                    {tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col flex-1 justify-center items-center gap-3">
                    <TbConfetti className="text-6xl text-yellow-400" />
                    <p className="text-gray-400 text-sm text-center">
                        You don't have any task to do
                    </p>
                </div>
            )}
        </React.Fragment>
    );
};

export default TaskList;
