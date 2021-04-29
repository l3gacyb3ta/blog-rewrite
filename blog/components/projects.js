import styles   from '../styles/Projects.module.css'
import Link     from 'next/link'

export default function Projects() {
    return (
        <div className={styles.container}>
            
              <div className={styles.card}>
                  <h2>Title</h2>
                  <img src="https://doggo.ninja/WNxLd8.png"></img>
                  <p>This is a little project I built as an example for the project card object</p>
                  <Link href="/projects/test"><a className={styles.link}>See more</a></Link>
              </div>
            
        </div>
    )
}