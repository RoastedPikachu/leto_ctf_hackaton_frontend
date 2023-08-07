'use client';
import React from 'react';

import Link from 'next/link';

import {useAppSelector, useAppDispatch} from '@/store/storeHooks';

import {userSlice} from '@/store/storeReducers/UserSlice';

const TheHeader = () => {
    const dispatch = useAppDispatch();

    const {changeIsSignIn} = userSlice.actions;

    const isSignIn = useAppSelector((state) => state.user.isSignIn);

    return (
        <header className='mlarge:absolute flex mlarge:block justify-between items-center pl-[10%] mlarge:py-[20px] mlarge:px-[10px] mlarge:pl-[0%] pr-[10%] mlarge:pr-[0%] w-full h-[80px] mlarge:h-screen mlarge:bg-[#1e1e1e] z-[10]'>
            <nav className='flex justify-between w-[100%]'>
                <Link href='/profile' className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>Главная</Link>

                <Link href='/iterinary' className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>Мероприятия</Link>

                <Link href='/rating' className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>Рейтинг</Link>

                <Link href='/faq' className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>FAQ</Link>

                <Link href='/' className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none'>Войти</Link>
            </nav>

            {isSignIn && <button className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3] outline-none' onClick={() => dispatch(changeIsSignIn())}>Выйти</button>}
        </header>
    );
};

export default TheHeader;