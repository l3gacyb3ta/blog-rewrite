import useSWR from 'swr'
import styles from '../styles/spotify.module.css'
import { Line } from 'rc-progress';

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
  var percent = (data.position/data.length)*100
  console.log(styles)
  return (
    <div className={styles.spotify}>
      <h2>Listening to: {data.title}</h2>
      <img src={data.image} alt="Cover for song."></img>
      <Line percent={percent} strokeColor="#00ff00"/>
      
    </div>
  )
}

export default function Spotify() {
  return (
    Spotidata()
  )
}