
const Results = ({results}) => {

    return (
        <div>
            {results.map((result) =>{
                return <div key={result.id}>{result.original_title}</div>
            })}
        </div>
    );
}

export default Results;
