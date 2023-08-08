'use client';
/* eslint-disable */
import React, {useState} from 'react';

import Link from 'next/link';

import {useAppSelector, useAppDispatch} from '@/store/storeHooks';

import {userSlice} from '@/store/storeReducers/UserSlice';
import TheModalHeader from "@/widgets/modals/TheModalHeader";

const TheHeader = () => {
    const dispatch = useAppDispatch();

    const {changeIsSignIn} = userSlice.actions;

    const isSignIn = useAppSelector((state) => state.user.isSignIn);

    const [isModalHeaderOpen, setIsModalHeaderOpen] = useState(false);

    const closeModalHeader = () => {
        setIsModalHeaderOpen(false);
    }

    return (
        <header className='flex justify-between items-center pl-[10%] w-[90%] mlarge:w-[80%] h-[80px] z-[10]'>
            <img src='/static/hamburgerMenu.svg' alt='Открыть шапку сайта' className='hidden mlarge:block absolute w-[25px] h-[25px]' onClick={() => setIsModalHeaderOpen(true)}/>

            {isModalHeaderOpen && <TheModalHeader closeModalHeader={closeModalHeader}/>}

            <nav className='flex mlarge:hidden justify-between w-[100%]'>
                <Link href='/profile' className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>Главная</Link>

                <Link href='/iterinary' className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>Мероприятия</Link>

                <Link href='/rating' className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>Рейтинг</Link>

                <Link href='/faq' className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>FAQ</Link>

                {!isSignIn && <Link href='/' className='mlarge:w-[100%] text-[#ffffff] text-[1.375rem] mlarge:text-[1.5rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>Войти</Link>}

                {isSignIn && <button className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none' onClick={() => dispatch(changeIsSignIn())}>Выйти</button>}
            </nav>
        </header>
    );
};

export default TheHeader;