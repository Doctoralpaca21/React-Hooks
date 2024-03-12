import { useContext } from "react"
import { UserContext } from "./userContext"


export const LoginScreen = () => {

    const {setUser} = useContext(UserContext)
    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setUser({name: 'New User', id: '123'})}
            >
                Login
            </button>
        </div>
    )
}
