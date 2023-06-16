import React, { useState, useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit, AiOutlineSave } from "react-icons/ai";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
    const { id, name, isFinished } = task;
    const {
        selectedTask,
        finishTask,
        onEditNameChange,
        saveEditTask,
        setShowDeleteModal,
        setSelectedTask,
    } = useContext(TaskContext);
    const [isEditing, setIsEditing] = useState(false);

    const onEdit = () => {
        setIsEditing(true);
        setSelectedTask(task);
    };

    const onSave = () => {
        saveEditTask();
        setIsEditing(false);
    };

    const onDelete = () => {
        setSelectedTask(task);
        setShowDeleteModal(true);
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
                {isEditing && selectedTask ? (
                    <input
                        type="text"
                        className="w-4/5 md:w-3/4 lg:w-1/2 appearance-none bg-gray-50 rounded-md py-1 px-3 focus:outline-none"
                        value={selectedTask.name}
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
            <div className="flex items-center gap-2 text-xl ml-4">
                {isEditing ? (
                    <button onClick={onSave}>
                        <AiOutlineSave className="text-blue-800" />
                    </button>
                ) : (
                    <React.Fragment>
                        {!isFinished && (
                            <button onClick={onEdit}>
                                <AiOutlineEdit className="text-blue-800" />
                            </button>
                        )}
                        <button onClick={onDelete}>
                            <MdDeleteOutline className="text-red-700" />
                        </button>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default TaskCard;
