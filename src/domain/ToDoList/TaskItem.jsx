import React from 'react';

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => (
    <li className={`sm:flex justify-between items-center p-4 border-b last:border-none bg-white rounded-md shadow-md mb-4 ${task.completed? 'bg-zinc-100' : ''}`}>
        <span
            className={`flex-grow break-all ${
                task.completed ? 'line-through text-gray-500' : 'text-gray-900'
            }`}
        >
            {task.name}
        </span>
        <div className='mt-2 flex justify-end ml-2'>
            <button
                onClick={() => onToggleComplete(task.id)}
                className={`bg-${task.completed ? 'yellow' : 'green'}-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-${task.completed ? 'yellow' : 'green'}-600`}
            >
                {task.completed ? 'Undo' : 'Complete'}
            </button>

            <button
                onClick={() => onDeleteTask(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
                Delete
            </button>
        </div>
    </li>
);

export default TaskItem;
