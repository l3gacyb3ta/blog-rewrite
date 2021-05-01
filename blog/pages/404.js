import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import Hand from '../components/hand';
import Layout from '../components/layout';
import Sparkles from '../components/sparkle';
import Socials from '../components/socials';
import Projects from '../components/projects';
import Back from '../components/back'


export default function Custom404() {
	return (
		<Layout>
      <Head> 
        <title>404 - Page Not Found</title>
      </Head>
			<div className={styles.container}>
				<div className={styles.page}>
				<Socials />
					<main className={styles.main}>
					<Back />
						<h1>404 - Page Not Found</h1>
					</main>
				</div>
			</div>
		</Layout>
	);
}
