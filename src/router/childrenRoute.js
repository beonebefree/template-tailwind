import LoginForm from "../components/LoginForm";
import Productos from "../views/Productos";
import Login from '../views/Login'

export const user = [
    {
        path: '',
        element: <Productos />
    },
    {
        path: 'home',
        element: <Productos />
    },
    {
        path: 'about',
        element: <LoginForm />
    },
    {
        path: 'contacto',
        element: <Login />
    },
]