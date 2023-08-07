'use client';
import React, {useState, useEffect} from 'react';

import Avatar from '@mui/material/Avatar';

import axiosMixins from '@/mixins/axiosMixins';

import {useAppSelector} from "@/store/storeHooks";

interface UserInfo {
    id: number,
    personalScore: number,
    teamScore: number,
    team: string,
}

const TheProfileInfo = () => {
    const {api, initAPI} = axiosMixins();

    const fullName = useAppSelector((state) => state.user.fullName);
    const [user, setUser] = useState({} as UserInfo);

    const getInfoAboutUser = () => {

    }

    useEffect(() => {
        initAPI(false);

        getInfoAboutUser();
    }, []);

    return (
        <div>
            <div id='TopUserInfo'>
                <Avatar>{fullName.split(' ').forEach((item) => item.slice(0, 1)).join(' ')}</Avatar>

                <h2>{fullName}</h2>
            </div>

            <div id='AdditionalInfo'>
                <p>Личные баллы: { user.personalScore }</p>
                <p>Баллы команды: { user.teamScore }</p>
                <p>{ user.team }</p>
                <p>Следующее мероприятие</p>
            </div>
        </div>
    );
};

export default TheProfileInfo;