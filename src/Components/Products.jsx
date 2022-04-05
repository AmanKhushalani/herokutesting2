import axios from "axios";
import { useParams } from "react-router-dom"
import PrimarySearchAppBar from "./AppBar";
import ProductCard from "./ProductCard";
import { getData } from '../Adapters/fetch'
import { useEffect, useState } from "react";


const Products = () => {

    const parameters = useParams();

    const [dataFetched, updateDataFetched] = useState([]);

    getData().then(function (value) {
        if (value[parameters.productname] === undefined) {
            updateDataFetched("No data Found")
        }
        else {
            updateDataFetched(value[parameters.productname]);
        }
        return 0;
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