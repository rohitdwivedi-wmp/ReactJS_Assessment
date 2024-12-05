import React, { useState, useEffect } from 'react'; // Importing React hooks
import { toast } from 'react-toastify'; // Importing toast for notifications
import TaskInput from './TaskInput'; // Component for adding tasks
import TaskList from './TaskList'; // Component for displaying tasks

// ToDoList Component
const ToDoList = () => {
    // State for the filter type ('All', 'Completed', 'Pending')
    const [filter, setFilter] = useState('All'); 

    // State for managing the list of tasks, initialized from localStorage
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks'); // Retrieve tasks from localStorage
        return storedTasks ? JSON.parse(storedTasks) : []; // Parse and return tasks or an empty array if none exist
    });

    // Effect: Save tasks to localStorage whenever the `tasks` state changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Update localStorage with the latest tasks
    }, [tasks]);

    /**
     * Add a new task to the list
     * @param {string} name - The name of the new task
     */
    const addTask = (name) => {
        const newTask = { id: Date.now(), name, completed: false }; // Create a new task object
        setTasks((prevTasks) => [...prevTasks, newTask]); // Append the new task to the current task list
        toast.success("Task Added."); // Show success notification
    };

    /**
     * Toggle the completion status of a task
     * @param {number} id - The ID of the task to toggle
     */
    const toggleComplete = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task // Toggle the completed status
            )
        );
    };

    /**
     * Delete a task from the list
     * @param {number} id - The ID of the task to delete
     */
    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)); // Remove the task from the list
        toast.success("Task Deleted."); // Show success notification
    };

    // Filter tasks based on the selected filter type
    const filteredTasks = tasks.filter((task) => {
        if (filter === 'Completed') return task.completed; // Show only completed tasks
        if (filter === 'Pending') return !task.completed; // Show only pending tasks
        return true; // Show all tasks
    });

    return (
        <div className="container mx-auto p-4 md:p-8 bg-gradient-to-r from-[var(--main-gradient-purple)] via-lime-200 to-[var(--main-gradient-aqua)]">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
                To-Do List 
            </h1>

            {/* Component to add new tasks */}
            <TaskInput onAddTask={addTask} /> 

            {/* Filter Buttons */}
            <div className="flex justify-center space-x-4 mt-4">

                {/* Button for showing all tasks */}
                <button
                    onClick={() => setFilter('All')}
                    className={`px-4 py-2 rounded-md ${
                        filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                >
                    All
                </button>

                {/* Button for showing pending tasks */}
                <button
                    onClick={() => setFilter('Pending')}
                    className={`px-4 py-2 rounded-md ${
                        filter === 'Pending' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                >
                    Pending
                </button>

                {/* Button for showing completed tasks */}
                <button
                    onClick={() => setFilter('Completed')}
                    className={`px-4 py-2 rounded-md ${
                        filter === 'Completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                >
                    Completed
                </button>
            </div>

            {/* Component for displaying the list of tasks */}
            <TaskList
                tasks={filteredTasks} // Pass filtered tasks to the TaskList
                onToggleComplete={toggleComplete} // Handler for toggling completion
                onDeleteTask={deleteTask} // Handler for deleting tasks
            />
        </div>
    );
};

export default ToDoList; // Exporting the ToDoList component
