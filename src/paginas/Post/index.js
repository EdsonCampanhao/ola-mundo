import { useParams } from "react-router-dom"
import posts from '../../json/posts.json'



export default function Post() {

    const parametros = useParams();

    console.log(posts[parametros.id].id)

    return (

        <div>
            <h1>{posts[parametros.id-1].titulo}</h1>
            <p>{posts[parametros.id].texto}</p>
        </div>


    )



}