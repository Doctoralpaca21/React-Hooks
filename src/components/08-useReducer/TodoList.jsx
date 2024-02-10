import { TodoListItem } from "./TodoListItem"

export const TodoList = ({ todos, handleToggle, handleDeleteTodo }) => {
    return (
        <ul className='max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400 mt-5'>
            {
                todos.map((curr, id) => (
                    <TodoListItem
                        key={curr.id}
                        todo={curr}
                        id={id}
                        handleToggle={handleToggle}
                        handleDeleteTodo={handleDeleteTodo}
                    />
                ))
            }
        </ul>
    )
}