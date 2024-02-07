import './effects.css'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHooks = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name, email, password} = formValues;    
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHooks</h1>
            <hr />

            <div>
                <input 
                    type="text" 
                    name='name'
                    className='form-control'
                    placeholder='Your name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                    />
            </div>

            <div>
                <input 
                    type="text" 
                    name='email'
                    className='form-control'
                    placeholder='Your email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                    />
            </div>

            <div>
                <input 
                    type="password" 
                    name='password'
                    className='form-control'
                    placeholder='Your password'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                    />
            </div>

            <button type='submit'>
                Submit
            </button>

        </form>
    )
}
