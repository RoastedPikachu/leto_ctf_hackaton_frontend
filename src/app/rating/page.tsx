'use client';
import React, {useState} from 'react';

import TheHeader from '@/widgets/shared/TheHeader';

interface RatingItem {
    id: number,
    fullName: string,
    score: number,
    position: number
}

const Page = () => {
    const [initialPersonalRatingArr, setInitialPersonalRatingArr] = useState([] as RatingItem[]);
    const [initialTeamRatingArr, setInitialTeamRatingArr] = useState([] as RatingItem[]);
    const [personalRatingArr, setPersonalRatingArr] = useState([{
        id: 1,
        fullName: 'Рыбка Дори',
        score: 50000,
        position: 1
    }, {
        id: 1,
        fullName: 'Рыбка Дори',
        score: 50000,
        position: 2
    },
        {
            id: 1,
            fullName: 'Рыбка Дори',
            score: 50000,
            position: 2
        },
        {
            id: 1,
            fullName: 'Рыбка Дори',
            score: 50000,
            position: 2
        },
        {
            id: 1,
            fullName: 'Рыбка Дори',
            score: 50000,
            position: 2
        },
        {
            id: 1,
            fullName: 'Рыбка Дори',
            score: 50000,
            position: 2
        },
        {
            id: 1,
            fullName: 'Рыбка Дори',
            score: 50000,
            position: 2
        },
        {
            id: 1,
            fullName: 'Рыбка Дори',
            score: 50000,
            position: 2
        }] as RatingItem[]);
    const [teamRatingArr, setTeamRatingArr] = useState([{
        id: 1,
        fullName: 'Рыбка Дори',
        score: 50000,
        position: 1
    }, {
        id: 1,
        fullName: 'Рыбка Дори',
        score: 50000,
        position: 2
    }] as RatingItem[]);

    const showMore = (category:string) => {
        category === 'solo'
            ? setPersonalRatingArr(initialPersonalRatingArr.slice(0, personalRatingArr.length + 10))
            : setTeamRatingArr(initialTeamRatingArr.slice(0, teamRatingArr.length + 10));
    }

    return (
        <>
            <TheHeader/>

            <main className='flex justify-between mt-[30px] ml-[10%] w-[80%] pb-[50px]'>
                <div id='PersonalRating' className='relative w-[39vw] pb-[30px] min-h-[850px] h-auto border-2 border-[#ffffff66] rounded-xl'>
                    <h2 className='mt-[50px] pb-[30px] w-[100%] text-[1.875rem] text-[#62ffe3] text-center'>Личный рейтинг</h2>

                    {personalRatingArr.map((item:RatingItem) => (
                        <span className='flex justify-center items-center mt-[20px] ml-[10%] w-[80%] text-[1.5rem] text-[#ffffff] text-center' key={item.id}><p className='px-[5px] w-[40px] h-[40px] bg-[#2eecc51a] border-2 border-[#62ffe3] shadow-[0_0_38px_rgba(46,236,197,0.1)] text-[#62ffe3] rounded-[30px]'>{ item.position }</p> <p className='ml-[10px]'>{ item.fullName } - { item.score } очков</p></span>
                    ))}

                    <button className='absolute ml-[32.5%] bottom-[20px] h-[50px] text-[#62ffe3] text-[1.5rem] text-center rounded-[30px]' onClick={() => showMore('solo')}>Показать больше</button>
                </div>

                <div id='TeamRating' className='relative w-[39vw] pb-[30px] min-h-[850px] h-auto border-2 border-[#ffffff66] rounded-xl'>
                    <h2 className='mt-[50px] pb-[30px] w-[100%] text-[1.875rem] text-[#62ffe3] text-center'>Командный рейтинг</h2>

                    {teamRatingArr.map((item:any) => (
                        <span className='flex justify-center items-center mt-[20px] ml-[10%] w-[80%] text-[1.5rem] text-[#ffffff] text-center' key={item.id}><p className='px-[5px] w-[40px] h-[40px] bg-[#2eecc51a] border-2 border-[#62ffe3] shadow-[0_0_38px_rgba(46,236,197,0.1)] text-[#62ffe3] rounded-[30px]'>{ item.position }</p> <p className='ml-[10px]'>{ item.fullName } - { item.score } очков</p></span>
                    ))}

                    <button className='absolute ml-[32.5%] bottom-[20px] h-[50px] text-[#62ffe3] text-[1.5rem] text-center rounded-[30px]' onClick={() => showMore('team')}>Показать больше</button>
                </div>
            </main>
        </>
    );
};

export default Page;