import styles from './rodape.module.css'
import {ReactComponent as Marca} from 'assets/marca_registrada.svg'
const Rodape=()=>{return( 
    <footer className={styles.rodape}>

        <Marca/>
        Desenvolvido por alura
    </footer>
)}
export default Rodape