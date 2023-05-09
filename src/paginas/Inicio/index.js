
import posts from 'json/posts.json';
import styles from './inicio.module.css';
import PostCard from "componentes/PostCard";


export default function Inicio() {



    return (
            <ul className={styles.posts} data-dado='0'>
                {posts.map(item => <li key={item.id}><PostCard post={item} /></li>)}
            </ul>
    )
}