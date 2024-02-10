import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ desc }, handleInputChange, reset] = useForm({
        desc: ''
    });

    const handleSubmitTodo = (e) => {
        e.preventDefault();

        if (desc.trim().length <= 1)
            return

        const newTodo = {
            id: new Date().getTime(),
            desc: desc,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Add new Todo</h4>
            <hr />

            <form action="" onSubmit={handleSubmitTodo}>
                <input type="text" name="desc" id="" placeholder='Learn' autoComplete='off' className='w-1/4 mb-1 border border-gray-300 peer block min-h-[auto] rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                    onChange={handleInputChange}
                    value={desc}
                />
                <button
                    className='w-1/2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'

                >
                    Add
                </button>
            </form>

        </>
    )
}
