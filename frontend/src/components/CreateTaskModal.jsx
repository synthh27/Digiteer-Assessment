import { useState } from "react";
import Modal from "./Modal";

function CreateTaskModal({ isOpen, onClose, onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    onCreate({
      id: Date.now(),
      title,
      isdone: false,
    });
    setTitle("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Task">
      <input
        className="w-full border p-2 rounded mb-4"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-green-500 text-white py-2 rounded cursor-pointer"
      >
        Create
      </button>
    </Modal>
  );
}

export default CreateTaskModal;