import Results from "@/component/Results"

const API_key = process.env.API_KEY

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending"
  const res = await fetch(`https://api.themoviedb.org/3/${
    genre === "fetchTrending" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${API_key}&language=en-US&page=1`, 
  {next: {revalidate: 1000}})
  const data = await res.json()
  const result = data.results
  // console.log(result)
  if (!res.ok){
    throw new Error("failed to fetch data from the server")
  }


  return (
   <div>
      <Results results={result} />
   </div>
  )
}
