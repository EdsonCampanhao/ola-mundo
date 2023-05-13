import BotaoPrincipal from 'componentes/BotaoPrincipal'
import styles from './NotFound.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    const navegar=useNavigate();

    return (
        <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>ops! página não encontrada!</h1>
            <p className={styles.texto}>
                Tem certeza que era isso que você estava procurando?
            </p>
            <p className={styles.texto}>
                Aguarde uns instantes e recarregue á pagina, ou volte para a pagina inicial
            </p>
            <div
             className={styles.botaoContainer}
            onClick={()=>navegar(-1)}
            >
                <BotaoPrincipal lg={true} > Voltar </BotaoPrincipal>
            </div>
            <img src={erro404} className={styles.imagemCachorro} alt="cachorro de óculos" />

        

        </div>
        <div className={styles.espacoEmBranco}>

        </div>
        </>
    )
}

