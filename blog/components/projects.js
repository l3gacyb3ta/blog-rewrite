import styles from '../styles/Projects.module.css'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className={styles.container}>
      <Link href="/projects/test">
        <div className={styles.card}>
          <h2></h2>
          <img src="https://doggo.ninja/WNxLd8.png"></img>
          <p>This is a little project I built as an example for the project card object</p>
          <a className={styles.link}>See more</a>
        </div>
      </Link>
      
      <Link href="/projects/xkcd-explain-button">
        <div className={styles.card}>
          <h2>Title</h2>
          <img src="https://doggo.ninja/t78qMR.jpg"></img>
          <p>This is a little project I wrote to learn about extensions.</p>
          <a className={styles.link}>See more</a>
        </div>
      </Link>

    </div>
  )
}