import { useParams } from "react-router-dom"
import PrimarySearchAppBar from "./AppBar";
import ProductCard from "./ProductCard";
import { getData } from '../Adapters/fetch'
import { useContext, useEffect, useState } from "react";
import { DataContext, SearchedKeyContext } from "../App";
import axios from "axios";


const Products = () => {

    const parameters = useParams();

    const [dataFetched, updateDataFetched] = useState([]);
    const [count, setCount] = useState(0);
    const searchedKeyContext = useContext(SearchedKeyContext);
    const dataContext = useContext(DataContext);



    getData().then(function (value) {
        if (value[parameters.productname] === undefined) alert("data not found");
        else {
            let a = dataFetched.length == 0 ? updateDataFetched(value[parameters.productname]) : () => { }
        }
    })


    return <>
        <PrimarySearchAppBar />
        <div id='cardContainer'>
            {dataFetched.map((value, index) => {
                return <ProductCard key={index} value={value} />
            })}
        </div>

    </>

}
export default Products;