import styles from '../styles/Socials.module.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dynamic from 'next/dynamic'
import Back from '../components/back'

const ThemeToggle = dynamic(() => import("../components/themetoggle"), {
  ssr: false,
});

export default function Socials({ children }) {
  return (
    <div className={styles.sidenav}>
      <backcontent>
        <Back />
      </backcontent>
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