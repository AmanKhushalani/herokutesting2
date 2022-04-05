import axios from "axios"
const aman = async ()=>{
    
    let a = await axios.get("./data.json");
    console.log(a.data)
}


const Error = () => {

    aman();

    return <div id="error">
        404 &nbsp;
        This page could not be found.
    </div>
}

export default Error;