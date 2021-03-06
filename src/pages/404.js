import React from 'react';
import { Link } from 'gatsby';

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center w-full mt-8 text-lg text-gray-800 font-weight-500'>
            <div className='mb-2'>
                Nothing here
                <img
                    className='inline w-8 h-8 ml-1'
                    src='/emojis/ghost-emoji.svg'
                    alt='ghost emoji'
                />
            </div>
            <Link
                to='/'
                className='transition-colors duration-100 font-weight-700 hover:text-rose-600'
            >
                Go back to main page
            </Link>
        </div>
    );
}
