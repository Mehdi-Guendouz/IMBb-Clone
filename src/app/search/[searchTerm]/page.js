import Results from "@/component/Results";

const Page = async ({ params }) => {
    
    const word = params.searchTerm
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${word}&language=en-US&include_adult=false`
    );
    
    if(!res.ok){
        throw new Error("an error has been detected")
    }
    
    const data = await res.json()
    const results = data.results
    return (
        <div>
            {results && results.length === 0 && <h1 className="text-center pt-6">there is no result found</h1>}
            {results && <Results results={results}/>}
        </div>
    );
}

export default Page;
