'use client';
import React, {useState, useEffect} from 'react';

import axiosMixins from "@/mixins/axiosMixins";

import TheHeader from '@/widgets/shared/TheHeader';
import TheProfileInfo from "@/widgets/TheProfileInfo";
import Task from '@/widgets/shared/Task';

interface Tag {
    id: number,
    title: string
}

interface Task {
    id: number,
    title: string,
    description: string,
    tags: Tag[],
    price: number
}

const Page = () => {
    const {api, initAPI} = axiosMixins();
    const [tasks, setTasks] = useState([{
        id: 1,
        title: 'Мой таск',
        description: 'Lorem ipsum dolor sit amet, consectetur adipis',
        tags: [{id: 1, title: 'hello'}, {id: 2, title: 'hello'}],
        price: 1000
    },
    {
        id: 2,
        title: 'Мой таск',
        description: 'Lorem ipsum dolor sit amet, consectetur adipis',
        tags: [{id: 1, title: 'hello'}, {id: 2, title: 'hello'}],
        price: 1000
    },
    {
        id: 3,
        title: 'Мой таск',
        description: 'Lorem ipsum dolor sit amet, consectetur adipis',
        tags: [{id: 1, title: 'hello'}, {id: 2, title: 'hello'}],
        price: 1000
    },
    {
        id: 4,
        title: 'Мой таск',
        description: 'Lorem ipsum dolor sit amet, consectetur adipis',
        tags: [{id: 1, title: 'hello'}, {id: 2, title: 'hello'}],
        price: 1000
    },] as Task[]);

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
                console.log(response);
            })
    }

    useEffect(() => {
        initAPI(false);

        getAllTasks();
    }, []);

    return (
        <>
            <TheHeader/>

            <main className='flex justify-between mt-[30px] ml-[10%] w-[80%] h-[90%]'>
                <TheProfileInfo/>

                <section className='relative flex flex-wrap justify-between items-between w-[58vw] h-auto min-h-[550px]'>
                    {tasks.map((task) => (
                        <Task
                            key={task.id}
                            title={task.title}
                            description={task.description}
                            price={task.price}
                            tags={task.tags}
                        />
                    ))}
                </section>
            </main>
        </>
    );
};

export default Page;