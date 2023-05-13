import styles from './BotaoPrincipal.module.css';

export default function BotaoPrincipal(props) {
    return (

        <button className={`${styles.botaoPrincipal}
        ${props.lg == true ? styles.lg : ''}`}>

            {props.children}

        </button>

    )
}