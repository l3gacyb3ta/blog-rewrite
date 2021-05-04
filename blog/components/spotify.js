import useSWR from 'swr'
import styles from '../styles/spotify.module.css'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Spotidata() {
  const { data, error } = useSWR('https://spotapi.arbee.repl.co', fetcher, { refreshInterval: 1000 })

  if (error) return (
    <div className={styles.spotify}>
      <h2>Error loading song, this is probably fine</h2>
    </div>
  )
  if (!data) return (
    <div className={styles.spotify}>
      <h2>Loading data...</h2>
    </div>
  )

  // render data
  return (
    <div className={styles.spotify}>
      <h2>Listening to: {data.title}</h2>
      <img src={data.image} alt="Cover for song."></img>
    </div>
  )
}

export default function Spotify() {
  return (
    Spotidata()
  )
}