import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function spotidata () {
  const { data, error } = useSWR('/api/user/123', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // render data
  return <div>hello {data.title}!</div>
}

export default function Spotify (){
  return (
    spotidata()
  )
}