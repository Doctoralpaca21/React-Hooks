import { Link } from "react-router-dom"


export const NavBar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-start h-16">
                    <Link
                        to="/"
                        className="text-gray-400 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-xl font-medium "
                    >
                        useContext
                    </Link>

                    <ul className="flex items-center">
                        <li>
                            <Link
                                to="/"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
