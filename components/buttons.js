import Link from 'next/link'
import styles from '../styles/Buttons.module.css'

export default function Buttons() {
    return (
        <div>
            <nav className={styles.navbar}>
                <Link href="/about-me">
                    <a>About me</a>
                </Link>
                
                <Link href="/about-me">
                    <a>About me</a>
                </Link>
            </nav>
        </div>
    )
}