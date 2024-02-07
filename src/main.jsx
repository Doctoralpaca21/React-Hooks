import ReactDOM from 'react-dom/client'
import './index.css'
import { CounterWithHook } from './components/CounterWithHook.jsx'
import { SimpleForm } from './components/02-UseEffect/simpleForm.jsx'
import { FormWithCustomHooks } from './components/02-UseEffect/FormwithHook.jsx'


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/cli.min.js" />
// https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/cli.min.js
ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <CounterWithHook />
    // <SimpleForm/>
    <FormWithCustomHooks/>
  
)
