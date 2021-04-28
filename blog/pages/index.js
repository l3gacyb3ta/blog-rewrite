import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Hand   from '../components/hand'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Raleigh Wise</title>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <Hand></Hand>&nbsp;&nbsp;Hi, I'm Raleigh, a developer in highschool from the south.
          </h1>
          <p className={styles.description}>
            <a href="https://www.python.org/">Python</a>
          </p>
        </main>

        <Footer>

        </Footer>
      </div>
    </Layout>
  )
}
