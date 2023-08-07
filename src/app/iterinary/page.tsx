'use client';
import React, {useState, useEffect} from 'react';

import TheHeader from '@/widgets/shared/TheHeader';

import axiosMixins from '@/mixins/axiosMixins';

interface IterinaryItem {
    id: number,
    title: string,
    description: string,
    startTime: string,
    endTime: string,
    isActive: boolean
    timeType: number
}

const Page = () => {
    const {api, initAPI} = axiosMixins();

    const [breakfastIterinary, setBreakfastIterinary] = useState([{
        id: 1,
        title: 'Бог грома',
        description: 'Выступает самый гейский гей: Борис Карабут',
        startTime: '19:00',
        endTime: '20:00',
        isActive: false,
        timeType: 0
    }, {
        id: 2,
        title: 'Бог грома',
        description: 'Выступает самый гейский гей: Борис Карабут',
        startTime: '19:00',
        endTime: '20:00',
        isActive: true,
        timeType: 0
    }] as IterinaryItem[]);
    const [lunchIterinary, setLunchIterinary] = useState([{id: 1,
        title: 'Бог грома',
        description: 'Выступает самый гейский гей: Борис Карабут',
        startTime: '19:00',
        endTime: '20:00',
        isActive: false,
        timeType: 0
    }, {
        id: 2,
        title: 'Бог грома',
        description: 'Выступает самый гейский гей: Борис Карабут',
        startTime: '19:00',
        endTime: '20:00',
        isActive: false,
        timeType: 0
    }] as IterinaryItem[]);
    const [dinnerIterinary, setDinnerIterinary] = useState([{id: 1,
        title: 'Бог грома',
        description: 'Выступай самый гейский гей: Борис Карабут',
        startTime: '19:00',
        endTime: '20:00',
        isActive: false,
        timeType: 0
    }, {
        id: 2,
        title: 'Бог грома',
        description: 'Выступай самый гейский гей: Борис Карабут',
        startTime: '19:00',
        endTime: '20:00',
        isActive: false,
        timeType: 0
    }] as IterinaryItem[]);
    const [nightIterinary, setNightIterinary] = useState([{id: 1,
        title: 'Бог грома',
        description: 'Выступай самый гейский гей: Борис Карабут',
        startTime: '19:00',
        endTime: '20:00',
        isActive: false,
        timeType: 0
    }, {
        id: 2,
        title: 'Бог грома',
        description: 'Выступай самый гейский гей: Борис Карабут',
        startTime: '19:00',
        endTime: '20:00',
        isActive: false,
        timeType: 0
    }] as IterinaryItem[]);

    const getIterinary = () => {
        api.get('')
            .then((response) => {
                console.log(response);
            });
    }

    useEffect(() => {
        initAPI(false);

        getIterinary();
    });

    return (
        <>
            <TheHeader/>

            <main className='mt-[30px] ml-[10%] pb-[40px] w-[80%]'>
                <h1 className='w-[46%] border-b-2 border-[#62ffe3] text-[#ffffff] text-[2rem]'>Расписание активностей на день</h1>

                <section className='grid grid-rows-4 items-between mt-[50px] h-[1200px]'>
                    <div className='justify-self-start py-[20px] pl-[20px] w-[80vw] h-auto border-l-2 border-b-2 border-[#9a9a9a]'>
                        {breakfastIterinary.map((event:IterinaryItem) => (<span className={`flex items-center w-[100%] h-[60px] text-right ${event.isActive ? 'text-[#62ffe3]' : 'text-[#ffffff]'}`}><p className='text-[1.875rem] text-right' key={event.id}>{event.title} {event.startTime} - {event.endTime}</p><p className='ml-[20px] text-[1.75rem] text-right'>{`(${event.description})`}</p></span>))}
                    </div>

                    <div className='justify-self-end mt-[-2px] py-[20px] pr-[20px] w-[80vw] h-auto border-y-2 border-r-2 border-[#9a9a9a]'>
                        {lunchIterinary.map((event:IterinaryItem) => (<span className={`flex items-center ml-[10%] w-[100%] h-[60px] text-right ${event.isActive ? 'text-[#62ffe3]' : 'text-[#ffffff]'}`}><p className='text-[1.875rem] text-right' key={event.id}>{event.startTime} - {event.endTime}  {event.title}</p><p className='ml-[20px] text-[1.75rem] text-right'>{`(${event.description})`}</p></span>))}
                    </div>

                    <div className='justify-self-start mt-[-2px] py-[20px] pl-[20px] w-[80vw] h-auto border-l-2 border-y-2 border-[#9a9a9a]'>
                        {dinnerIterinary.map((event:IterinaryItem) => (<span className={`flex items-center w-[100%] h-[60px] text-right ${event.isActive ? 'text-[#62ffe3]' : 'text-[#ffffff]'}`}><p className='text-[1.875rem] text-right' key={event.id}>{event.title} {event.startTime} - {event.endTime}</p><p className='ml-[20px] text-[1.75rem] text-right'>{`(${event.description})`}</p></span>))}
                    </div>

                    <div className='justify-self-end mt-[-2px] py-[20px] pr-[20px] w-[80vw] h-auto border-t-2 border-r-2 border-[#9a9a9a]'>
                        {nightIterinary.map((event:IterinaryItem) => (<span className={`flex items-center ml-[10%] w-[90%] h-[60px] text-right ${event.isActive ? 'text-[#62ffe3]' : 'text-[#ffffff]'}`}><p className='text-[1.875rem] text-right' key={event.id}>{event.startTime} - {event.endTime}  {event.title}</p><p className='ml-[20px] text-[1.75rem] text-right'>{`(${event.description})`}</p></span>))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Page;