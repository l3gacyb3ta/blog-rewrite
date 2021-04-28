import styles from '../styles/Home.module.css'

export default function Footer({ children }) {
    return (
        <footer className={styles.footer}>
          { children }
          <p>
          Powered by magic
          </p>
      </footer>
    )
}