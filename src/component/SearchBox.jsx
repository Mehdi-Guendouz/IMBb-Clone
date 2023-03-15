"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBox = () => {
    const [search, setSearch] = useState('');
    const route = useRouter();

    function handelSubmit(e){
        e.preventDefault()
        if(!search) return;
        console.log(search)
        route.push(`/search/${search}`)
        setSearch('')
    }
    return (
        <form className="flex items-center justify-between mx-auto max-w-6xl px-5" onSubmit={handelSubmit}>
            <input type="text" 
            value={search}
            placeholder="search movie ...." 
            className="w-full rounded-sm h-14 placeholder-gray-500 outline-none bg-transparent" 
            onChange={(e) => setSearch(e.target.value)}/>
            <button disabled={!search} type="submit" className="text-amber-500 disabled:text-gray-400">Search</button>
        </form>
    );
}

export default SearchBox;
