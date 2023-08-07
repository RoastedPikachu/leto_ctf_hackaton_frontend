'use client';
import React from 'react';

import TheHeader from '@/widgets/shared/TheHeader';
import TheProfileInfo from "@/widgets/TheProfileInfo";

const Page = () => {
    return (
        <>
            <TheHeader/>

            <main className='ml-[10%] w-[80%] h-[90%]'>
                <TheProfileInfo/>
            </main>
        </>
    );
};

export default Page;