import Head     from 'next/head'
import styles   from '../styles/Home.module.css'
import Footer   from '../components/footer'
import Hand     from '../components/hand'
import Layout   from '../components/layout'
import Sparkles from '../components/sparkle'
import Socials  from '../components/socials'
import Projects from '../components/projects'
import { useRouter } from "next/router"
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Spotidata () {
  const { data, error } = useSWR('https://spotapi.arbee.repl.co', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // render data
  return <div>hello test!</div>
}

export default function Home() {
  const router = useRouter()
  return (
    <Layout>

      <div className={styles.container}>
        <div className={styles.page}>
          <Head>
            <title>Raleigh Wise</title>
          </Head>

          <Socials />
          <Sparkles>
            <main className={styles.main}>
              <h1 className={styles.title}>
                <Hand></Hand>&nbsp;&nbsp;Hi, I'm Raleigh, a developer in highschool from the south.
              </h1>

              <div className={styles.description}>
                Hello! I’m Raleigh (he/they), I am a developer in high school. <br />
                I am skilled in <strong><a href='https://www.python.org/'>Python</a></strong>, <strong><a href='https://flask.palletsprojects.com/en/1.1.x/'>Flask</a></strong>, <strong><a href='https://www.djangoproject.com/'>Django</a></strong>, <strong><a href='https://isocpp.org/'>C++</a></strong>, <strong><a href='https://www.linux.org/'>Linux</a></strong>, and <strong><a href='https://git-scm.com/'>git</a></strong>.<br />
                Currently I'm learning <strong><a href='https://crystal-lang.org'>Crystal</a></strong>, and <strong><a href='https://nextjs.org/'>Next.js</a></strong> + <strong><a href='https://reactjs.org/'>React</a></strong>!
              </div>
              // <Spotidata />

            </main>
          </Sparkles>
        </div>

        <Projects />
      </div >
      <Footer />

    </Layout >
  )
}
