import Head     from 'next/head'
import styles   from '../../styles/Home.module.css'
import Footer   from '../../components/footer'
import Layout   from '../../components/layout'
import Socials  from '../../components/socials'
import { useRouter } from "next/router"
import { getSortedPostsData } from '../../lib/posts'

export default function Post({ postData }) {
  const router = useRouter()
  console.log(postData)
  return (
    <Layout>
      <Head>
        <title>Blog - {postData.title}</title>
      </Head>

      <Socials />

      <div className={styles.container}>
        <div className={styles.page}>
        <div className={styles.post}>
        </div>
        </div>
      </div>
    </Layout>
  )
}