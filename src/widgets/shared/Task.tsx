'use client';
/* eslint-disable */
import React, {useEffect} from 'react';

import axiosMixins from "@/mixins/axiosMixins";

interface Tag {
    id: number,
    tag: string
}

interface TaskProps {
    id: number,
    title: string,
    description: string,
    tags: Tag[],
    price: number,
    link: string,
}

const Task:React.FC<TaskProps> = ({id, title, description, tags, price, link}) => {
    const {api, initAPI} = axiosMixins();

    const getCookie = (name:string) => {
        let matches = document.cookie.match(new RegExp(
            //eslint-disable-next-line
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return (matches ? decodeURIComponent(matches[1]) : '.').toString();
    }
    const sendFlag = () => {
        console.log('');
        const token = getCookie('token');
        api.post(`http://213.79.99.202:8000/task/${id}/submit/${token}`, {
            flag: prompt('Введите флаг')
        })
            .then((response) => {
                console.log(response);
            })
    }

    useEffect(() => {
        initAPI(true);
    }, []);

    return (
        <div className='relative mlarge:mt-[30px] w-[28.5vw] mlarge:pb-[15px] mlarge:w-[100vw] h-[250px] border-2 border-[#ffffff66] rounded-xl'>
            <div className='flex justify-between items-center mt-[15px] ml-[10%] w-[80%] h-[50px]'>
                <h2 className='text-[#ffffff] text-[1.125rem]'>{title}</h2>

                <div className='flex ml-[-10px] w-[70%]'>
                    {tags.map((tag:Tag) => (
                        <div className='flex justify-center items-center ml-[10px] h-[25px] px-[10px] border-2 border-[#62ffe3]
                            bg-[#2eecc51a] shadow-[0_0_38px_rgba(46,236,197,0.1)] text-[#62ffe3] text-[1rem] rounded' key={tag.id}>
                            <p>{tag.tag}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-[10px] mlarge:mt-[25px] ml-[10%] w-[80%] h-auto]'>
                <p className='text-[#ffffff] text-[1rem]'>{description}</p>

                <p className='mt-[10px] text-[#ffffff] text-[1rem]'>Стоимость таска: {price}</p>

                <p className='mt-[10px] text-[#ffffff] text-[1rem]' dangerouslySetInnerHTML={{ __html: link}}></p>

                <button
                    className="mt-[10px] mmedium:px-[7.5px] w-[40%] h-[40px] border-2 border-[#62ffe3]
                    text-[#62ffe3] bg-[#2eecc51a] shadow-[0_0_38px_rgba(46,236,197,0.1)] rounded-[10px]"
                    onClick={() => sendFlag()}
                >
                    Сдать флаг
                </button>
            </div>
        </div>
    );
};

export default Task;