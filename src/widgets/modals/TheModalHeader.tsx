'use client';
/* eslint-disable */
import React, {useState} from 'react';
import Link from "next/link";

import {userSlice} from '@/store/storeReducers/UserSlice';

import {useAppDispatch, useAppSelector} from "@/store/storeHooks";

const TheModalHeader = () => {
    const dispatch = useAppDispatch();

    const isSignIn = useAppSelector((state) => state.user.isSignIn);

    const {changeIsSignIn} = userSlice.actions;

    const [isModalHeaderOpen, setIsModalHeaderOpen] = useState(false);

    return (
        <div className='absolute mt-[670px] ml-[-50px] py-[10px] px-[10px] w-[115vw] h-[100%] bg-[#1e1e1e] z-[10]'>
            <img src='/static/hamburgerMenu.svg' alt='Открыть шапку сайта' className='none mlarge:block absolute w-[25px] h-[25px] ml-[10%]'/>

            <img src='/static/xMarkIcon.svg' alt='Закрыть шапку сайта' className='none mlarge:block absolute w-[20px] h-[20px] right-[10%]' onClick={() => setIsModalHeaderOpen(false)}/>

            <nav className='flex mlarge:none justify-between flex-wrap ml-[10%] w-[100%] mlarge:w-[80%] mlarge:mt-[60px] mlarge:h-[50vh]'>
                <Link href='/profile' className='w-[100%] text-[#ffffff] text-[1.5rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>Главная</Link>

                <Link href='/iterinary' className=' w-[100%] text-[#ffffff] text-[1.5rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>Мероприятия</Link>

                <Link href='/rating' className='w-[100%] text-[#ffffff] text-[1.5rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>Рейтинг</Link>

                <Link href='/faq' className='w-[100%] text-[#ffffff] text-[1.5rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>FAQ</Link>

                {!isSignIn && <Link href='/' className='mlarge:w-[100%] text-[#ffffff] text-[1.375rem] mlarge:text-[1.5rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>Войти</Link>}

                {isSignIn && <button className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none' onClick={() => dispatch(changeIsSignIn())}>Выйти</button>}
            </nav>
        </div>
    );
};

export default TheModalHeader;