import styles from './PostModelo.module.css'

const PostModelo=({fotocapa,titulo,children})=>{
    return(
        <article className={styles.postModeloContainer}>
            <div className={styles.fotoCapa} style={{backgroundImage:`url(${fotocapa})`}}>

            </div>
            <h2 className={styles.titulo}>
                {titulo}
            </h2>
            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}

export default PostModelo