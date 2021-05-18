import Head     from 'next/head'
import styles   from '../../styles/Home.module.css'
import Footer   from '../../components/footer'
import Layout   from '../../components/layout'
import Socials  from '../../components/socials'
import { useRouter } from "next/router"
import { getAllPostIds, getPostData } from '../../lib/posts'

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
            <h1> {postData.title} </h1>
            <hr /> <br />
            <time>
              <Date dateString={postData.date} />
            </time>
            <br />
            Author: {postData.author}
            <main dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}