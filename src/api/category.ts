import axios from "axios";

const API = process.env.REACT_APP_API_KEY;



export const getCategories = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API}`;
    let result;
    try {
        result = await axios.get(url).then(res => res.data);
    }
    catch (err){
        console.log(err);
    }
    return result;
}