'use client';
/* eslint-disable */
import React, {useState, useEffect} from 'react';

import TheHeader from '@/widgets/shared/TheHeader';

import axiosMixins from '@/mixins/axiosMixins';

interface IterinaryItem {
    id: number,
    title: string,
    description: string,
    time_start: string,
    time_end: string,
    is_active: boolean
    time_type: number
}

const Page = () => {
    const {api, initAPI} = axiosMixins();

    const [breakfastIterinary, setBreakfastIterinary] = useState([] as IterinaryItem[]);
    const [lunchIterinary, setLunchIterinary] = useState([] as IterinaryItem[]);
    const [dinnerIterinary, setDinnerIterinary] = useState([] as IterinaryItem[]);
    const [nightIterinary, setNightIterinary] = useState([] as IterinaryItem[]);

    const getCookie = (name:string) => {
        let matches = document.cookie.match(new RegExp(
            //eslint-disable-next-line
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return (matches ? decodeURIComponent(matches[1]) : '.').toString();
    }

    const getIterinary = () => {
        const token = getCookie('token');
        api.get(`http://213.79.99.202:8000/timetable/${token}?day=0`)
            .then((response) => {
                setBreakfastIterinary(Object.values(response.data).filter(item => item.time_type == 0));
                setLunchIterinary(Object.values(response.data).filter(item => item.time_type == 1));
                setDinnerIterinary(Object.values(response.data).filter(item => item.time_type == 2));
                setNightIterinary(Object.values(response.data).filter(item => item.time_type == 3));
            });
    }

    useEffect(() => {
        initAPI(false);

        getIterinary();
    }, []);

    return (
        <>
            <TheHeader/>

            <main className='mt-[30px] ml-[10%] pb-[40px] w-[80%]'>
                <h1 className='w-[46%] border-b-2 border-[#62ffe3] text-[#ffffff] text-[2rem]'>Расписание активностей на день</h1>

                <section className='grid grid-rows-4 items-between mt-[50px] h-[1200px]'>
                    <div className='justify-self-start py-[20px] pl-[20px] w-[80vw] h-auto border-l-2 border-b-2 border-[#9a9a9a]'>
                        {breakfastIterinary.map((event:IterinaryItem) => (<span className={`flex items-center w-[100%] h-[60px] text-right ${event.is_active ? 'text-[#62ffe3]' : 'text-[#ffffff]'}`} key={event.id}><p className='text-[1.875rem] text-right'>{event.title} {event.time_start} - {event.time_end}</p><p className='ml-[20px] text-[1.75rem] text-right'>{`(${event.description})`}</p></span>))}
                    </div>

                    <div className='justify-self-end mt-[-2px] py-[20px] pr-[20px] w-[80vw] h-auto border-y-2 border-r-2 border-[#9a9a9a]'>
                        {lunchIterinary.map((event:IterinaryItem) => (<span className={`flex items-center ml-[10%] w-[100%] h-[60px] text-right ${event.is_active ? 'text-[#62ffe3]' : 'text-[#ffffff]'}`} key={event.id}><p className='text-[1.875rem] text-right'>{event.time_start} - {event.time_end}  {event.title}</p><p className='ml-[20px] text-[1.75rem] text-right'>{`(${event.description})`}</p></span>))}
                    </div>

                    <div className='justify-self-start mt-[-2px] py-[20px] pl-[20px] w-[80vw] h-auto border-l-2 border-y-2 border-[#9a9a9a]'>
                        {dinnerIterinary.map((event:IterinaryItem) => (<span className={`flex items-center w-[100%] h-[60px] text-right ${event.is_active ? 'text-[#62ffe3]' : 'text-[#ffffff]'}`} key={event.id}><p className='text-[1.875rem] text-right'>{event.title} {event.time_start} - {event.time_end}</p><p className='ml-[20px] text-[1.75rem] text-right'>{`(${event.description})`}</p></span>))}
                    </div>

                    <div className='justify-self-end mt-[-2px] py-[20px] pr-[20px] w-[80vw] h-auto border-t-2 border-r-2 border-[#9a9a9a]'>
                        {nightIterinary.map((event:IterinaryItem) => (<span className={`flex items-center ml-[10%] w-[90%] h-[60px] text-right ${event.is_active ? 'text-[#62ffe3]' : 'text-[#ffffff]'}`} key={event.id}><p className='text-[1.875rem] text-right'>{event.time_start} - {event.time_end}  {event.title}</p><p className='ml-[20px] text-[1.75rem] text-right'>{`(${event.description})`}</p></span>))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Page;