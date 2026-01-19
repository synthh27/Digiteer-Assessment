const ActionButton = ({task, onEdit, onDelete}) => {
  return(
    <div className='flex flex-row gap-3'>
      {onEdit && (
        <button onClick={() => onEdit(task)}>✏️</button>
      )}
      {onDelete && (
        <button onClick={() => onDelete(task)}>🗑</button>
      )}
    </div>
  );
}

export default ActionButton;