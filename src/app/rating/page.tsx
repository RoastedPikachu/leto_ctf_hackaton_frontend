'use client';
/* eslint-disable */
import React, {useState, useEffect} from 'react';

import axiosMixins from '@/mixins/axiosMixins';

import TheHeader from '@/widgets/shared/TheHeader';

interface RatingItem {
    id: number,
    username: string,
    points: number,
    position: number
}

const Page = () => {
    const {api, initAPI} = axiosMixins();

    const [initialPersonalRatingArr, setInitialPersonalRatingArr] = useState([] as RatingItem[]);
    const [initialTeamRatingArr, setInitialTeamRatingArr] = useState([] as RatingItem[]);
    const [personalRatingArr, setPersonalRatingArr] = useState([] as RatingItem[]);
    const [teamRatingArr, setTeamRatingArr] = useState([] as RatingItem[]);

    const showMore = (category:string) => {
        category === 'solo'
            ? setPersonalRatingArr(initialPersonalRatingArr.slice(0, personalRatingArr.length + 10))
            : setTeamRatingArr(initialTeamRatingArr.slice(0, teamRatingArr.length + 10));
    }

    const getCookie = (name:string) => {
        let matches = document.cookie.match(new RegExp(
            //eslint-disable-next-line
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return (matches ? decodeURIComponent(matches[1]) : '.').toString();
    }

    const getPersonalRatingArr = () => {
        const token = getCookie('token');

        api.get(`http://213.79.99.202:8000/user/${token}`)
            .then((response:any) => {
                console.log(response.data);
                setInitialPersonalRatingArr(response.data);
                setPersonalRatingArr(response.data);
            })

    }

    const getTeamRatingArr = () => {
        const token = getCookie('token');

        api.get(`http://213.79.99.202:8000/team/${token}`)
            .then((response:any) => {
                setInitialTeamRatingArr(response.data);
                setTeamRatingArr(response.data);
            })

    }

    useEffect(() => {
        initAPI(false);

        getPersonalRatingArr();
        getTeamRatingArr();
    }, []);

    return (
        <>
            <TheHeader/>

            <main className='flex mlarge:block justify-between mt-[30px] ml-[10%] w-[80%] pb-[50px]'>
                <div id='PersonalRating' className='relative w-[39vw] mlarge:w-[100%] pb-[30px] min-h-[850px] mmedium:min-h-[550px] h-auto border-2 border-[#ffffff66] rounded-xl'>
                    <h2 className='mt-[50px] mmedium:mt-[30px] pb-[30px] w-[100%] text-[1.875rem] mmedium:text-[1.625rem] text-[#62ffe3] text-center'>Личный рейтинг</h2>

                    {personalRatingArr.map((item:RatingItem) => (
                        <span className='flex justify-center items-center mt-[20px] ml-[10%] w-[80%] text-[1.5rem] mlarge:text-[1.375rem] mmedium:text-[1.25rem] text-[#ffffff] text-center' key={item.id}><p className='px-[5px] w-[40px] h-[40px] bg-[#2eecc51a] border-2 border-[#62ffe3] shadow-[0_0_38px_rgba(46,236,197,0.1)] text-[#62ffe3] rounded-[30px]'>{ item.position }</p> <p className='ml-[10px]'>{ item.username } - { item.points } очков</p></span>
                    ))}

                    <button className='absolute ml-[32.5%] mlarge:ml-[20%] mmedium:ml-[15%] bottom-[20px] h-[50px] text-[#62ffe3] text-[1.5rem] mmedium:text-[1.375rem] text-center rounded-[30px]' onClick={() => showMore('solo')}>Показать больше</button>
                </div>

                <div id='TeamRating' className='relative mlarge:mt-[40px] w-[39vw] mlarge:w-[100%] pb-[30px] min-h-[850px] mmedium:min-h-[550px] h-auto border-2 border-[#ffffff66] rounded-xl'>
                    <h2 className='mt-[50px] mmedium:mt-[30px] pb-[30px] w-[100%] text-[1.875rem] mmedium:text-[1.625rem] text-[#62ffe3] text-center'>Командный рейтинг</h2>

                    {teamRatingArr.map((item:any) => (
                        <span className='flex justify-center items-center mt-[20px] ml-[10%] w-[80%] text-[1.5rem] mlarge:text-[1.375rem] mmedium:text-[1.25rem] text-[#ffffff] text-center' key={item.id}><p className='px-[5px] w-[40px] h-[40px] bg-[#2eecc51a] border-2 border-[#62ffe3] shadow-[0_0_38px_rgba(46,236,197,0.1)] text-[#62ffe3] rounded-[30px]'>{ item.position }</p> <p className='ml-[10px]'>{ item.fullName } - { item.score } очков</p></span>
                    ))}

                    <button className='absolute ml-[32.5%] mlarge:ml-[20%] mmedium:ml-[15%] bottom-[20px] h-[50px] text-[#62ffe3] text-[1.5rem] mmedium:text-[1.375rem] text-center rounded-[30px]' onClick={() => showMore('team')}>Показать больше</button>
                </div>
            </main>
        </>
    );
};

export default Page;