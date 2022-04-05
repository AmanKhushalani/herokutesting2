import axios from "axios";

export const getData = async () => {
	let a = await axios.get('https://amanproton.github.io/Infoware/data.json')
	return a.data;
}
