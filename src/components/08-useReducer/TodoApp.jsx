import { useReducer } from 'react'
import './todoApp.css'
import { todoReducer } from './todoReducer';
export const TodoApp = () => {

    const initialState = [{
        id: new Date().getTime(),
        desc: "Learning React",
        done: false
    }];

    const [todo] = useReducer(todoReducer, initialState)

    return (
        <div>
            <h1 className='text-2xl text-cyan-300 text-inherit mb-5'>TodoApp ({todo.length}) </h1>
            <hr />

            <div className='row flex' >
                <div className='w-3/4'>
                    <ul className='max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400 mt-5'>
                        {
                            todo.map((curr, id) => (
                                <li
                                    key={curr.id}
                                    className='flex justify-center space-x-5'
                                >
                                    <p className='text-center m-2'>{id + 1}. {curr.desc}</p>
                                    <button
                                        className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
                                    >
                                        Delete
                                    </button>


                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='w-1/2'>
                    <h4>Add new Todo</h4>
                    <hr />

                    <form action="">
                        <input type="text" name="desc" id="" placeholder='Learn' autoComplete='off' className='w-1/4 mb-1'/>
                        <button
                            className='w-1/2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
