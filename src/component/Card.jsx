import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

const Card = ({result}) => {
    return (
        <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:hover:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
            <Link href={`movies/${result.id}`} >
                <Image 
                    src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} 
                    alt={"movie img"} 
                    width={500} 
                    height={300}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                    placeholder='blur'
                    blurDataURL="/spinner.svg"
                    className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"></Image>
                <div>
                    <p className='line-clamp-2 text-md'>{result.overview}</p>
                    <h1 className='font-bold text-lg truncate'>{result.title || result.name }</h1>
                    <p className='flex items-center mt-2'>{result.release_date || result.first_air_date}
                        <FiThumbsUp className='mr-1 h-5 ml-3' />
                        {result.vote_count} 
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default Card;
