import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
function Detail(){
    const { id } = useParams();

    const [loading,setLoading] = useState(true);
    const [movie,setMovie] = useState({});
    const [url,setUrl] = useState();
    const [title, setTitle] = useState();

    const getMovie = async () =>{
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        //console.log(json);
        setMovie(json);
        setLoading(false);
        setUrl(movie.data.movie);


    };

    useEffect(()=>{
        getMovie();
    },[]);
    //console.log(movie.data.movie);

    return (
        <div>
            <h1>Detail...</h1>
            {/* <h3>{movie.data.movie.genres}</h3> */}
            <div>

            </div>

        </div>

    
    );

}

export default Detail;