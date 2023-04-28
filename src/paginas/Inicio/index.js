
import posts from 'json/posts.json';
import styles from './inicio.module.css';
import Post from "componentes/Post";


export default function Inicio() {


    return (

       
            <ul className={styles.posts} data-dado='0'>
                {posts.map(item => <li key={item.id}><Post post={item} /></li>)}
            </ul>
       


    )
}