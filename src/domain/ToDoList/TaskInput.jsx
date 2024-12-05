import React, { useState } from 'react';
import { toast } from 'react-toastify';

const TaskInput = ({ onAddTask }) => {
    const [task, setTask] = useState('');

    // Adding Task function
    const handleAdd = () => {
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
        else toast.error('Please Enter something !!')
    };

    return (
        <div className="flex md:flex-row justify-center items-center gap-2">

            {/* Input field for Task */}
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
                className="border rounded-md px-4 py-2 w-full md:w-1/2 max-[767px]:w-2/3"
            />
            <button
                onClick={handleAdd}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 max-[347px]:px-2"
            >
                Add Task
            </button>
        </div>
    );
};

export default TaskInput;
