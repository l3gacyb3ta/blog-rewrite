import styles   from '../../styles/Home.module.css'
import Head     from 'next/head'
import Footer   from '../../components/footer'
import Layout   from '../../components/layout'
import Socials  from '../../components/socials'
import Back     from '../../components/back'

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
            <Back />
            <h1>Test project</h1>
          </main>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}