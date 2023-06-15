import React, { useState, useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit, AiOutlineSave } from "react-icons/ai";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
    const { id, name, isFinished } = task;
    const {
        editedTask,
        deleteTask,
        finishTask,
        editTask,
        onEditNameChange,
        saveEditTask,
    } = useContext(TaskContext);
    const [isEditing, setIsEditing] = useState(false);

    const onEdit = () => {
        setIsEditing(true);
        editTask(id);
    };

    const onSave = () => {
        saveEditTask();
        setIsEditing(false);
    };

    return (
        <div
            className={`flex justify-between items-center ${
                isFinished ? "bg-gray-200" : "bg-yellow-200"
            } rounded-md mb-2 p-3`}
        >
            <div className="flex flex-1 items-center gap-2">
                <input
                    type="checkbox"
                    checked={isFinished}
                    disabled={isEditing}
                    onChange={() => finishTask(id)}
                    className="leading-none"
                />
                {isEditing && editedTask ? (
                    <input
                        type="text"
                        className="w-4/5 md:w-3/4 lg:w-1/2 appearance-none bg-gray-50 rounded-md py-1 px-3 focus:outline-none"
                        value={editedTask.name}
                        onChange={(e) => onEditNameChange(e.target.value)}
                    />
                ) : (
                    <p
                        className={`text-lg ${
                            task.isFinished ? "line-through" : ""
                        }`}
                    >
                        {name}
                    </p>
                )}
            </div>
            {!isFinished && (
                <div className="flex items-center gap-2 text-lg ml-4">
                    {isEditing ? (
                        <button onClick={onSave}>
                            <AiOutlineSave className="text-blue-800" />
                        </button>
                    ) : (
                        <React.Fragment>
                            <button onClick={onEdit}>
                                <AiOutlineEdit className="text-blue-800" />
                            </button>
                            <button onClick={() => deleteTask(task.id)}>
                                <MdDeleteOutline className="text-red-900" />
                            </button>
                        </React.Fragment>
                    )}
                </div>
            )}
        </div>
    );
};

export default TaskCard;
