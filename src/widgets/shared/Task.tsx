'use client';
import React from 'react';

interface TaskProps {
    title: string,
    description: string,
    tags: string[],
    price: number
}

const Task:React.FC<TaskProps> = ({title, description, tags, price}) => {
    return (
        <div className='relative w-[28.5vw] h-[250px] border-2 border-[#ffffff66] rounded-xl'>
            <div className='flex justify-between items-center mt-[15px] ml-[10%] w-[80%] h-[50px]'>
                <h2 className='text-[#ffffff] text-[1.125rem]'>{title}</h2>

                <div className='flex ml-[-10px] w-[70%]'>
                    {tags.map((tag:string) => (
                        <div className='flex justify-center items-center ml-[10px] h-[25px] px-[10px] text-[#62ffe3] border-2 border-[#ffffff66] text-[1rem] rounded'>
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-[10px] ml-[10%] w-[80%] h-auto]'>
                <p className='text-[#ffffff] text-[1rem]'>{description}</p>

                <p className='mt-[10px] text-[#ffffff] text-[1rem]'>Стоимость таска: {price}</p>
            </div>
        </div>
    );
};

export default Task;