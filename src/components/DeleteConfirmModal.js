import { useContext } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { TaskContext } from "../context/TaskContext";

const DeleteConfirmModal = () => {
    const { showDeleteModal, setShowDeleteModal, setSelectedTask, deleteTask } =
        useContext(TaskContext);

    const onCancel = () => {
        setSelectedTask(null);
        setShowDeleteModal(false);
    };

    const onDelete = () => {
        deleteTask();
        setShowDeleteModal(false);
    };

    if (showDeleteModal) {
        return (
            <div className="absolute bg-gray-900/40 inset-0 flex justify-center items-center">
                <div className="flex flex-col items-center bg-neutral-50 w-1/2 rounded-md px-2 py-3">
                    <AiOutlineWarning className="text-4xl text-red-700" />
                    <p className="text-sm text-center">
                        Are you sure want to delete this task?
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-sm">
                        <button
                            onClick={onCancel}
                            className="bg-gray-200 rounded-md px-2 hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onDelete}
                            className="bg-red-700 text-neutral-50 rounded-md px-2 hover:bg-red-800"
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export default DeleteConfirmModal;
