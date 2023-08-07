import React from 'react';

import Link from 'next/link';

import {useAppSelector, useAppDispatch} from '@/store/storeHooks';

const TheHeader = () => {
    const dispatch = useAppDispatch();

    // const isSignIn = useAppSelector((state) => state.user.isSignIn);
    const isSignIn = false;
    const signOut = () => {
        // dispatch('signOut');
    }

    return (
        <header className='flex justify-between items-center pl-[10%] pr-[10%] w-full h-[80px]'>
            <nav className='flex justify-between w-[100%]'>
                <Link href='/profile' className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3]'>Главная</Link>

                <Link href='/iterinary' className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3]'>Мероприятия</Link>

                <Link href='/rating' className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3]'>Рейтинг</Link>

                <Link href='/faq' className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3]'>FAQ</Link>

                <Link href='/' className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3]'>Войти</Link>
            </nav>

            {isSignIn && <button className='text-[#ffffff] text-[1.375rem] transition duration-[500ms] ease hover:text-[#62ffe3]' onClick={() => signOut()}>Выйти</button>}
        </header>
    );
};

export default TheHeader;