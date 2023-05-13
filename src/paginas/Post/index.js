import { Route, Routes, useParams } from "react-router-dom"
import posts from '../../json/posts.json'
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './post.css'
import NotFound from "paginas/NotFound";
import PaginaPadrao from "componentes/PaginaPadrao";



export default function Post() {

    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id == parametros.id
    }
    )
    if (!post) {
        return <NotFound></NotFound>
    }




    return (


        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={<PostModelo
                    fotocapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}

                >
                    <div className="post-markdown-container">
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                    </div>
                </PostModelo>} />

            </Route>

        </Routes>



    )



}