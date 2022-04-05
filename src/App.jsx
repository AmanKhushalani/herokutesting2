import { Navigate, Route, Routes } from 'react-router-dom'
import PrimarySearchAppBar from './Components/AppBar'
import Dashboard from './Components/Dashboard'
import ProductCard from './Components/ProductCard'
import Products from './Components/Products'
import Error from './Components/Error'
import './Styles/index.css'
import axios from 'axios'



export default function App() {

    // let data = await axios.get("https://amanproton.github.io/Infoware/data.json")
    // data = data.data;
    // console.log(data)


    return <>
        <Routes>
            <Route exact path='/' element={<Navigate replace to={"/dashboard"} />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/products' element={<Navigate replace to={"/dashboard"} />} />
            <Route exact path='/products/:productname' element={<Products />} />
            <Route path='*' element={<Error />} />
        </Routes>

        {/* <PrimarySearchAppBar />
        <div id='cardContainer'>
            {shoes.map((value, index) => {
                return <ProductCard key={index} value={value} />
            })}

        </div> */}
    </>

}
