import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Products from './Components/Products'
import Error from './Components/Error'
import './Styles/index.css'



export default function App() {


    return <>
        <Routes>
            <Route exact path='/' element={<Navigate replace to={"/dashboard"} />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/products' element={<Navigate replace to={"/dashboard"} />} />
            <Route exact path='/products/:productname' element={<Products />} />
            <Route path='*' element={<Error />} />
        </Routes>


    </>

}
