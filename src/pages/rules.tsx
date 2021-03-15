import { Link } from 'gatsby';
import React from 'react';

export default function Page() {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-row'>
                <div className='flex flex-col w-full md:w-1/2 md:pr-8'>
                    <h4 className='text-gray-800 font-weight-700'>
                        The Challenge
                    </h4>
                    <p>
                        Perform <strong>3 tacks and 3 gybes</strong> in the
                        shortest amount of time possible.
                    </p>
                    <p>
                        The moment the first one of you places his foot onto the
                        boat (from the rack) will be counted as the start time.
                    </p>
                    <p>
                        The timer stops when both of you are hanging on your
                        trapeze (doesn't matter whether you are plugged in or
                        not, but your weight must not be on the rack).
                    </p>
                </div>
                <img
                    className='hidden w-1/2 pl-8 my-auto h-80 md:block'
                    src='./images/golden-gate.svg'
                />
            </div>

            <p className='my-8 sm:my-12 md:my-16'>
                You can choose the location, the conditions (at least a light
                Doppelsteher) and your gear.
                <img className='inline w-8 h-8 ml-1' src={'./wink-emoji.svg'} />
            </p>

            <div className='flex flex-row'>
                <img
                    className='hidden w-1/2 pr-8 my-auto h-60 md:block'
                    src='./images/online-video.svg'
                />
                <div className='flex flex-col w-full mt-8 md:mt-0 md:w-1/2 md:pl-8'>
                    <h4 className='text-gray-800 font-weight-700'>
                        How do I Take Part?
                    </h4>
                    <p>
                        1. Perform your business and film yourself from a
                        suitable angle. Camera mounted to the boom or the
                        spinnaker pole for example.
                    </p>
                    <p>2. Upload that video to YouTube</p>
                    <p>
                        3. Submit your Video entry{' '}
                        <Link to='/submit'>here</Link>
                    </p>
                </div>
            </div>

            <p className='my-8 sm:my-12 md:my-16'>
                Have fun!
                <img
                    className='inline w-8 h-8 ml-1'
                    src='./emojis/party-emoji.svg'
                />
            </p>
        </div>
    );
}
