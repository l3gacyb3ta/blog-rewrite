import styles from '../styles/Socials.module.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Socials() {
    return (
        <div className={styles.sidenav}>
            <content>
                <a href="https://github.com/l3gacyb3ta"><FontAwesomeIcon icon={faGithub} /></a>
            </content>
        </div>
    )
}