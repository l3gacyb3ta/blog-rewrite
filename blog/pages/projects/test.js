import Head     from 'next/head'
import styles   from '../../styles/Home.module.css'
import Footer   from '../../components/footer'
import Hand     from '../../components/hand'
import Layout   from '../../components/layout'
import Sparkles from '../../components/sparkle'
import Socials  from '../../components/socials'
import Projects from '../../components/projects'

export default function Project() {
  return (
    <Layout>

      <div className={styles.container}>
        <div className={styles.page}>
          <Head>
            <title>Raleigh Wise</title>
          </Head>
          <Socials />
          <main className={styles.main}>
            <h1>Test project</h1>
          </main>
        </div>
      </div>
    </Layout>
  )
}