import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import Layout from '../components/layout';
import Socials from '../components/socials';
import Back from '../components/back'

function Error({ statusCode }) {
  return (
		<Layout>
      <Head> 
        <title>Error {statusCode}</title>
      </Head>
			<div className={styles.container}>
				<div className={styles.page}>
				<Socials />
					<main className={styles.main}>
					<Back />
						<h1>Error {statusCode}</h1>
					</main>
				</div>
			</div>
		</Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error