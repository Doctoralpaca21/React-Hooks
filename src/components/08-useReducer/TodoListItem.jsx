export const TodoListItem = ({ todo, id, handleToggle, handleDeleteTodo }) => {
    return (
        <li
            className='flex justify-between space-x-4 border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50'
        >
            <p className={`cursor-pointer m-2 ${todo.done ? 'line-through' : ''}`} onClick={() => handleToggle(todo.id)}>
                {id + 1}. {todo.desc}
            </p>
            <button
                className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
                onClick={() => handleDeleteTodo(todo.id)}
            >
                Delete
            </button>
        </li>
    )
}