import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { AboutScreen } from "./AboutScreen"
import { LoginScreen } from "./LoginScreen"
import { HomeScreen } from "./HomeScreen"
import { NavBar } from "./NavBar"



export const AppRouter = () => {
    return (
        <>
            <Router>
                <div>
                    <NavBar/>
                    
                    <Routes>
                        <Route exact path="/" element={<HomeScreen/>}/>
                        <Route exact path="/about" element={<AboutScreen/>}/>
                        <Route exact path="/login" element={<LoginScreen/>}/>
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}
