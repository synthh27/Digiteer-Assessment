import { useState, useEffect } from "react";
import Modal from "./Modal";

function UpdateTaskModal({ isOpen, onClose, task, onUpdate }) {
  const [title, setTitle] = useState(task?.title || "");

  useEffect(() => {
    setTitle(task?.title || "");
  }, [task]);

  const handleUpdate = () => {
    onUpdate({ ...task, title });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Update Task">
      <h3 className="my-1 text-md text-left font-bold">Title</h3>
      <input
        className="w-full border p-2 rounded mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={handleUpdate}
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Update
      </button>
    </Modal>
  );
}

export default UpdateTaskModal;