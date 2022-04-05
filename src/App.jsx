import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Products from './Components/Products'
import Error from './Components/Error'
import './Styles/index.css'
import { createContext, useState } from 'react'



export const SearchedKeyContext = createContext();
export const DataContext = createContext();

export default function App() {

    const [searchedKey , updateSearchedKey] = useState("");
    const [searchedData , updateSearchedData] = useState([]);

    return <>

        <DataContext.Provider value={{searchedData , updateSearchedData}}>
            <SearchedKeyContext.Provider value={{searchedKey , updateSearchedKey}}>
                <Routes>
                    <Route exact path='/' element={<Navigate replace to={"/dashboard"} />} />
                    <Route exact path='/dashboard' element={<Dashboard />} />
                    <Route exact path='/products' element={<Navigate replace to={"/dashboard"} />} />
                    <Route exact path='/products/:productname' element={<Products />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </SearchedKeyContext.Provider>
        </DataContext.Provider>


    </>

}
