import styles from '../styles/Home.module.css'
import { Links } from '../components/Links'
import { HeadLine } from '../components/HeadLine'

export function Main(props) {
    return (
        <div>
            <main className={styles.main}>
                <HeadLine page={props.page}>
                    <code className={styles.code}>pages/{props.page}.js</code>
                </HeadLine>
                <Links />
            </main>
        </div >
    )
}
