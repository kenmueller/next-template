import styles from './page.module.scss'

export const metadata = {
	title: 'next-template',
	description: 'next-template'
}

const Home = () => (
	<main className={styles.root}>
		<h1 className={styles.title}>next-template</h1>
	</main>
)

export default Home
