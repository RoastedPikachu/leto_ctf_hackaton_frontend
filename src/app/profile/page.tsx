'use client';
import React, {useState, useEffect} from 'react';

import axiosMixins from "@/mixins/axiosMixins";

import {useAppDispatch, useAppSelector} from "@/store/storeHooks";
import { userSlice } from '@/store/storeReducers/UserSlice';

import TheHeader from '@/widgets/shared/TheHeader';
import TheProfileInfo from "@/widgets/TheProfileInfo";
import Task from '@/widgets/shared/Task';

interface Tag {
    id: number,
    tag: string
}

interface Task {
    id: number,
    title: string,
    description: string,
    tags: Tag[],
    points: number,
    flag: string,
    links: '',
    type: 0,
}

const Page = () => {
    const dispatch = useAppDispatch();
    const {api, initAPI} = axiosMixins();
    const {setFilteredArr} = userSlice.actions;

    const filteredArr = useAppSelector((state) => state.user.filteredArray);

    const [initialTasks, setInitialTasks] = useState([] as Task[]);
    const [tasks, setTasks] = useState([] as Task[]);

    const [filterText, setFilterText] = useState('');

    const filterTasks = () => {
        let filteredArr;
        if(filterText === 'Личный' || filterText === 'Командный') {
            filteredArr = tasks.filter(task => task.tags[0].tag == filterText);
        } else {
            filteredArr = tasks.filter(task => task.tags[1].tag == filterText);
        }

        dispatch(setFilteredArr(filteredArr));
        setTasks(filteredArr);
    }

    const clearFilter = () => {
        setTasks(initialTasks);
        dispatch(setFilteredArr(initialTasks));
    }

    const getCookie = (name:string) => {
        let matches = document.cookie.match(new RegExp(
            //eslint-disable-next-line
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return (matches ? decodeURIComponent(matches[1]) : '').toString();
    }

    const getAllTasks = () => {
        const token = getCookie('token');

        api.get(`http://213.79.99.202:8000/task/${token}`)
            .then((response) => {
                setInitialTasks(response.data);
                setTasks(response.data);
            })
    }

    useEffect(() => {
        initAPI(false);

        getAllTasks();
    }, []);

    return (
        <>
            <TheHeader/>

            <main className='flex mlarge:block justify-between mt-[30px] ml-[10%] w-[80%] h-[90%]'>
                <TheProfileInfo/>

                <section className='relative flex flex-wrap justify-between items-between w-[58vw] mlarge:w-[80vw] h-auto min-h-[910px] mlarge:min-h-[960px]'>
                    <div className='flex mlarge:block justify-between mt-[30px] w-[100%] h-[70px] mlarge:h-[120px]'>
                        <input type='text' placeholder='Введите критерий' value={filterText} onChange={(event) => setFilterText(event.target.value)} className='w-[65%] mlarge:w-[100%] h-[50px] pl-[10px] outline-none rounded'/>

                        <div className='flex justify-between mlarge:mt-[20px] mlarge:pb-[20px] w-[32.5%] mlarge:w-[100%]'>
                            <button className='px-[12.5px] h-[50px] border-2 border-[#62ffe3]
                                text-[#62ffe3] bg-[#2eecc51a] shadow-[0_0_38px_rgba(46,236,197,0.1)] rounded-[10px] outline-none' onClick={() => filterTasks()}>Фильтровать</button>
                            <button className='px-[12.5px] h-[50px] border-2 border-[#62ffe3]
                                text-[#62ffe3] bg-[#2eecc51a] shadow-[0_0_38px_rgba(46,236,197,0.1)] rounded-[10px] outline-none' onClick={() => clearFilter()}>Очистить</button>
                        </div>
                    </div>

                    {tasks.map((task) => (
                        <Task
                            id={task.id}
                            key={task.id}
                            title={task.title}
                            description={task.description}
                            price={task.points}
                            link={''}
                            tags={task.tags}
                        />
                    ))}
                </section>
            </main>
        </>
    );
};

export default Page;