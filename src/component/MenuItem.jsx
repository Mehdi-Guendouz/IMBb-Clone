import Link from 'next/link';
import React from 'react';

const MenuItem = ({title, address, Icon}) => {
    return (
        <div>
            <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
                <Icon className="sm:hidden text-2xl mx-4" />
                <p className='hidden sm:inline my-2 text-sm font-bold'>{title}</p>
            </Link>
        </div>
    );
}

export default MenuItem;
