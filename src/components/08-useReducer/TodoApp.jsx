import { useEffect, useReducer } from 'react'
import './todoApp.css'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {
    return JSON.parse(localStorage.getItem('todo')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: "Learning React",
    //     done: false
    // }];
}
export const TodoApp = () => { 

    const [todo, dispatch] = useReducer(todoReducer, [], init);    

    useEffect(()=> {
        localStorage.setItem('todo', JSON.stringify(todo))
    },[todo])

    const handleDeleteTodo = (todoId) =>{
        console.log(todoId)

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action)
    }
    
    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <div>
            <h1 className='text-2xl text-cyan-300 text-inherit mb-5'>TodoApp ({todo.length}) </h1>
            <hr />

            <div className='row flex' >
                <div className='w-3/4 md:w-3/4'>

                    <TodoList 
                        todos={todo}
                        handleToggle={handleToggle}
                        handleDeleteTodo={handleDeleteTodo}
                    />
                </div>
                <div className='w-1/2 md:w-1/2'>
                    <TodoAdd
                        handleAddTodo = {handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
