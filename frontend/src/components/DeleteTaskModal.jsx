import Modal from "./Modal";

function DeleteTaskModal({ isOpen, onClose, task, onDelete }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Task">
      <p className="mb-4">
        Are you sure you want to delete <b>{task?.title}</b>?
      </p>

      <div className="flex gap-2">
        <button
          onClick={onClose}
          className="flex-1 border py-2 rounded"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            onDelete(task.id);
            onClose();
          }}
          className="flex-1 bg-red-500 text-white py-2 rounded"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}

export default DeleteTaskModal;
