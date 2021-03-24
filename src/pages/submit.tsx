import { Link } from 'gatsby';
import React, { useState } from 'react';
import ICONS from '../utils/icons';
import { navigate } from 'gatsby';

function Input(props: {
    placeholder: string;
    value: string;
    setValue(s: string): void;
    disabled?: boolean;
    type?: string;
    id: string;
}) {
    return (
        <input
            className={
                'bg-white rounded shadow outline-none focus:ring ring-blue-300 ' +
                'md:mx-4 leading-9 py-1 px-3 col-span-5 md:col-span-4 font-weight-500 '
            }
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e: any) => props.setValue(e.target.value)}
            disabled={props.disabled}
            type={props.type ? props.type : 'text'}
            id={props.id}
        />
    );
}

function Label(props: { children: string; for: string }) {
    return (
        <label
            className={
                'flex flex-row items-center font-weight-700 ' +
                'justify-start pl-1 pt-6 col-span-5 ' +
                'md:justify-end md:col-span-1 md:pl-0 md:pt-0 '
            }
            htmlFor={props.for}
        >
            {props.children}
        </label>
    );
}

export default function Page() {
    const [email, setEmail] = useState('');
    const [boatsname, setBoatsname] = useState('');
    const [sailnumber, setSailnumber] = useState('');
    const [tackVideoURL, setTackVideoURL] = useState('');
    const [gybeVideoURL, setGybeVideoURL] = useState('');
    const [notes, setNotes] = useState('');

    const [submitting, setSubmitting] = useState(false);

    function entryValid() {
        return (
            email != '' &&
            boatsname != '' &&
            sailnumber != '' &&
            (tackVideoURL != '' || gybeVideoURL != '')
        );
    }

    function onSubmit() {
        setSubmitting(true);

        if (!submitting) {
            fetch(
                'https://zealous-blackwell-87df58.netlify.app/.netlify/functions/send-submission-email' +
                    `?email=${email}&boatsname=${boatsname}&` +
                    `sailnumber=${sailnumber}&tackVideoUrl=${tackVideoURL}&` +
                    `gybeVideoUrl=${gybeVideoURL}&notes=${notes}`,
                {
                    method: 'POST',
                    mode: 'no-cors',
                }
            )
                .then(response => {
                    console.log(response);
                    setSubmitting(false);
                    navigate(`/success?email=${email}`);
                })
                .catch(error => {
                    console.log(error);
                    setSubmitting(false);
                });
        }
    }

    return (
        <div className='my-12 centering-col styled-article'>
            <link
                rel='preload'
                href='images/applause.gif'
                as='image'
                type='image/gif'
            />
            <Link
                className='mb-1 text-lg italic text-blue-600 font-weight-600'
                to='/rules#questions-and-answers'
            >
                Read Q&A
            </Link>
            <h3 className='mb-6 text-3xl text-center text-gray-800'>
                Tack & Gybe Submission{' '}
            </h3>

            <div className='grid w-full grid-cols-5 space-y-1 text-lg text-gray-800 md:space-y-3'>
                <div className='hidden' />
                <Label for='emailInput'>Your Email</Label>
                <Input
                    placeholder='yourname@smthn.com'
                    value={email}
                    setValue={setEmail}
                    disabled={submitting}
                    type='email'
                    id='emailInput'
                />
                <Label for='boatsnameInput'>Boatsname</Label>
                <Input
                    placeholder='something cool'
                    value={boatsname}
                    setValue={setBoatsname}
                    disabled={submitting}
                    id='boatsnameInput'
                />
                <Label for='sailnumberInput'>Sailnumber</Label>
                <Input
                    placeholder='GER 123'
                    value={sailnumber}
                    setValue={setSailnumber}
                    disabled={submitting}
                    id='sailnumberInput'
                />
                <Label for='tackVideoInput'>Tack-Video</Label>
                <Input
                    placeholder='YouTube Video-URL'
                    value={tackVideoURL}
                    setValue={setTackVideoURL}
                    disabled={submitting}
                    id='tackVideoInput'
                />
                <Label for='gybeVideoInput'>Gybe-Video</Label>
                <Input
                    placeholder='YouTube Video-URL'
                    value={gybeVideoURL}
                    setValue={setGybeVideoURL}
                    disabled={submitting}
                    id='gybeVideoInput'
                />
                <Label for='notesInput'>Additional Notes</Label>
                <Input
                    placeholder='optional, e.g. "Updated submission ..."'
                    value={notes}
                    setValue={setNotes}
                    disabled={submitting}
                    id='notesInput'
                />
            </div>
            <div className='pt-10 space-x-2 md:pt-6 centering-row'>
                <Link to='/rules'>
                    <div
                        className={
                            `transition-colors duration-150 cursor-pointer centering-row h-11 px-8 text-lg rounded font-weight-600 shadow ` +
                            'text-red-900 bg-red-300 hover:bg-red-200'
                        }
                    >
                        Cancel
                    </div>
                </Link>
                <button
                    className={
                        'transition-colors duration-150 shadow rounded ' +
                        'centering-row h-11 px-8 text-lg font-weight-600 relative ' +
                        'text-green-900 hover:bg-green-200 ' +
                        (submitting
                            ? 'cursor-default bg-green-200 '
                            : entryValid()
                            ? 'cursor-pointer bg-green-300 '
                            : 'cursor-not-allowed bg-green-200 ')
                    }
                    onClick={entryValid() ? onSubmit : () => {}}
                    disabled={submitting}
                >
                    <span
                        className={
                            'transition-opacity duration-150 ' +
                            (submitting ? 'opacity-0 ' : 'opacity-100 ')
                        }
                    >
                        Submit
                    </span>
                    <div
                        className={
                            'w-6 h-6 transform absolute transition-opacity duration-150 ' +
                            '-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ' +
                            (submitting ? 'opacity-100 ' : 'opacity-0 ')
                        }
                    >
                        <div className='w-6 h-6 animate-spin'>{ICONS.loop}</div>
                    </div>
                </button>
            </div>
            <div
                className={
                    'mt-8 md:mt-4 text-base text-gray-800 font-weight-500 ' +
                    'transition-opacity duration-150 ' +
                    (entryValid() ? 'opacity-0 ' : 'opacity-100 ')
                }
            >
                Required Fields: Email, Boatsname, Sailnumber and at least one
                video link.
            </div>
        </div>
    );
}
