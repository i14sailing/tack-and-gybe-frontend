import React from 'react';
import Footer from './footer';
import Header from './header';
import { Helmet } from 'react-helmet';

export default function Layout({ children, location }) {
    let body;

    if (
        location.pathname.includes('submit') ||
        location.pathname.includes('success')
    ) {
        body = <main className='w-full'>{children}</main>;
    } else {
        body = (
            <>
                <Header url={location.pathname} />
                <main className='w-full'>{children}</main>
                <div className='self-stretch flex-grow' />
                <Footer />
            </>
        );
    }
    return (
        <div
            className={
                'relative top-0 w-full min-h-screen bg-gray-100 ' +
                'centering-col px-5vw xl:px-15vw 2xl:px-25vw '
            }
        >
            <Helmet
                htmlAttributes={{
                    lang: 'en',
                }}
            >
                <meta charSet='utf-8' />
                <title>Tack & Gybe</title>
                <meta name='description' content='Helmet application' />

                <meta property='og:title' content='Tack & Gybe' />
                <meta
                    property='og:description'
                    content='International 14 Germany - Tack & Gybe Challenge'
                />
                <meta
                    property='og:image'
                    content='https://tack-and-gybe.dostuffthatmatters.dev/thumbnail.jpg'
                />
                <meta property='og:type' content='website' />
                <meta
                    property='og:url'
                    content='https://tack-and-gybe.dostuffthatmatters.dev'
                />
            </Helmet>
            {body}
        </div>
    );
}
