import useSWR from 'swr'

function Spotify() {
    const { data, error } = useSWR('https://spotapi.arbee.repl.co/', fetch)
    
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    let json = data.json()
    console.log(json)
    return <div>: {data.title}</div>

}

export default Spotify;