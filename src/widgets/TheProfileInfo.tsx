'use client';
/* eslint-disable */
import React, {useState, useEffect} from 'react';

import Avatar from '@mui/material/Avatar';

import axiosMixins from '@/mixins/axiosMixins';

import {useAppSelector} from "@/store/storeHooks";

interface UserInfo {
    personalScore: number,
    teamScore: number,
    team: string,
}

interface Event {
    id: number,
    title: string,
    startTime: string,
    endTime: string,
    day: string
}

const TheProfileInfo = () => {
    const {api, initAPI} = axiosMixins();

    const fullName = useAppSelector((state) => state.user.fullName);
    const [user, setUser] = useState({} as UserInfo);
    const [nextEvent, setNextEvent] = useState({} as Event);

    const getCookie = (name:string) => {
        let matches = document.cookie.match(new RegExp(
            //eslint-disable-next-line
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return (matches ? decodeURIComponent(matches[1]) : '').toString();
    }

    const getInfoAboutUser = () => {
        const token = getCookie('token');
        api.get(`http://213.79.99.202:8000/me/${token}`)
            .then((response) => {
                let info = response.data;
                setUser({
                    team: info.team,
                    personalScore: info.points,
                    teamScore: info.team_points
                });
            });
    }

    useEffect(() => {
        initAPI(false);

        getInfoAboutUser();
    }, []);

    return (
        <div className='pb-[20px] w-[25%] mlarge:w-[100%] h-[420px] border-2 border-[#ffffff66] rounded-xl'>
            <div id='TopUserInfo' className='w-[100%] h-[32.5%] border-b-2 border-[#ffffff66]'>
                <Avatar className='mt-[30px] ml-[calc(50%-37.5px)] border-2 border-[#62ffe3] shadow-[0_0_38px_rgba(46,236,197,0.1)]' sx={{ width: 75, height: 75}}>{fullName.split(' ').map((item) => item.slice(0, 1)).join(' ')}</Avatar>

                <h2 className='mt-[10px] w-full text-[#ffffff] text-[1.125rem] text-center'>{fullName || 'Уточка кря-кря'}</h2>
            </div>

            <div id='AdditionalInfo' className='mt-[10px] mlarge:mt-[30px] ml-[10%] w-[80%] h-[67.5%]'>
                <p className='text-[#ffffff] text-[1.125rem]'>Личные баллы: { user.personalScore }</p>

                <p className='mt-[10px] text-[#ffffff] text-[1.125rem]'>Баллы команды: { user.teamScore }</p>

                <p className='mt-[10px] text-[#ffffff] text-[1.125rem]'>Ваша команда: { user.team }</p>

                <div className='mt-[10px]'>
                    <p className='text-[#ffffff] text-[1.125rem]'>Следующее мероприятие: </p>

                    <p className='mt-[10px] text-[#ffffff] text-[1.125rem]'>{ `${nextEvent.startTime || 'Перерыв'} ${nextEvent.endTime || ''}`} {nextEvent.title || ''}</p>
                </div>
            </div>
        </div>
    );
};

export default TheProfileInfo;