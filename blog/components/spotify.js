import useSWR from 'swr'

function Spotify() {
    const { data, error } = useSWR('https://spotapi.arbee.repl.co/', fetch)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>hello {data.name}!</div>
}

export default Spotify;