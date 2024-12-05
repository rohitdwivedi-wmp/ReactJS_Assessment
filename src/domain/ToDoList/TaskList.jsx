import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => (
    <ul className="mt-6">
        {tasks.map((task) => (
            // Showing All the tasks
            <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onDeleteTask={onDeleteTask}
            />
        ))}
    </ul>
);

export default TaskList;
