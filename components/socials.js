import styles from '../styles/Socials.module.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import("../components/themetoggle"), {
  ssr: false,
});

export default function Socials() {
    return (
        <div className={styles.sidenav}>
            <content>
              <div className={styles.toggle}>
                <ThemeToggle />
              </div>
              <div className={styles.icon}>
                <a href="https://github.com/l3gacyb3ta"><FontAwesomeIcon icon={faGithub} /></a>
              </div>
            </content>
        </div>
    )
}